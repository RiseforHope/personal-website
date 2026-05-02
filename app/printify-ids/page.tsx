import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function PrintifyIDs() {
  const shopId = process.env.PRINTIFY_SHOP_ID;
  const token = process.env.PRINTIFY_API_TOKEN;

  if (!shopId || !token) return <div className="p-10">Error: Missing API Keys in .env</div>;

  // Fetch products using the corrected Shop ID
  const res = await fetch(`https://api.printify.com/v1/shops/${shopId}/products.json`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });

  if (!res.ok) {
    return <div className="p-10">Error: Still getting {res.status}. Double check your Shop ID in .env.</div>;
  }

  const json = await res.json();
  const products = json.data || [];

  return (
    <div className="p-10 font-mono text-sm space-y-8 bg-white text-zinc-900">
      <h1 className="text-2xl font-bold">Your Official Printify IDs</h1>
      <p className="text-zinc-500">Copy these EXACT numbers into your store/page.tsx file.</p>

      {products.map((p: any) => (
        <div key={p.id} className="border-2 border-zinc-200 p-4 rounded">
          <h2 className="text-lg font-bold text-blue-600">{p.title}</h2>
          <div className="mt-1">
            Product ID: <span className="bg-yellow-200 px-2 font-bold select-all">{p.id}</span>
          </div>

          <div className="mt-4">
            <h3 className="font-bold border-b mb-2">Variants (Choose One):</h3>
            {p.variants.slice(0, 5).map((v: any) => (
              <div key={v.id} className="flex justify-between py-1 border-b border-zinc-100">
                <span>{v.title}</span>
                <span className="bg-green-100 px-2 font-mono select-all">{v.id}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}