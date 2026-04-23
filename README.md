# Jake DeFord - Portfolio & Resume

![Website Design](docs/website_design.png)

## Description

A modern, responsive portfolio website for Jake DeFord, showcasing technical projects, professional experience, and skills. The site features a unique glassmorphism design aesthetic with smooth animations and a focus on clean typography.

## Project Scope

The objective of this project is to maintain a professional, high-performance web presence that serves as a central hub for professional identity. The scope includes:
- **Core Branding**: Implementation of a consistent "Deep Onyx" design system.
- **Automated Deployment**: Seamless integration with the special `jakedeford.github.io` repository for hosting.
- **Custom Domain**: Managed hosting at `jakedeford.com`.
- **Quality Assurance**: Comprehensive end-to-end testing with Playwright to ensure cross-browser stability.


## Features

### 🎨 **Design System**
- **Glassmorphism**: Translucent panels with blur effects for a premium look
- **Dark Theme**: Professional dark color palette with vibrant accents
- **Smooth Animations**: Custom CSS transitions for hover effects and page loads
- **Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile devices

### 📂 **Pages**
- **Home**: Introduction with hero section and call-to-action buttons
- **Resume**: Embedded PDF viewer with download functionality
- **Stack**: Interactive project showcase with filterable categories
- **Contact**: Contact form and social links

### ⚙️ **Technical Stack**
- **Framework**: React with Vite
- **Styling**: Custom CSS with CSS variables for design consistency
- **Testing**: Playwright for end-to-end testing

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JakeDeFord/Website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Run Development Server
Start the development server with live reload:
```bash
npm run dev
```

The site will be accessible at `http://localhost:5173`.

### Run Tests
Run the Playwright end-to-end tests:
```bash
npm test
```

To run tests in headed mode (with browser UI):
```bash
npm test:ui
```

### Build for Production
Create an optimized production build:
```bash
npm run build
```

## Deployment

This project is configured to deploy directly to the special `jakedeford.github.io` repository, which hosts the live site at `jakedeford.com`.

### Deploy to GitHub Pages
To build the project and push it live, run:
```bash
npm run deploy
```

This command will:
1.  Run `npm run build` to create an optimized production bundle.
2.  Use the `gh-pages` package to push the `build` folder to the `gh-pages` branch of the `JakeDeFord/jakedeford.github.io` repository.
3.  Ensure the `CNAME` is preserved for custom domain support.

### Alternative: Firebase Hosting
*(Optional)* If you wish to use Firebase instead, the project structure remains compatible:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy:
   ```bash
   firebase deploy
   ```

## Project Structure

```
Website/
├── src/
│   ├── pages/        # Page components (Home, Resume, Stack, Contact)
│   ├── components/   # Reusable components (navbar, footer, buttons)
│   ├── assets/       # Static assets (images, fonts, PDF)
│   └── styles/       # Global styles and design tokens
├── tests/            # Playwright test files
├── docs/             # Documentation and design mockups
└── firebase.json     # Firebase configuration
```

## Design System Tokens

The site uses a comprehensive design system with the following tokens:

### Colors
```css
--color-primary: #28a745;      /* Vibrant Green */
--color-secondary: #667eea;    /* Soft Blue */
--color-surface: #1a1a1a;      /* Deep Dark Gray */
--color-surface-light: #2c2c2c; /* Light Gray */
--color-surface-border: #444;  /* Border Gray */
--color-text: #e0e0e0;         /* Light Text */
--color-text-heading: #ffffff; /* White Headings */
```

### Spacing
```css
--space-unit: 8px;
--space-xs: calc(var(--space-unit) * 0.5);  /* 4px */
--space-sm: calc(var(--space-unit) * 1);    /* 8px */
--space-md: calc(var(--space-unit) * 2);    /* 16px */
--space-lg: calc(var(--space-unit) * 4);    /* 32px */
--space-xl: calc(var(--space-unit) * 6);    /* 48px */
```

### Typography
```css
--font-heading: 'Poppins', sans-serif;  /* Bold headings */
--font-body: 'Inter', sans-serif;        /* Clean body text */
```

## Browser Support

The website supports all modern browsers:
- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Opera (latest 2 versions)

## License

This project is licensed under the MIT License.

## Author

**Jake DeFord**  
[https://jakedeford.com](https://jakedeford.com)
