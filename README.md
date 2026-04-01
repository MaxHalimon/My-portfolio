# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases frontend development skills and includes sections for about, skills, services, projects, and contact information.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Elements**: Contact form, back-to-top button, and smooth scrolling navigation
- **Technology Icons**: Professional icons for skills and technologies
- **Project Showcase**: Detailed project cards with links to GitHub repositories
- **Contact Form**: Functional contact form with validation

## Technologies Used

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation header with scroll effects
│   ├── Hero/            # Hero section with avatar and intro
│   ├── About/           # About section with bio and resume link
│   ├── Skills/          # Skills grid with technology icons
│   ├── Services/        # Services offered
│   ├── Projects/        # Project showcase
│   ├── Contact/         # Contact form and social links
│   └── BackToTop/       # Back-to-top button
├── data/
│   ├── projects.ts      # Project data
│   └── skills.ts        # Skills data
├── types/
│   └── index.ts         # TypeScript type definitions
└── App.tsx              # Main application component
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Customization

- **Personal Information**: Update the hero section, about text, and contact details
- **Projects**: Modify the `src/data/projects.ts` file to add your own projects
- **Skills**: Update the skills in `src/data/skills.ts`
- **Styling**: Customize colors and styles in the component files or Tailwind config
- **Images**: Replace placeholder images with your own in the `public` directory

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and TypeScript
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
