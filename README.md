# Brilliant & Overlooked — Official Website & Source Archive

Handcrafted static website in the **Quiet Signal** design system for [Brilliant & Overlooked](https://www.youtube.com/channel/UCjKo5MqrVWLy4NgukCAHBGg).

- **Live URL (GitHub Pages):** `https://brilliantandoverlooked.github.io`
- **Zero dependencies / zero build step:** Pure semantic HTML5, CSS, and vanilla JS.

## Local Preview
Run any static server in this folder, e.g.:
```powershell
python -m http.server 8080
```
Then open `http://localhost:8080`.

## Connecting a Custom `.com` Domain Later (60 Seconds)
1. Buy `brilliantandoverlooked.com` on Cloudflare Registrar (~$11.17/yr), Spaceship, or Porkbun.
2. Add GitHub Pages A/CNAME DNS records (or deploy directly to Cloudflare Pages from this exact repo).
3. Add a `CNAME` file containing `brilliantandoverlooked.com` (or enter it under **Settings → Pages → Custom domain**).
