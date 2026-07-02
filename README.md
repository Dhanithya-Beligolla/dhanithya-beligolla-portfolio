# Dhanithya Beligolla — Professional Portfolio

A modern, fully responsive personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS 4**. It showcases professional experience, research projects, certificates, skills, and a working contact form powered by **EmailJS** — no backend required.

---

## Live Demo

> [https://dhanithya.beligolla.dbel.lk/.](https://dhanithya.beligolla.dbel.lk/)

---

## Features

- **Hero Section** — Split layout with profile photo, name, title, summary, CTA buttons, and social links
- **About Section** — Personal bio, education, and key highlights
- **Experience Journey** — Animated vertical timeline of professional milestones built with Framer Motion
- **Skills Section** — Categorized skill badges
- **Projects Section** — Editable project cards with live/GitHub links (persisted in localStorage)
- **Research Section** — Academic research publications with downloadable attachments
- **Certificates Section** — Certificate cards with credential links and skills gained (persisted in localStorage)
- **Career Plan Section** — Future career goals and roadmap
- **Reflective Journal** — Personal learning reflections
- **CV Section** — One-click CV download
- **Contact Me Section** — Modal contact form with **dual EmailJS template** sending:
  - Notification email → portfolio owner
  - Auto-reply confirmation email → visitor
- **Footer** — Navigation links, resources, and copyright
- **Fully type-safe** — TypeScript throughout
- **No backend** — All email sending is handled client-side via EmailJS
- **Dark theme** — Slate/cyan/blue palette

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.5 | UI framework |
| TypeScript | 6.0.2 | Type safety |
| Vite | 8.x | Build tool & dev server |
| Tailwind CSS | 4.3.0 | Utility-first styling |
| Framer Motion | 12.x | Animations |
| Lucide React | 1.x | Icons |
| @emailjs/browser | 4.x | Client-side email sending |
| clsx | 2.x | Conditional class names |

---

## Project Structure

```
dhanithya-portfolio/
├── public/
│   ├── favicon.svg          # Custom SVG logo (tab icon)
│   └── profile.jpg          # Profile photo
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # All UI components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── About.tsx
│   │   ├── ExperienceJourney.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── CertificateCard.tsx
│   │   ├── CareerPlanSection.tsx
│   │   ├── ReflectiveJournalSection.tsx
│   │   ├── CVSection.tsx
│   │   ├── ContactMeSection.tsx
│   │   ├── ContactFormModal.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── AttachmentButton.tsx
│   │   └── EditableDataPanel.tsx
│   ├── data/                # JSON data files — edit these to update content
│   │   ├── profile.json
│   │   ├── experience.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── research.json
│   │   ├── certificates.json
│   │   ├── careerPlan.json
│   │   └── reflectiveJournals.json
│   ├── hooks/
│   │   └── useEditableCollection.ts   # localStorage persistence hook
│   ├── pages/
│   │   └── PortfolioPage.tsx          # Main page assembling all sections
│   ├── types/
│   │   └── portfolio.ts               # TypeScript type definitions
│   ├── vite-env.d.ts                  # Vite env variable types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                     # Your local env variables (not committed)
├── .env.example             # Env variable template
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config (inline via @tailwindcss/vite)
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later (or pnpm / yarn)

### 1. Clone the repository

```bash
git clone https://github.com/Dhanithya-Beligolla/dhanithya-portfolio.git
cd dhanithya-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your EmailJS credentials (see [EmailJS Setup](#emailjs-setup) below):

```bash
cp .env.example .env
```

Open `.env` and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=your_notification_template_id
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start the development server

```bash
npm run dev
```

The app runs at **http://localhost:5173** by default.

### 5. Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### 6. Preview the production build locally

```bash
npm run preview
```

---

## Customising Your Content

All personal data lives in the `src/data/` JSON files. Edit them to update the portfolio content — no code changes required.

| File | What it controls |
|---|---|
| `profile.json` | Name, title, summary, email, phone, location, social links, CV URL, profile image |
| `experience.json` | Work experience timeline entries |
| `skills.json` | Skill categories and items |
| `projects.json` | Project cards (also editable in the UI) |
| `research.json` | Research publications and attachments |
| `certificates.json` | Certificates (also editable in the UI) |
| `careerPlan.json` | Career goals and plan sections |
| `reflectiveJournals.json` | Reflective journal entries |

### Updating your profile photo

Replace `public/profile.jpg` with your own photo (keep the same filename), or update the `profileImageUrl` field in `src/data/profile.json` to any URL or local path.

---

## EmailJS Setup

The contact form sends two emails without any backend server. Follow these steps to configure it.

### Step 1 — Create an EmailJS account

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and sign up for a free account.

### Step 2 — Add an Email Service

1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**.
2. Choose your email provider (Gmail, Outlook, etc.) and connect your account.
3. Copy the **Service ID** — you will need it for `VITE_EMAILJS_SERVICE_ID`.

### Step 3 — Create Template 1: Notification to You

This template sends the visitor's message to your inbox.

1. Go to **Email Templates** → **Create New Template**.
2. Set the template name: `portfolio_contact_notification`
3. Configure the template:

| Field | Value |
|---|---|
| **Subject** | `New Portfolio Message: {{subject}}` |
| **To Email** | Your own email address (set in EmailJS service settings or hardcode it) |
| **Reply-To** | `{{reply_to}}` |

4. In the template body, use these variables:

```
Name:    {{from_name}}
Email:   {{from_email}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}
```

5. Save the template and copy the **Template ID** → use as `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID`.

### Step 4 — Create Template 2: Auto-Reply to Visitor

This template sends a confirmation email back to the person who submitted the form.

1. Go to **Email Templates** → **Create New Template**.
2. Set the template name: `portfolio_contact_auto_reply`
3. Configure the template:

| Field | Value |
|---|---|
| **Subject** | `Thank you for contacting me, {{from_name}}` |
| **To Email** | `{{from_email}}` (visitor's email — must be set in the To field) |
| **Reply-To** | Your own email address |

4. In the template body, write a confirmation message, for example:

```
Hi {{from_name}},

Thank you for reaching out! I have received your message regarding "{{subject}}" and will get back to you as soon as possible.

Your message:
{{message}}

Best regards,
Dhanithya Beligolla
```

5. Save the template and copy the **Template ID** → use as `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID`.

### Step 5 — Get your Public Key

1. In the EmailJS dashboard, go to **Account** → **General**.
2. Copy the **Public Key** → use as `VITE_EMAILJS_PUBLIC_KEY`.

### Step 6 — Update your `.env` file

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_yyyyyyy
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> **Security note:** Never commit your `.env` file. It is already listed in `.gitignore`. The EmailJS **public key** is safe to expose in frontend code — do not use your private key.

### Template variables reference

Both templates receive the same parameters from the contact form:

| Variable | Description |
|---|---|
| `{{from_name}}` | Visitor's full name |
| `{{from_email}}` | Visitor's email address |
| `{{subject}}` | Subject entered by the visitor |
| `{{company}}` | Company / organisation (optional, defaults to "Not provided") |
| `{{message}}` | Message body |
| `{{reply_to}}` | Same as `from_email` — used as Reply-To |

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub.
2. Import the project at [https://vercel.com](https://vercel.com).
3. Add your environment variables in the Vercel project settings under **Settings → Environment Variables**.
4. Deploy — Vercel auto-detects Vite and builds correctly.

### Netlify

1. Push the repository to GitHub.
2. Connect the repo at [https://app.netlify.com](https://app.netlify.com).
3. Set build command: `npm run build`, publish directory: `dist`.
4. Add environment variables in **Site Settings → Environment Variables**.
5. Deploy.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server (http://localhost:5173) |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## License

This project is for personal portfolio use. Feel free to use it as a template for your own portfolio.

---

## Author

**Dhanithya Beligolla**
Trainee Software Engineer | Full-Stack Developer | AI/ML Researcher

- GitHub: [github.com/Dhanithya-Beligolla](https://github.com/Dhanithya-Beligolla)
- LinkedIn: [linkedin.com/in/dhanithya-b-69486b139](https://www.linkedin.com/in/dhanithya-b-69486b139/)
- Research: [research-website-busybee.vercel.app](https://research-website-busybee.vercel.app/)


If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
