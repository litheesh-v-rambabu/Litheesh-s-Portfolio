# Litheesh V R — Personal Portfolio

A personal portfolio website built with React and Vite, featuring 3D animations, multi-page routing, and an EmailJS-powered contact form. Live at [litheesh.com](https://litheesh.com).

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM (SPA with multiple pages)
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Contact Form**: EmailJS
- **SEO**: React Helmet Async
- **Runtime**: Node v22.22.0 / npm v10.9.4

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — About, Projects preview, Contact |
| `/about` | Extended about section |
| `/experience` | Work timeline and tech stack |
| `/projects` | Full projects listing with AI/ML and Web tabs |
| `/certifications` | Certifications grid |
| `/achievements` | Achievement cards |
| `/contact` | Contact form with 3D Earth |
| `/privacy-policy` | Privacy policy |

---

## Features

- 3D animated robot on the Hero section
- 3D Earth globe on the Contact section
- Animated star field background
- Dark theme throughout (`#050816` base)
- Cookie consent banner
- SEO meta tags per page
- Fully responsive with a custom `xs: 450px` breakpoint
- AI/ML and Web project tabs with metrics display

---

## Project Structure

```
Lithi's_portflio/
├── index.html
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── styles.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   ├── ExperiencePage.jsx
    │   ├── ProjectsPage.jsx
    │   ├── CertificationsPage.jsx
    │   ├── AchievementsPage.jsx
    │   ├── ContactPage.jsx
    │   ├── PrivacyPolicyPage.jsx
    │   └── NotFoundPage.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── Tech.jsx
    │   ├── Works.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Certifications.jsx
    │   ├── Achievements.jsx
    │   ├── AllProjects.jsx
    │   ├── SEO.jsx
    │   ├── Loader.jsx
    │   ├── CookieConsent.jsx
    │   └── canvas/
    │       ├── Ball.jsx
    │       ├── Computers.jsx
    │       ├── Earth.jsx
    │       ├── RobotCanvas.jsx
    │       └── Stars.jsx
    ├── constants/
    │   └── index.js        ← All site data lives here
    ├── utils/
    │   └── motion.js
    └── hoc/
        └── SectionWrapper.jsx
```

---

## Getting Started

**Prerequisites**: Node v22+ and npm v10+

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd "Lithi's_portflio"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# Runs at http://localhost:5173
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Serve the production build locally at port 4173 |

---

## Updating Content

All site content — skills, work experience, projects, certifications, and achievements — is managed from a single file:

```
src/constants/index.js
```

**To add a project**, follow the template in the comments inside that file and set `category` to either `"aiml"` or `"web"`.

**To add a certification**, append an entry to the `certifications` array using the template provided in comments.

**To update experience**, edit the `experiences` array. Entries are ordered newest to oldest.

**To add company logos**, save the image to `src/assets/company/`, export it from `src/assets/index.js`, then import it in `constants/index.js`.

---

## Work Experience

1. Junior AI/ML Engineer — Isahghan Minds (Apr 2024 – Aug 2025)
2. Software Engineer Intern — ESI Software (Aug 2023 – Nov 2023)
3. Machine Learning Intern — Coincent.ai (Apr 2023 – May 2023)
4. Freelance Web Developer — Self-Employed (Mar 2023 – Present)

---

## Projects

**AI/ML:** Code Suggester, Brain Tumor Segmentation, NLTA, Dog Breed Classifier, Blockchain eVoting

**Web:** AnbuCocoMart, KSModular, IsanghanMinds, Stavat, Ausmile, Evice

---

## License

This project is for personal portfolio use. Feel free to use it as a reference or template — attribution appreciated but not required.
