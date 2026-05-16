# Technical Structure Guide

This document provides a deep dive into the Urbanland template's architecture and organization.

## 🏗️ Architecture Overview

The project uses a **Static Component Architecture**. While it is not a framework like React or Vue, it mimics their modularity using `vite-plugin-html-inject`. This allows you to maintain clean, manageable code while serving standard HTML/CSS/JS.

### Component Injection
The `<Component>` tag is processed at build/dev time.
```html
<Component src="src/components/shared/navbar/header.htm" />
```
**Important:** Paths in the `src` attribute must be relative to the project root.

---

## 📁 Directory Breakdown

### `src/components/`
Organized by feature or page.
- **`shared/`**: Components used across multiple pages.
  - `navbar/`: Header and dropdown menus.
  - `accordion/`: Reusable accordion logic (Fixed from `accoridion`).
  - `footer.htm`: The global site footer.
- **`ui/`**: Low-level UI elements (buttons, inputs) built with Radix principles.
- **`home/`, `about/`, `services/`, etc.**: Sections specific to those pages.

### `src/js/`
- **`animations/`**: GSAP scroll triggers, text reveals, and page transitions.
- **`utilities/`**: Core logic for modals, carousels, and interactive elements.

### `src/styles/`
- **`variable.css`**: The core design system. Defines colors, fonts, and spacing using Tailwind CSS v4 `@theme` variables.
- **`main.css`**: Entry point that imports all other CSS modules.

### `public/`
Contains static assets that are copied directly to the build folder.
- **`images/`**: Organized by component or page.
- **`vendor/`**: Third-party libraries (GSAP, Lenis, etc.) that aren't imported via npm.

---

## 🛠️ Development Workflow

1. **Pages**: All `.html` files in the root are treated as entry points.
2. **Templating**: Use `.htm` for partials to differentiate them from full pages.
3. **Styles**: Use utility classes as much as possible. For custom styles, use the `src/styles/` directory.
4. **Build**: The `npm run build` command runs Vite build followed by `post-build.js` to ensure script paths are correctly mapped for static hosting.

---

## 🚨 Troubleshooting

### Component not loading?
Check the `src` path. It should always start from the root (e.g., `src/components/...`).

### Styles not updating?
Ensure you are running `npm run dev` and that the `@tailwindcss/vite` plugin is active in `vite.config.js`.
