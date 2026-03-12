<div align="center">

<br/>

```
██████╗ ███████╗███╗   ██╗███████╗    ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝████╗  ██║██╔════╝    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
██████╔╝█████╗  ██╔██╗ ██║█████╗      ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
██╔══██╗██╔══╝  ██║╚██╗██║██╔══╝      ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
██████╔╝███████╗██║ ╚████║███████╗    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝    ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
```

**Custom typefaces for personal projects — Cybersecurity & Comic**

[![Version](https://img.shields.io/badge/version-2.0.0-ff2244?style=flat-square&labelColor=0e1014)](package.json)
[![License](https://img.shields.io/badge/license-BUSL--1.1-00ff88?style=flat-square&labelColor=0e1014)](LICENSE)
[![Fonts](https://img.shields.io/badge/fonts-2-00e5ff?style=flat-square&labelColor=0e1014)](#fonts)
[![Tailwind](https://img.shields.io/badge/tailwind-plugin-ffd700?style=flat-square&labelColor=0e1014)](tailwind.js)
[![GitHub Packages](https://img.shields.io/badge/registry-GitHub_Packages-3a4050?style=flat-square&labelColor=0e1014)](https://github.com/Beneking102/bene-design-fonts/packages)
[![Preview](https://img.shields.io/badge/preview-live-ff2244?style=flat-square&labelColor=0e1014)](https://bene-design-font-preview.vercel.app)

<br/>

**[→ Live Preview](https://bene-design-font-preview.vercel.app)**

<br/>

</div>

---

## Fonts

<br/>

### `BeneHack` — Cybersecurity

> Angular · Condensed · 5° Forward Slant · Bezier Curves flattened to sharp geometry

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789 !@#$%^&*()-_=+[]|;:,.<>?
```

**Built for:** Security tool UIs, terminals, dashboards, CVE badges, headers in bene-seckit.

---

### `BeneComic` — Comic

> Rounded · Handwritten jitter · Casual · Poppins Bold base

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789 !@#$%&?★
```

**Built for:** Landing pages, fun sections, ChromaForge, DesignTool Hub, playful headings.

---

## What's in the box

```
@beneking102/bene-design-fonts
├── fonts/
│   ├── BeneHack.ttf          # 160KB  Angular cyber typeface
│   ├── BeneHack.woff         #  77KB  (-52%)
│   ├── BeneComic.ttf         # 173KB  Comic typeface
│   └── BeneComic.woff        # 120KB  (-31%)
├── css/
│   ├── benehack.css          # @font-face with woff → ttf fallback stack
│   ├── benecomic.css
│   └── index.css             # both fonts combined
├── components/
│   ├── BurstText.jsx         # React component — POW! ZAP! burst words
│   └── BurstText.css         # floating keyframe animation
└── tailwind.js               # Tailwind CSS v3 plugin
```

---

## Installation

> Requires a GitHub Personal Access Token with `read:packages` scope.

**1. Add to `.npmrc` in your project root:**

```ini
@beneking102:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> ⚠️ Always add `.npmrc` to `.gitignore` — never commit your token.

**2. Install:**

```bash
npm install @beneking102/bene-design-fonts
```

---

## Usage

### CSS / Import

```js
// Both fonts
import '@beneking102/bene-design-fonts'

// Only BeneHack
import '@beneking102/bene-design-fonts/hack'

// Only BeneComic
import '@beneking102/bene-design-fonts/comic'
```

```css
/* Direct CSS import */
@import '@beneking102/bene-design-fonts/css/benehack.css';
@import '@beneking102/bene-design-fonts/css/benecomic.css';
```

---

### Tailwind Plugin

```js
// tailwind.config.js
module.exports = {
  plugins: [require('@beneking102/bene-design-fonts/tailwind')]
}
```

**Available utility classes:**

| Class | Effect |
|---|---|
| `font-benehack` | `font-family: 'BeneHack', monospace` |
| `font-benecomic` | `font-family: 'BeneComic', sans-serif` |
| `tracking-hack` | `letter-spacing: 0.12em` |
| `tracking-hack-wide` | `letter-spacing: 0.22em` |
| `shadow-cyber` | Red drop shadow + glow |
| `shadow-cyber-green` | Green glow |
| `shadow-cyber-cyan` | Cyan glow |
| `glow-red` | Full red neon glow |
| `glow-green` | Full green neon glow |
| `shadow-comic` | Classic comic drop shadow |
| `text-outline-red` | Red text outline, transparent fill |
| `text-outline-green` | Green text outline |
| `bg-hack-card` | Dark card background `#0e1014` |
| `border-hack` | Dark cyber border `#1e2430` |

**Theme tokens available:**

```js
// In tailwind config these are auto-extended:
colors: {
  hack: {
    red: '#ff2244',   green: '#00ff88',
    cyan: '#00e5ff',  gold:  '#ffd700',
    bg:   '#080a0c',  card:  '#0e1014',
  }
}
fontFamily: {
  benehack:  ['BeneHack',  'monospace'],
  benecomic: ['BeneComic', 'sans-serif'],
}
```

**Example JSX:**

```jsx
<h1 className="font-benehack tracking-hack shadow-cyber text-hack-red text-5xl">
  NPM CVE SCANNER
</h1>

<h2 className="font-benecomic shadow-comic text-4xl" style={{ color: '#ff4444' }}>
  ChromaForge
</h2>

<span className="font-benehack glow-green tracking-hack text-xl">
  ✓ VERIFIED
</span>
```

---

### `BurstText` Component

Decorative burst words (`POW!`, `ZAP!`, `BREACH`) that float around a heading.  
Animate in on scroll via native `IntersectionObserver` — zero dependencies.

```jsx
import BurstText from '@beneking102/bene-design-fonts/components/BurstText'

// Comic variant
<BurstText
  variant="comic"
  bursts={{ tl: 'POW!', tr: 'ZAP!', bl: '★', br: 'WOW!' }}
  fontSize="64px"
>
  BENE SECKIT
</BurstText>

// Cyber variant — animates in on scroll
<BurstText
  variant="cyber"
  bursts={{ tl: 'BREACH', tr: 'CVE!', bl: '0DAY', br: 'PWND!' }}
  animateOnScroll
  threshold={0.35}
  staggerMs={80}
>
  NPM SCANNER
</BurstText>
```

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'comic' \| 'cyber'` | `'comic'` | Font style + default burst words |
| `bursts` | `{ tl, tr, bl, br }` | preset per variant | Override any burst slot — omit to hide |
| `fontSize` | `string` | `'64px'` | Main text size |
| `color` | `string` | variant default | Override main text color |
| `animateOnScroll` | `boolean` | `true` | Bursts fly in when entering viewport |
| `threshold` | `number` | `0.3` | IntersectionObserver threshold |
| `staggerMs` | `number` | `80` | ms delay between each burst appearing |

---

## Recommended styles

### BeneHack — Cyber Red (default)
```css
font-family: 'BeneHack', monospace;
color: #ff2244;
text-shadow: 2px 2px 0 #881122, 0 0 20px rgba(255, 34, 68, 0.35);
letter-spacing: 0.12em;
```

### BeneHack — Terminal Green
```css
font-family: 'BeneHack', monospace;
color: #00ff88;
text-shadow: 0 0 10px #00ff88, 0 0 30px rgba(0, 255, 136, 0.4);
```

### BeneHack — Outline
```css
font-family: 'BeneHack', monospace;
-webkit-text-stroke: 1.5px #ff2244;
color: transparent;
letter-spacing: 0.12em;
```

### BeneComic — Classic
```css
font-family: 'BeneComic', sans-serif;
color: #ff4444;
text-shadow: 3px 3px 0 #880000;
```

---

## Technical details

| Property | BeneHack | BeneComic |
|---|---|---|
| Base font | Poppins Bold | Poppins Bold |
| X scale | 72% condensed | 106% wide |
| Slant | 5° forward | 7° forward |
| Curve treatment | Bezier → polyline (angular) | Preserved + jitter |
| Coordinate jitter | None | ±5px per point |
| Glyphs | 826 | 826 |
| Formats | TTF · WOFF · WOFF2\* | TTF · WOFF · WOFF2\* |

> \* WOFF2 requires `pip install brotli` locally: `python -m fontTools.ttLib.woff2 compress fonts/BeneHack.ttf`

---

## License

**Components, CSS, Tailwind plugin:** [BUSL-1.1](LICENSE) — personal & internal use only.  
**Font files:** Derived from [Poppins](https://fonts.google.com/specimen/Poppins) (SIL Open Font License 1.1) — see [licenses/OFL-Poppins.txt](licenses/OFL-Poppins.txt).

---

<div align="center">

`@beneking102/bene-design-fonts` · v2.0.0 · Private GitHub Packages  
Made by [beneking102](https://github.com/Beneking102) · [benedikt-pkr.info](https://benedikt-pkr.info)

</div>