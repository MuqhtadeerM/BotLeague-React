# ⚡ BotLeague — India's Ultimate Robotics Arena

A fully responsive landing page for **BotLeague**, India's national robotics combat league. Built with React, TypeScript, and Tailwind CSS.

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18+ | UI framework |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | v3 | Utility-first styling |
| Lucide React | latest | Icon library |
| Google Fonts | — | Orbitron, Roboto, Inter, Rajdhani |

---

## 📁 Project Structure

```
botleague/
├── public/
│   ├── botleague-logo.png        # Navbar logo
│   ├── arena-battle.png          # Hero background image
│   ├── leaderboard.png           # League Advantage section image
│   ├── sports/
│   │   ├── robo-race.jpg
│   │   ├── line-follower.jpg
│   │   ├── rc-racing.jpg
│   │   ├── drone-racing.jpg
│   │   ├── robo-hockey.jpg
│   │   ├── robo-war.jpg
│   │   └── circuit-bg.png
│   └── sponsors/
│       ├── nit-delhi.png
│       ├── indian-bit.png
│       ├── nit-silchar.png
│       ├── robo-company-1.png
│       ├── iit-bombay.png
│       └── robo-company-2.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Fixed top navigation with active link underline
│   │   ├── Hero.tsx                  # Full-bleed hero with arena image + live badge
│   │   ├── CompetitionsEvents.tsx    # Live bracket, upcoming events, past results
│   │   ├── UserJourney.tsx           # 4-step path to the league
│   │   ├── CompetitionDisciplines.tsx# Sports category cards grid
│   │   ├── LeagueAdvantage.tsx       # Why Register + leaderboard image
│   │   ├── JoinEcosystem.tsx         # Signup forms + sponsors grid
│   │   └── Footer.tsx                # Quick links + social media icons
│   ├── App.tsx                       # Root component, page composition
│   ├── index.tsx                     # React entry point
│   └── index.css                     # Tailwind directives + Google Fonts import
│
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## 🛠️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/botleague.git
cd botleague
npm install
```

### 2. Add Required Images

Place the following images in your `public/` folder before running:

```
public/botleague-logo.png     — BotLeague logo (navbar)
public/arena-battle.png       — Robot battle photo (hero bg)
public/leaderboard.png        — Leaderboard card image
public/sports/*.jpg/.png      — Sport discipline card images
public/sponsors/*.png         — Sponsor logos
```

### 3. Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚠️ Tailwind CSS Setup Note

This project uses **Tailwind CSS v3**. If you encounter a PostCSS error like:

```
Error: It looks like you're trying to use tailwindcss directly as a PostCSS plugin
```

Run the following to fix it:

```bash
npm uninstall tailwindcss
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Then make sure `postcss.config.js` looks like:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Page background |
| Card | `#141414` / `#171717` | Card backgrounds |
| Border | `#2a2a2a` / `#5A5A5A` | Card borders |
| Red (primary) | `#e8192c` / `#FF4D57` | CTAs, accents, live badge |
| Red dark | `#b01020` | Button hover |
| Text | `#f0f0f0` | Primary text |
| Muted | `#888888` | Secondary text |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Orbitron** | 600–700 | All headings, section titles, buttons |
| **Roboto** | 500 | Hero subheading |
| **Inter** | 400–500 | Body text, card content, nav links |
| **Rajdhani** | 600–700 | Fallback display font |

---

## 🗂️ Page Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | `Navbar` | Fixed nav with logo, links, LOGIN + REGISTER NOW buttons. Active link shows red underline. |
| 2 | `Hero` | Full-bleed arena battle image with dark gradient overlay. Live episode badge top-right. Orbitron headline + CTA buttons. |
| 3 | `CompetitionsEvents` | Three-column layout: live tournament bracket (SVG), upcoming event cards with register CTA, past results list. |
| 4 | `UserJourney` | Horizontal 4-step timeline: Build → Compete → Rank → League. Connected by a blue line with glowing circle icons. |
| 5 | `CompetitionDisciplines` | Image card grid with overlay titles. Row 1: 4 sports. Row 2: 2 sports + circuit graphic. |
| 6 | `LeagueAdvantage` | Split layout: 4 advantages with icons on the left, leaderboard image on the right. |
| 7 | `JoinEcosystem` | Three signup forms (Judge, Volunteer, Community Member) + sponsor logos grid. |
| 8 | `Footer` | Two-column quick links + social media icons (YouTube, Instagram, Facebook, Twitter). |

---

## 📦 Build for Production

```bash
npm run build
```

Output is in the `build/` folder, ready for static hosting (Vercel, Netlify, GitHub Pages, etc.).

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

Drag and drop the `build/` folder at [app.netlify.com](https://app.netlify.com), or:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

---

## 📄 License

This project was built as a frontend assignment. All design assets and branding belong to BotLeague.
