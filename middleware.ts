import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const COMING_SOON_ALLOW_PREFIXES = [
  "/coming-soon",
  "/api",
  "/auth",
  "/legal",
  "/protected",
];

const PREVIEW_COOKIE = "site-preview";

export async function middleware(request: NextRequest) {
  const comingSoon = process.env.COMING_SOON === "true";
  const { pathname, searchParams } = request.nextUrl;

  // ?preview=1 sets a 30-day cookie that lets the author bypass the gate.
  // ?preview=0 clears it. The redirect strips the query so URLs stay clean.
  const previewParam = searchParams.get("preview");
  if (previewParam === "1" || previewParam === "0") {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete("preview");
    const res = NextResponse.redirect(cleanUrl);
    if (previewParam === "1") {
      res.cookies.set(PREVIEW_COOKIE, "1", {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
    } else {
      res.cookies.delete(PREVIEW_COOKIE);
    }
    return res;
  }

  const isPreviewing = request.cookies.get(PREVIEW_COOKIE)?.value === "1";
  const isAllowed = COMING_SOON_ALLOW_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  if (comingSoon && !isPreviewing && !isAllowed) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/coming-soon";
    const gated = NextResponse.rewrite(rewriteUrl);
    // Keep the gated homepage out of search indexes while the flag is on,
    // so the real homepage isn't replaced in Google's snapshot.
    gated.headers.set("X-Robots-Tag", "noindex, nofollow");
    return gated;
  }

  // ----- Supabase session refresh (existing behavior) -----
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
