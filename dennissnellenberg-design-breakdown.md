# dennissnellenberg.com — Design & Build Breakdown

> Reference: [dennissnellenberg.com](https://dennissnellenberg.com)  
> Awards: Awwwards Site of the Day + Honourable Mention  
> Style tags: Minimal · Huge Type · Parallax · Motion-rich

---

## 1. Design Philosophy

The site is a masterclass in **restrained minimalism with maximum motion**. The philosophy can be summarised as:

- Almost no colour — near-black and off-white only, with no decorative gradients or illustrations
- Typography does all the visual heavy lifting (enormous, full-viewport-width text)
- Every interaction has a deliberate animation response — nothing is static
- White space is used aggressively to let content breathe
- The site *feels* premium through motion quality, not visual complexity

---

## 2. Visual Design System

### 2.1 Colour Palette

| Role | Value | Notes |
|------|-------|-------|
| Background | `#0e0e0e` or `#111` | Near-black, not pure black |
| Primary text | `#f5f5f5` or `#efefef` | Warm off-white |
| Accent / hover | `#ffffff` | Pure white on interactions |
| Subtle muted | `rgba(255,255,255,0.15)` | Borders, dividers |

No brand colours. The palette is intentionally binary — the motion IS the colour.

### 2.2 Typography

The type system is the dominant visual element.

- **Primary typeface**: A grotesque sans-serif (likely **Editorial New** or a similar editorial serif/sans pairing — confirmed as a mix of a high-end grotesque display face and a light serif)
- **Hero text**: Viewport-filling, `clamp(8vw, 12vw, 160px)` range — covers nearly the full screen width
- **Body/label text**: Small, `12–14px`, uppercase tracked, used sparingly
- **Weight contrast**: Heavy display weight (Black/900) against Ultra-light (100/200) body — the contrast is stark and intentional
- **Line height**: Very tight on headlines (`0.85–0.95`), generous on body (`1.6–1.8`)
- **Letter spacing**: Headlines slightly negative (`-0.02em`), labels wide-tracked (`0.1–0.15em`)

### 2.3 Layout & Grid

- Full-bleed sections — no max-width container on the outer shell
- Content is inset with generous asymmetric padding (`5vw` sides typically)
- No traditional card grid — project work is presented as **full-width stacked entries** with left-aligned metadata
- Sections separated by whitespace, not borders or backgrounds
- Navigation is minimal: just name left, links right — fixed or sticky, nearly invisible

### 2.4 Imagery

- Project images presented large, often cropped to landscape 16:9 or square
- Images use a subtle **darkening overlay on rest**, then brighten on hover
- Parallax applied to images on scroll — images move slower than the viewport
- No image borders or drop shadows — images bleed to their container edge

---

## 3. Motion & Animation System

This is the core differentiator. Every element has a choreographed entrance and interaction state.

### 3.1 Scroll-Driven Animations (GSAP ScrollTrigger)

| Element | Behaviour |
|---------|-----------|
| Section headings | Translate Y from `+60px` to `0`, fade in, triggered when 20% in viewport |
| Project images | Parallax — move at 60–70% scroll speed relative to container |
| Body copy lines | Stagger in line-by-line from bottom as section enters |
| Numbers / counters | Count up when scrolled into view |
| Horizontal rules | Scale X from 0 to 1, origin left |

### 3.2 Page Transitions (Barba.js)

The site uses **Barba.js** for SPA-style page transitions without a full React framework:

1. On link click → overlay curtain slides in (black panel, covers viewport)
2. New page content loads underneath
3. Curtain slides out to reveal new page
4. New page elements stagger in

This creates a seamless "film edit" feel rather than a browser reload flash.

### 3.3 Smooth Scroll (Locomotive Scroll / Lenis)

Replaces native scroll with a **damped inertia scroll**:
- Scroll position lags behind cursor by ~100–150ms
- Creates the "heavy, physical" feel
- Required for GSAP ScrollTrigger to hook into correctly
- Library: **Locomotive Scroll v4** (original) or **@studio-freight/lenis** (modern recreation)

### 3.4 Hover Micro-animations

| Element | Hover behaviour |
|---------|----------------|
| Nav links | Underline draws in from left (`scaleX 0→1`) |
| Project titles | Letter-spacing expands slightly, colour shifts |
| CTA buttons | Background fills from left, text colour inverts |
| Images | Subtle scale up (`1.0 → 1.03`), 400ms ease |
| Cursor | Custom cursor grows/morphs on hover over interactive elements |

### 3.5 Custom Cursor

A signature element — the native cursor is hidden and replaced:
- Small dot at rest (`8px` filled circle)
- Expands to ring (`40px` border-only circle) over links/images
- Mix-blend-mode: `difference` applied — turns white over dark backgrounds, black over light
- Trails slightly behind mouse position using GSAP lerp

---

## 4. Technical Stack

### 4.1 Core

| Layer | Technology |
|-------|-----------|
| Core language | Vanilla JavaScript (original site) |
| Framework option | Next.js (App Router) for modern rebuilds |
| Bundler | Vite or Next.js built-in |
| Styling | Custom CSS or Tailwind CSS |

> **Important:** The original dennissnellenberg.com is built with **vanilla JS, CSS, and HTML** — not React. The motion techniques don't require a framework. Community recreations use Next.js for convenience.

### 4.2 Animation Libraries

| Library | Role |
|---------|------|
| **GSAP** (GreenSock) | Core animation engine — timelines, ScrollTrigger, all tweens |
| **GSAP ScrollTrigger** | Scroll-linked animation plugin |
| **Barba.js** | Page transition routing |
| **Locomotive Scroll** or **Lenis** | Smooth scroll with inertia |
| **Framer Motion** | Optional React alternative to GSAP for component animations |

### 4.3 Image Handling

| Tool | Usage |
|------|-------|
| **Cloudinary** (via `next-cloudinary`) | Image hosting, transformation, optimisation |
| Next.js `<Image>` | Lazy loading + responsive sizes |

### 4.4 Dev Tooling

```
pnpm             — package manager
ESLint           — JS linting
Stylelint        — CSS linting  
Prettier         — formatting
Husky            — pre-commit hooks
lint-staged      — staged file linting
PostCSS          — CSS transforms
```

---

## 5. Page & Section Architecture

### 5.1 Pages

```
/              — Home (hero + selected work + about teaser + contact CTA)
/work          — Full project list
/work/[slug]   — Individual project case study
/about         — About + services + skills
/contact       — Contact form + social links
```

### 5.2 Home Page Section Breakdown

```
┌─────────────────────────────────────────────────┐
│  NAV  — Name left | Links right (minimal fixed)  │
├─────────────────────────────────────────────────┤
│  HERO                                            │
│  Huge display text: "Freelance Designer          │
│  & Developer"                                    │
│  Sub-label: location, availability status        │
│  Scroll indicator: small animated arrow/line     │
├─────────────────────────────────────────────────┤
│  SELECTED WORK                                   │
│  Full-width project entries, stacked             │
│  Each: number + title + tags + image             │
│  Image reveals on hover (or is always visible)   │
├─────────────────────────────────────────────────┤
│  ABOUT TEASER                                    │
│  Large quote or statement text                   │
│  Brief bio in small body copy                    │
├─────────────────────────────────────────────────┤
│  SERVICES / CAPABILITIES                         │
│  Horizontal list or simple stacked labels        │
├─────────────────────────────────────────────────┤
│  CONTACT CTA                                     │
│  Enormous "Let's Talk" or email address as link  │
│  Footer with copyright                           │
└─────────────────────────────────────────────────┘
```

### 5.3 Project Entry Pattern

Each project row in the work list follows this structure:

```
01                    Project Name                  →
UI/UX · Development   [Year]
────────────────────────────────────────────────────
```

On hover: the project image appears (either slides in from right, or fades in as a floating preview that follows the cursor).

---

## 6. Key Implementation Patterns

### 6.1 Text Reveal Animation

Headlines split into individual lines and each line wraps in an overflow-hidden container. The text translates from below into position:

```javascript
// GSAP text reveal pattern
gsap.from(".hero-line", {
  yPercent: 100,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out",
  delay: 0.3
});
```

Each `<h1>` line gets wrapped:
```html
<div class="line-wrap" style="overflow: hidden;">
  <div class="line">Freelance Designer</div>
</div>
```

### 6.2 ScrollTrigger Parallax

```javascript
gsap.to(".project-image", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".project-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

### 6.3 Smooth Scroll Setup (Lenis)

```javascript
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Connect to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
```

### 6.4 Custom Cursor

```javascript
const cursor = document.querySelector('.cursor')
const cursorDot = document.querySelector('.cursor-dot')

window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" })
  gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 })
})

