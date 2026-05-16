# Urbanland – Premium Street Furniture Template

Urbanland is a modern, responsive HTML template designed for street furniture manufacturers, urban design agencies, and smart city solution providers. Built with a component-based architecture and Tailwind CSS v4, it offers a seamless development experience and high-performance production builds.

## 🚀 Key Features

- **Component-Based Architecture**: Reusable HTML partials using `<Component>` tags via `vite-plugin-html-inject`.
- **Tailwind CSS v4**: Industry-leading utility-first styling for maximum flexibility and performance.
- **Fast Build System**: Powered by Vite for near-instant hot module replacement (HMR) and optimized assets.
- **Rich Interactions**: Integrated GSAP animations, smooth scrolling (Lenis), and custom micro-animations.
- **Ready-to-Use Pages**: 17+ professionally designed pages including Home, About, Services, Case Studies, and more.

---

## 📂 Project Structure

```text
urbanland/
├── dist/                # Production-ready build (Static Site)
├── src/
│   ├── components/      # Reusable HTML partials
│   │   ├── shared/      # Common elements (Navbar, Footer, Modals)
│   │   ├── home/        # Homepage specific sections
│   │   └── ...          # Page-specific components
│   ├── js/              # Animation and utility scripts
│   ├── styles/          # Tailwind CSS and global styles
│   └── main.js          # JavaScript entry point
├── public/              # Static assets (Images, Fonts, Vendor scripts)
├── index.html           # Main entry page
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Build and development configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To generate a production-ready static site in the `dist/` folder:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 🔧 Customization

### Adding New Components
Create a `.htm` file in `src/components/` and inject it into any page using:
```html
<Component src="src/components/path/to/your-component.htm" />
```

### Styling
Customize the design system in `src/styles/variable.css` using Tailwind CSS v4 variables.

---

## 📄 Documentation

For more detailed information on the project architecture and development workflow, see:
- [STRUCTURE.md](./STRUCTURE.md) – Detailed folder and component guide.
- [CONTRIBUTING.md](./CONTRIBUTING.md) – Guidelines for extending the template.

---

© 2026 Urbanland. All rights reserved.
