# 🌳 Project Knowledge Tree — Litheesh Portfolio

> Last updated: 2026-04-12 (v3 — separate pages for Experience, Certifications, Achievements)
> Use this file as a quick reference. Claude reads this first before diving into source files.

---

## 📌 Project Identity
- **Name**: Litheesh V R — Personal Portfolio Website
- **Type**: React + Vite (SPA, multi-page via React Router)
- **Node**: v22.22.0 | npm: v10.9.4
- **node_modules**: ✅ Already installed (167 packages)

---

## 📁 Folder Structure

```
Lithi's_portflio/
├── index.html                  ← HTML entry point
├── vite.config.js              ← Vite build config (React plugin)
├── tailwind.config.cjs         ← Tailwind: dark theme, custom colors/shadows
├── postcss.config.cjs          ← PostCSS + Autoprefixer
├── package.json                ← Scripts & dependencies
│
├── src/
│   ├── main.jsx                ← React DOM render root
│   ├── App.jsx                 ← Root component with routing
│   ├── index.css               ← Global styles
│   ├── styles.js               ← Styled component utilities
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          ← About + Works + Contact
│   │   ├── AboutPage.jsx         ← About only (ends at "Let's connect")
│   │   ├── ExperiencePage.jsx    ← Experience timeline + Tech stack
│   │   ├── ProjectsPage.jsx      ← All projects (NeuralProjectGraph)
│   │   ├── CertificationsPage.jsx← Certifications grid
│   │   ├── AchievementsPage.jsx  ← Achievements cards
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   ├── Feedbacks.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── AllProjects.jsx
│   │   ├── Certifications.jsx    ← Certification cards grid (empty state if none)
│   │   ├── Achievements.jsx      ← Achievement cards (IARJSET paper pre-filled)
│   │   ├── CookieConsent.jsx
│   │   ├── SEO.jsx
│   │   ├── Loader.jsx
│   │   └── canvas/             ← Three.js 3D scenes
│   │       ├── Ball.jsx
│   │       ├── Computers.jsx
│   │       ├── Earth.jsx
│   │       ├── RobotCanvas.jsx
│   │       └── Stars.jsx
│   │
│   ├── constants/index.js      ← All site data (skills, experience, projects, etc.)
│   ├── utils/motion.js         ← Framer Motion animation variants
│   └── hoc/SectionWrapper.jsx  ← Higher-order component for section animations
│
├── public/
│   ├── logo.svg
│   ├── desktop_pc/             ← 3D model (scene.gltf + textures)
│   └── planet/                 ← 3D model (scene.gltf + textures)
│
└── KNOWLEDGE_TREE.md           ← This file
```

---

## ⚙️ NPM Scripts

| Command           | What it does                                      |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Start local dev server (hot reload, instant)      |
| `npm run build`   | Build optimized production bundle → `dist/`       |
| `npm run preview` | Serve the production build locally for testing    |

---

## 📦 Key Dependencies

| Package                        | Purpose                              |
|-------------------------------|--------------------------------------|
| react + react-dom              | Core React                           |
| react-router-dom               | Multi-page routing (SPA)             |
| three                          | 3D graphics engine                   |
| @react-three/fiber             | React renderer for Three.js          |
| @react-three/drei              | Helpers for Three.js (OrbitControls, etc.) |
| framer-motion                  | Page/section animations              |
| tailwindcss                    | Utility-first CSS                    |
| @emailjs/browser               | Contact form email sending           |
| react-helmet-async             | SEO meta tags                        |
| react-tilt                     | Tilt hover effect on cards           |
| react-vertical-timeline-component | Experience timeline               |
| maath                          | Math helpers for 3D graphics         |

---

## 🎨 Styling Notes
- **Theme**: Dark (primary bg: `#050816`)
- **Custom shadows**: `card` shadow defined in Tailwind config
- **Custom breakpoint**: `xs: 450px`
- **CSS entrypoint**: `src/index.css`

---

## 🗂️ Data / Content Location
All site content (skills list, work experience, projects, testimonials) lives in:
→ `src/constants/index.js`

To update any text/data on the site, edit this file.

---

## 🔌 Features
- 3D animated robot (RobotCanvas) on Hero section
- 3D Earth on Contact section
- Animated star background
- Cookie consent banner (CookieConsent.jsx)
- SEO-ready (React Helmet)
- EmailJS contact form
- Multi-page: Home, About, Experience, Projects, Certifications, Achievements, Contact, Privacy Policy, 404

---

## 🚀 Run Commands (Quick Reference)
```bash
# Development (run from project root)
cd "/path/to/Lithi's_portflio"
npm run dev
# → Opens at http://localhost:5173

# Production build
npm run build
# → Output in dist/

# Preview production build
npm run preview
# → Opens at http://localhost:4173
```

---

## 🗂️ Project Data Structure (v2)

Each project in `src/constants/index.js` has:
- `category: "aiml"` or `category: "web"` — controls which tab it appears in
- AI/ML projects also have `metrics: [{ label, value, color }]` and `gradient` key
- Web projects have `image` (imported asset) and `live_site_link`

**Gradients available:** `blue-purple`, `green-teal`, `red-orange`, `blue-cyan`, `purple-pink`

**Certifications:** `src/constants/index.js` → `certifications` array (empty — add entries with template in comments)
**Achievements:** `src/constants/index.js` → `achievements` array (pre-filled with IARJSET paper)

**Experiences (newest → oldest):**
1. Junior AI/ML Engineer — Isahghan Minds (Apr 2024–Aug 2025)
2. Software Engineer Intern — ESI Software (Aug 2023–Nov 2023)
3. Machine Learning Intern — Coincent.ai (Apr 2023–May 2023)
4. Freelance Web Developer — Self-Employed (Mar 2023–Present)

**AI/ML Projects (5):** Code Suggester, Brain Tumor Seg., NLTA, Dog Breed, Blockchain eVoting
**Web Projects (6):** AnbuCocoMart, KSModular, IsanghanMinds, Stavat, Ausmile, Evice

## 📝 Notes for Claude
- **Do NOT re-read all source files** unless modifying a specific component.
- To add a project: edit `src/constants/index.js` → projects array (instructions are in comments).
- To update experience: edit `src/constants/index.js` → experiences array.
- Company logos: save to `src/assets/company/`, export from `src/assets/index.js`, import in constants.
- `Works.jsx` exports `ProjectCard` and `TabButton` — `AllProjects.jsx` imports both.
- `AboutPage.jsx` renders: About ONLY (ends at "Let's connect").
- `ExperiencePage.jsx` renders: Experience → Tech + StarsCanvas.
- `CertificationsPage.jsx` renders: Certifications + StarsCanvas.
- `AchievementsPage.jsx` renders: Achievements + StarsCanvas.
- `HomePage.jsx` renders: About → Works → Contact + StarsCanvas.
- Check `vite.config.js` for build/plugin changes.
- The `public/` 3D models are static assets — do not modify unless replacing models.
- Fake testimonials were removed; `testimonials` array in constants is empty (safe to ignore).
