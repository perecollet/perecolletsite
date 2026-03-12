# perecolletsite

Personal portfolio and CV for **Pere Collet Montaña** — Backend Engineer specializing in Java · Spring Boot · Barcelona.

Live at: [perecollet.dev](https://perecollet.dev/)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Build tool | Vite 5 |
| Animations | Framer Motion 11 |
| Styling | Pure CSS (custom properties, no framework) |
| Fonts | JetBrains Mono (headings) · IBM Plex Sans (body) |

---

## Project Structure

```
src/
├── data/
│   └── portfolio.ts        # Single source of truth for all content
├── types/
│   └── index.ts            # TypeScript interfaces
├── components/
│   ├── NavBar.tsx           # Fixed nav with IntersectionObserver active tracking
│   ├── Badge.tsx            # Skill badges with category-based colors
│   ├── SectionTitle.tsx     # Section headings with // prefix
│   └── TimelineCard.tsx     # Animated card for experience & education
└── sections/
    ├── Hero.tsx             # Typewriter effect, terminal mockup, CTAs
    ├── About.tsx            # Summary, location, languages, interests
    ├── Experience.tsx       # Work history timeline
    ├── Projects.tsx         # Project showcase grid
    ├── Skills.tsx           # Skills grouped by category
    ├── Education.tsx        # Education timeline
    └── Contact.tsx          # Contact info and mailto CTA
public/
├── CV_Pere_Collet_en.pdf    # Downloadable resume
├── og-image.png             # Social media preview
├── robots.txt
└── sitemap.xml
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```

---

## Content Management

All site content lives in **`src/data/portfolio.ts`** — profile info, experience, projects, skills, and education. Edit that file to update any text without touching components.

---

## Design System

Dark theme with neon accents, defined as CSS variables in `src/index.css`:

| Variable | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0d1117` | Page background |
| `--bg-secondary` | `#161b22` | Alternate section background |
| `--bg-card` | `#21262d` | Card backgrounds |
| `--accent` | `#00ff88` | Green glow, primary actions |
| `--accent-secondary` | `#00b4d8` | Cyan, frontend badges |
| `--text-primary` | `#e6edf3` | Main text |
| `--text-muted` | `#8b949e` | Secondary text |
| `--border` | `#30363d` | Borders and dividers |

**Badge category colors:** Backend → green · Frontend → cyan · Database → orange · DevOps → purple · Other → gray

---

## SEO & Meta

- Open Graph and Twitter Card tags in `index.html`
- JSON-LD structured data (Person schema)
- Canonical URL, sitemap, and robots.txt included
- Responsive favicons: `favicon.png`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`

---

## Accessibility

- `prefers-reduced-motion` respected in typewriter animation
- Semantic HTML throughout
- ARIA labels on icon-only buttons
