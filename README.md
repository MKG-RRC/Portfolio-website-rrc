# Assignment 14 - Portfolio Website with Component Library

**Student:** Mark Kenneth Garcia
**Course:** WEBD-3012 (273795) Business Systems Build and Testing
**Term:** Fall 2025

---

## Overview

This assignment is the final portfolio website for WEBD-3012, showcasing coursework and developer skills throughout the Full-Stack Web Development program at RRC Polytech.

The system includes:

🧩 Custom React component library built with Storybook
⚙️ GitHub Actions CI/CD pipeline for automated quality checks
🐳 Docker multi-stage build serving production app on localhost:5575 via Nginx
🎨 Component-driven development with reusable UI elements
📱 Multi-page portfolio with smooth navigation

---

## Technologies Used

### Frontend & Frameworks

- React (Create React App) + TypeScript
- Storybook v10 – component showcase and design system
- CSS Modules – modular styling
- React Router – navigation and hash scrolling

### Code Quality & Automation

- ESLint – JavaScript/TypeScript linting
- Prettier – code formatting enforcement
- GitHub Actions – CI/CD pipeline for build and quality checks
- Husky (optional) – Git pre-commit hooks

### Build & Deployment

- Node.js 20 – builder environment
- Nginx 1.27 – production web server
- Docker Desktop – containerization and deployment

---

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   └── UI/
│       ├── Button/
│       ├── Typography/
│       ├── Card/
│       └── ContactForm/
│
├── pages/
│   ├── Home/
│   ├── Work/
│   ├── Skills/
│   ├── Resources/
│   ├── DeveloperSetup/
│   └── Contact/
│
├── App.tsx
├── ScrollToHash.tsx
└── index.tsx
```

---

## Local Development

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Development Server

```bash
npm start
```

Access at: [http://localhost:3000](http://localhost:3000)

---

## Storybook UI Library

### 1️⃣ Start Storybook

```bash
npm run storybook
```

### 2️⃣ Access Storybook

Open in browser: [http://localhost:6006](http://localhost:6006)

### 3️⃣ Available Components

- Button – Primary, Secondary, Tertiary variants
- Typography – Headings, body text, labels
- Card – Project cards with image, title, description
- ContactForm – Full contact form with validation
- Additional reusable UI components

---

## Docker Setup

### 1️⃣ Build the Docker Image

```bash
docker build -t Garcia_Mark_coding_assignment14 .
```

### 2️⃣ Run the Container

```bash
docker run -d --name Garcia_Mark_coding_assignment14 -p 5575:80 Garcia_Mark_coding_assignment14
```

**Flags:**

- `-d` – Runs container in background
- `-p` – Maps container port 80 to localhost:5575
- `--name` – Sets container name as required

---

### 3️⃣ View the App

Open in browser:
[http://127.0.0.1:5575](http://127.0.0.1:5575)
or
[http://localhost:5575](http://localhost:5575)

---

### 4️⃣ Verify and Stop

Check active containers:

```bash
docker ps
```

Stop the container:

```bash
docker stop Garcia_Mark_coding_assignment14
```

---

## CI/CD Pipeline

### GitHub Actions Workflow

**File:** `.github/workflows/ci.yml`

**CI tasks include:**

- Install Node dependencies
- ESLint code quality checks
- Prettier formatting verification
- Storybook build validation
- Production React build test
- Test runner execution (if applicable)

**Workflow triggers:**

- On every push to repository
- On pull request creation

If any step fails, the build shows ❌ on GitHub.

---

## Portfolio Sections

### 🏠 Home

Hero banner with introduction, tagline, and call-to-action.

### 💼 Work

Project showcase featuring:

- Project title and description
- Featured image
- Live demo link
- GitHub repository link
- Technology stack list

### 🛠 Skills

Organized by category:

- Languages & Frameworks (JavaScript, TypeScript, React, Ruby, Python)
- Tools (Git, Docker, VS Code, Figma)
- DevOps & CI/CD (GitHub Actions, Docker, Nginx)
- Deployment Technologies (Render, Netlify, Heroku)

### 📚 Resources

Curated links to:

- Official documentation
- Development tools
- Technical articles
- Learning resources

### 💻 Developer Setup

Development environment breakdown:

- VS Code configuration
- Terminal setup (PowerShell/Bash)
- Essential extensions
- Preferred fonts and themes
- System tools and utilities

### 📨 Contact

Contact page featuring:

- Storybook-built ContactForm component
- LinkedIn profile link
- GitHub profile link
- Email contact (optional)

---

## Dockerfile Summary

**Stage 1 – Node (Builder):**

- Installs dependencies
- Builds optimized production React app using `react-scripts build`

**Stage 2 – Nginx (Runtime):**

- Copies `build/` output to `/usr/share/nginx/html`
- Serves on port 80 (mapped to 5575)
- Configured for SPA routing with `try_files`

---

## Verification Checklist

```
✅ Component library built with Storybook
✅ GitHub Actions CI/CD pipeline configured
✅ Docker container serves production build at localhost:5575
✅ All portfolio sections implemented
✅ Navigation and routing functional
✅ Contact form integrated from Storybook
✅ Responsive design implemented
✅ All assignment requirements met
```

---

## Author

**Mark Kenneth Garcia**
Full Stack Web Development – RRC Polytech
GitHub: [https://github.com/MKG-RRC](https://github.com/MKG-RRC)
LinkedIn: [https://www.linkedin.com/in/mark-kenneth-garcia](https://www.linkedin.com/in/mark-kenneth-garcia)

---

End of README – Assignment 14 (Portfolio Website with Component Library)
