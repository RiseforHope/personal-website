/** Update public biographical details from here, rather than in individual layouts. */
export const site = {
  name: 'J. Bladimir Garcia',
  givenName: 'Bladimir',
  title: 'Scholar of Hispanic Studies',
  description: 'Academic research on identity, belonging, and territorial disputes; publications, teaching, and independent philosophical writing.',
  location: 'Pennsylvania, United States',
  email: '', // Add a public professional contact address when ready.
  // Only link a CV after adding a real file to public/cv.pdf.
  cvAvailable: false,
  copyright: `© ${new Date().getFullYear()} J. Bladimir Garcia`,
} as const;

export const navigation = [
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Notes', href: '/notes/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'About', href: '/about/' },
] as const;
