# Project Maintenance Guidelines

To ensure the Urbanland template remains clean, scalable, and easy to use, please follow these guidelines when making changes.

## 🏷️ Naming Conventions

### Folders
- Use **kebab-case** for all folder names (e.g., `case-studies`, `product-cards`).
- Use **plural** names for folders containing multiple components or items (e.g., `testimonials` instead of `testimonial`).

### Files
- Use **kebab-case** for component files (e.g., `hero-section.htm`).
- Use **.htm** extension for partials/components.
- Use **.html** extension only for root pages.

## 🧱 Component Rules

1. **Self-Contained Styles**: Whenever possible, use Tailwind utility classes. If custom CSS is needed, add it to a relevant file in `src/styles/` rather than inline.
2. **Relative Assets**: When referencing images in a component, use paths relative to the root (e.g., `./images/logo.png`).
3. **Unique IDs**: Ensure any interactive elements (modals, tabs) use unique IDs to avoid conflicts when multiple components are on the same page.

## 🎨 Design System

- Do not use ad-hoc hex codes.
- Always use the predefined color variables from `src/styles/variable.css`.
- Standard primary color: `var(--color-primary)` (managed via `@theme`).

## 🚀 Deployment

Before deploying, always run:
```bash
npm run build
```
This ensures all components are correctly injected and scripts are minified. The output in `dist/` is what should be uploaded to your server or hosting provider (Vercel, Netlify, etc.).
