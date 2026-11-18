# Personal Profile Website

A responsive, single-page personal portfolio website built using HTML5, CSS3 and Vanilla JavaScript. The website showcases my professional journey, personal interests, family and hobbies through a clean, modern design.

This project was developed as part of the **IMPACT Phase 04 Assignment**, focusing on frontend development, Git/GitHub collaboration and CI/CD automation.

## 🌐 Live Website

**GitHub Pages:**https://gopikrishnan-ajith.github.io/IMPACT-PHASE-04-PROFILE-WEBSITE/

## ✨ Features

### 1. Hero Section
- Personal introduction and profile information.
- Full-screen introductory design.
- Call-to-action navigation.

### 2. Professional Journey
- Timeline-based presentation of educational and professional milestones.
- Scroll-based animations.
- Expandable descriptions.

### 3. Personal Interests
- Card-based layout showcasing personal preferences.
- Music, movies, food and other interests.
- Interactive hover effects.

### 4. Family
- Family group photograph.
- Individual family member cards.
- Interactive flip-card design.

### 5. Hobbies & Passions
- Image-based hobby gallery.
- Interactive gallery elements.
- JavaScript-powered image lightbox.

### 6. Footer
- Social media links.
- Copyright year generated dynamically.
- Back-to-top navigation.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and semantic markup |
| CSS3 | Styling, layouts, animations and responsive design |
| CSS Variables | Centralised theme management |
| JavaScript (ES6+) | Navigation and interactive functionality |
| Git | Version control |
| GitHub | Repository and collaboration |
| GitHub Actions | CI/CD automation |
| GitHub Pages | Website hosting |

## 📁 Project Structure

```text
IMPACT-PHASE-04-PROFILE-WEBSITE/
│
├── index.html
│
├── css/
│   ├── theme.css
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── hero/
│   ├── journey/
│   ├── interests/
│   ├── family/
│   └── hobbies/
│
├── .github/
│   └── workflows/
│       ├── validate.yml
│       ├── deploy.yml
│       ├── pr-checks.yml
│       ├── lighthouse.yml
│       └── notify.yml
│
├── .htmlhintrc
├── .stylelintrc.json
├── .gitignore
└── README.md
```

## 🎨 Theming System

The website uses a centralised CSS variable-based theming system.

All theme variables are maintained in:

`css/theme.css`

The main stylesheet, `css/style.css`, references these variables to control the website's appearance.

The project includes three theme variations:

- **Light Theme:** Original website appearance.
- **High-Contrast Dark:** Dark backgrounds with cyan accents.
- **Cyberpunk:** Dark purple backgrounds with neon pink and cyan accents.

The theme variations were explored through separate Git branches by modifying the theme configuration.

This approach allows the website's visual appearance to change without rewriting its HTML structure or component styles.

## ⚙️ GitHub Actions – CI/CD Pipeline

The project implements five GitHub Actions workflows.

| Workflow | File | Purpose |
|---|---|---|
| HTML & CSS Validation | `validate.yml` | Validates HTML using HTMLHint and CSS using Stylelint |
| GitHub Pages Deployment | `deploy.yml` | Automatically deploys the website to GitHub Pages |
| PR Quality Checks | `pr-checks.yml` | Checks HTML titles, image alt attributes and console logs |
| Lighthouse Audit | `lighthouse.yml` | Runs performance audits and uploads reports |
| Deployment Notifications | `notify.yml` | Reports deployment success or failure in workflow logs |

## 🌿 Git Branching Strategy

The project follows a structured Git branching workflow.

- `main` – Production branch containing the deployed website.
- `develop` – Integration branch for completed features.
- `feature/*` – Branches for individual website features.
- `theme/*` – Branches for theme experiments.
- `ci/*` – Branches for CI/CD workflow implementation.

Changes are developed in separate branches and merged through Pull Requests.

Branch protection is configured on `main`, requiring Pull Requests, approval and successful status checks before merging.




