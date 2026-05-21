# Litheesh V R — Personal Portfolio

A personal portfolio website built with React and Vite, featuring 3D animations, multi-page routing, and a PHP SMTP contact form. Live at [litheesh.com](https://litheesh.com).

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM (SPA with multiple pages)
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Contact Form**: PHP + PHPMailer (SMTP)
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
├── api/
│   ├── contact.php          ← SMTP contact endpoint
│   ├── config.example.php   ← Copy to config.php and add credentials
│   └── vendor/              ← PHPMailer (included)
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

**Prerequisites**: Node v22+ and npm v10+. For the contact form locally: PHP 8+.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd "Lithi's_portflio"

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Configure the contact API
cp api/config.example.php api/config.php
# Edit api/config.php with your SMTP host, username, and app password

# 4. Start the PHP API (terminal 1)
npm run dev:api

# 5. Start the frontend (terminal 2)
npm run dev
# Runs at http://localhost:5173 — form requests proxy to the PHP API
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run dev:api` | Start PHP API at `http://127.0.0.1:8080` for contact form |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Serve the production build locally at port 4173 |

---

## Contact Form (SMTP)

The contact form posts JSON to `/api/contact.php`, which sends email via SMTP using PHPMailer.

**Local setup**

1. Copy `api/config.example.php` to `api/config.php`.
2. Fill in SMTP settings (Gmail example: host `smtp.gmail.com`, port `587`, encryption `tls`, and a Google [App Password](https://myaccount.google.com/apppasswords)).
3. Run `npm run dev:api` and `npm run dev` in separate terminals.

**Production deployment (PHP hosting)**

1. Upload the built `dist/` files and the entire `api/` folder to your web root.
2. Create `api/config.php` on the server with production SMTP credentials.
3. Ensure your domain is listed in `allowed_origins` inside `config.php`.
4. Confirm `https://yourdomain.com/api/contact.php` is reachable.

If you prefer Composer on the server instead of the bundled vendor folder, run `composer install` inside `api/` and remove the committed `vendor/` directory.

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
