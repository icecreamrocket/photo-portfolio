# Photo Portfolio

A photography portfolio site. Dark, mobile-first contact-sheet grid with a
full-screen viewer. Built with React + Vite, no backend, no database — it's
a static site, hosted free.

**Live structure:** edit one file twice a year (`src/data/photos.js`), push,
done. The 6 sample images included are auto-generated placeholders — swap
them for your real photos before publishing.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edits to any file hot-reload instantly.

---

## 2. Updating photos (the only file you'll touch regularly)

Open **`src/data/photos.js`**.

**To add a photo:**
1. Export your photo as a web-sized JPEG — **~2000px on the long edge**,
   quality ~80–85. (A straight-out-of-camera RAW or 6000px export will make
   the site slow on mobile data — see "Exporting photos" below.)
2. Drop the file into `public/photos/`.
3. Add an entry to the `photos` array:

```js
{
  id: 7,                          // next unused number
  src: photo("my-new-shot.jpg"),  // matches the filename you dropped in
  alt: "Sunset over Marina Bay",  // describe it — used for accessibility & SEO
  category: "LANDSCAPE",          // freeform label — reuse or invent
  location: "Singapore",
  date: "2026-06",
  orientation: "landscape",       // "landscape" | "portrait" | "square"
},
```

**To remove a photo:** delete its entry from the array (and optionally the
file from `public/photos/`).

**Orientation** controls the grid cell shape — match it to the image's
actual aspect ratio:
- `landscape` → wide cell (spans 2 columns)
- `portrait` → tall cell (spans 2 rows)
- `square` → square cell

The order of entries in the array = display order on the site.

### Updating your name / bio / links

Same file, bottom — the `profile` object:

```js
export const profile = {
  name: "Ben Tan",
  tagline: "Photography",
  bio: "Frames from Singapore, Malaysia, and wherever the next trip goes.",
  email: "you@example.com",
  instagram: "https://instagram.com/yourhandle",
};
```

### Exporting photos (so the site stays fast)

From Lightroom/Capture One/Photos app, export with:
- Long edge: **2000px** (plenty sharp for screens, much smaller file size)
- Format: JPEG, quality 80–85
- Strip location metadata if you don't want EXIF GPS data publicly embedded
  in the file (most export dialogs have a "remove location info" checkbox)

A typical export at these settings is 300–800KB, vs. 5–15MB+ for a full-res
JPEG. With 12–20 photos that's the difference between a 3MB page load and
a 100MB+ one — meaningful on mobile data.

---

## 3. Deploying — GitHub Pages (free)

**One-time setup:**

1. Create a new GitHub repo, e.g. named `photo-portfolio`.
2. Check `vite.config.js` — the `base` value must match your repo name
   exactly:
   ```js
   base: '/photo-portfolio/',  // change this if you named your repo differently
   ```
3. Push this project to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/photo-portfolio.git
   git push -u origin main
   ```

**Every time you want to publish an update (e.g. twice-yearly photo refresh):**

```bash
npm run deploy
```

This builds the site and pushes it to a `gh-pages` branch. The first time
you run it, go to your repo's **Settings → Pages** and set the source to
the `gh-pages` branch (it'll show up as an option after the first deploy).

Your site will be live at:
```
https://<your-username>.github.io/photo-portfolio/
```

**Using a custom domain instead?** Buy/point a domain at GitHub Pages, add
a `CNAME` file to `public/` containing your domain, and change `base` in
`vite.config.js` back to `'/'`.

---

## 4. Alternative free hosts

If you'd rather not use GitHub Pages:

- **Cloudflare Pages** — connect the GitHub repo, build command
  `npm run build`, output directory `dist`. Set `base: '/'` in
  `vite.config.js` since Cloudflare Pages serves from the domain root.
- **Vercel / Netlify** — same idea: connect repo, build command
  `npm run build`, publish directory `dist`, `base: '/'`.
- **AWS (S3 + CloudFront)** — more setup, free tier covers low traffic, but
  you're managing a bucket policy and a CloudFront distribution by hand.
  Only worth it if you specifically want AWS on your resume/CV — for a
  personal portfolio, GitHub Pages or Cloudflare Pages will be less
  maintenance for identical results.

---

## Project structure

```
src/
  data/photos.js       ← the file you edit regularly
  components/
    Header.jsx/.css     name, bio, category filter pills
    PhotoGrid.jsx/.css   main contact-sheet grid
    Lightbox.jsx/.css    full-screen viewer + filmstrip nav
    Footer.jsx/.css
  App.jsx               wires it all together
  index.css             design tokens (colors, fonts) — edit here to retheme
public/
  photos/               your actual image files live here
```

## Design notes

- Single accent color (`--accent` in `index.css`) used only for active
  states and category tags — easy to swap if you want a different mood.
- The on-image "No. 001 — CATEGORY" tag is the site's one recurring motif,
  echoing a contact sheet / film negative strip. It's always visible on
  mobile (no hover state on touch) and appears on hover on desktop.
- Keyboard support: arrow keys navigate the lightbox, Escape closes it,
  all interactive elements have visible focus rings.
- Respects `prefers-reduced-motion`.
# photo-portfolio
