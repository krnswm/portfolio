# Karan Swami: Portfolio

My portfolio site, built with Next.js. Dark by default, with a light theme toggle.

The creative portfolio lives at `/creative`. A tech portfolio will follow at `/tech`, with a landing page at `/` linking to both. Until then, `/` forwards to `/creative`.

## Run it
```
npm install
npm run dev
```
Then open http://localhost:3000.

## Edit content
**All text, credits and links live in `content/creative.js`.** You don't need to touch the other files.

- **New play or film:** copy one entry in `work`, then change its title, year, company, director and roles. Set `featured: true` to show it in Selected Work.
- **Photos:** put them in `public/images/`, then set `image: "/images/your-file.jpg"`. They are resized and compressed automatically.
  - Portrait or hero photo: `profile.portrait`
  - Headshot: add `headshot: "/images/headshot.jpg"` to `profile`
- **Reels:** add `{ image, title, link }` items to `content.reels`. The image is a 9:16 thumbnail and the link is the Instagram URL.
- **The Fourth Frame:** add up to 3 items to `fourthFrame.work`.
- **Instagram / YouTube:** fill in `profile.instagram` and `profile.youtube`.

## Files
```
app/layout.js               fonts and theme
app/globals.css             design (colours and fonts are at the top)
app/creative/page.js        the creative portfolio page
app/creative/Interactive.js theme toggle, filters, mobile menu
content/creative.js         ALL CREATIVE CONTENT: edit this one
public/images/              photos
```

## Deploy
Import the repo on vercel.com and click Deploy. No settings are needed, and every push updates the site.
