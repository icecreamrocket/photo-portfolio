// ─────────────────────────────────────────────────────────────────
// PHOTO INDEX
// This is the only file you need to touch to update the site.
//
// HOW TO ADD A PHOTO:
//   1. Drop the image file into /public/photos/
//      (use a reasonably web-sized export, ~2000px on the long edge,
//       so the site stays fast — see README for export settings)
//   2. Add an entry below. Order in this array = display order.
//      For "src", just write the filename — don't write the full path,
//      the BASE_URL prefix below handles that automatically.
//   3. "orientation" controls the grid cell shape:
//        "landscape" -> wide cell
//        "portrait"  -> tall cell
//        "square"    -> square cell
//      Just match it to the actual shape of the image.
//
// HOW TO REMOVE A PHOTO:
//   Delete its entry below (and optionally the file in /public/photos/).
//
// "category" is freeform — it's just a label, used for the on-image
// tag and the filter bar. Reuse existing categories or invent new ones.
// ─────────────────────────────────────────────────────────────────

// Resolves correctly whether the site is hosted at a domain root
// (e.g. a custom domain) or a subpath (e.g. GitHub Pages project sites
// at username.github.io/repo-name/). Do not hardcode "/photos/..." —
// always build paths through this helper.
const photo = (filename) => `${import.meta.env.BASE_URL}photos/${filename}`;

export const photos = [
  {
    id: 1,
    src: photo("sample-01.jpg"),
    alt: "Replace with a real description of this photo",
    category: "TRAVEL",
    location: "Singapore",
    date: "2026-01",
    orientation: "landscape",
  },
  {
    id: 2,
    src: photo("sample-02.jpg"),
    alt: "Replace with a real description of this photo",
    category: "STREET",
    location: "Kuala Lumpur",
    date: "2026-02",
    orientation: "portrait",
  },
  {
    id: 3,
    src: photo("sample-03.jpg"),
    alt: "Replace with a real description of this photo",
    category: "PORTRAIT",
    location: "Penang",
    date: "2025-11",
    orientation: "square",
  },
  {
    id: 4,
    src: photo("sample-04.jpg"),
    alt: "Replace with a real description of this photo",
    category: "LANDSCAPE",
    location: "Johor Bahru",
    date: "2025-09",
    orientation: "landscape",
  },
  {
    id: 5,
    src: photo("sample-05.jpg"),
    alt: "Replace with a real description of this photo",
    category: "STREET",
    location: "Singapore",
    date: "2025-07",
    orientation: "portrait",
  },
  {
    id: 6,
    src: photo("sample-06.jpg"),
    alt: "Replace with a real description of this photo",
    category: "TRAVEL",
    location: "Bangkok",
    date: "2025-06",
    orientation: "square",
  },
];

// Site identity — also edited here, not buried in component code.
export const profile = {
  name: "Ben Tan",
  tagline: "Photography",
  bio: "Frames from Singapore, Malaysia, and wherever the next trip goes. Mostly shot on a Canon G7X III.",
  email: "you@example.com",
  instagram: "https://instagram.com/yourhandle",
};