// Expand on hover
document.querySelectorAll('a, button, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 3, duration: 0.3 })
  })
  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, duration: 0.3 })
  })
})
```

```css
.cursor {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
```

### 6.5 Barba.js Page Transition

```javascript
barba.init({
  transitions: [{
    name: 'curtain',
    leave(data) {
      return gsap.to('.page-transition', {
        scaleY: 1,
        duration: 0.6,
        ease: "power4.inOut",
        transformOrigin: "bottom"
      })
    },
    enter(data) {
      return gsap.from('.page-transition', {
        scaleY: 0,
        duration: 0.6,
        ease: "power4.inOut",
        transformOrigin: "top",
        delay: 0.1
      })
    }
  }]
})
```

---

## 7. CSS Architecture

### 7.1 Reset & Base

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0e0e0e;
  --fg: #f0f0f0;
  --accent: #ffffff;
  --font-display: 'YourDisplayFont', sans-serif;
  --font-body: 'YourBodyFont', sans-serif;
}

html { cursor: none; } /* hide native cursor */
body { background: var(--bg); color: var(--fg); overflow-x: hidden; }
```

### 7.2 Typography Scale

```css
.display-xl { font-size: clamp(60px, 10vw, 160px); line-height: 0.9; letter-spacing: -0.02em; }
.display-lg { font-size: clamp(40px, 6vw, 100px); line-height: 0.95; }
.label      { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; }
.body       { font-size: 16px; line-height: 1.7; font-weight: 300; }
```

---

## 8. Recommended Modern Rebuild Stack (Next.js 15)

If rebuilding with your preferred Next.js 15 + TypeScript setup:

```
framework      next.js 15 (App Router)
language       TypeScript
styling        Tailwind CSS v4
animation      GSAP + @gsap/react  
scroll         @studio-freight/lenis
transitions    Framer Motion (layout animations) or Barba.js
images         next/image + Cloudinary
fonts          next/font (local or Google)
deployment     Vercel
```

### Suggested folder structure

```
app/
  layout.tsx          ← Lenis provider, custom cursor, nav
  page.tsx            ← Home: hero + work list + contact
  work/
    page.tsx          ← All projects
    [slug]/
      page.tsx        ← Case study
  about/page.tsx
  contact/page.tsx
components/
  cursor/             ← Custom cursor component
  nav/                ← Minimal fixed nav
  hero/               ← Viewport text hero
  project-list/       ← Stacked work entries
  page-transition/    ← Curtain overlay
hooks/
  useLenis.ts         ← Smooth scroll hook
  useGSAP.ts          ← GSAP context hook
lib/
  gsap.ts             ← GSAP + ScrollTrigger registration
```

---

## 9. Agent Prompt Guidance

When prompting an AI agent to replicate this site, use language like:

> "Build a minimal dark-mode portfolio site. Use GSAP ScrollTrigger for parallax and entrance animations. Implement smooth scroll with Lenis. Add a custom CSS cursor with mix-blend-mode: difference. Page transitions should use a full-viewport curtain overlay. Typography should be viewport-filling display text (clamp 8–12vw). No colour — only near-black background with off-white text. Project entries are full-width rows with staggered text and hover image previews."

Key constraints to specify:
- `cursor: none` on html — custom cursor only
- `overflow: hidden` on headline line wrappers for text reveal
- ScrollTrigger `scrub: true` for parallax (not snapping)
- Lenis must tick via `gsap.ticker` not `requestAnimationFrame` independently
- Image hover states use `scale(1.03)` max — never more

---

## 10. Reference Links

| Resource | URL |
|----------|-----|
| Live site | https://dennissnellenberg.com |
| Awwwards listing | https://www.awwwards.com/sites/dennis-snellenberg |
| Open-source recreation | https://github.com/AliBagheri2079/dennis-snellenberg-portfolio |
| GSAP docs | https://gsap.com/docs |
| Lenis (smooth scroll) | https://github.com/studio-freight/lenis |
| Barba.js | https://barba.js.org |
| Locomotive Scroll | https://locomotivemtl.github.io/locomotive-scroll |

---

*Breakdown compiled June 2026. Site details based on public analysis, showcase documentation, and open-source recreations.*
