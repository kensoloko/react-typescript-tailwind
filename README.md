# Reactjs TypeScript Tailwind

A modern React application built with TypeScript, Tailwind CSS, and Vite.

## Tech Stack

- [React 19](https://react.dev/) - UI library
- [TypeScript 5.7](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite 6](https://vitejs.dev/) - Next Generation Frontend Tooling
- [SWC](https://swc.rs/) - Super-fast JavaScript/TypeScript compiler

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd reactjs-typescirpt-tailwind

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Start development server with production env variables
npm run dev:prod

# Type checking
npm run typecheck
```

### Building for Production

```bash
# Build for production
npm run build

# Build with specific environment
npm run build:dev
npm run build:prod

# Preview production build
npm run preview
```

## Environment Configuration

The project uses environment variables for configuration:

- `.env` - Development environment settings
- `.env.production` - Production environment settings

Example environment variables:

```
VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true
VITE_DEBUG_MODE=false
VITE_APP_TITLE=Reactjs Typescript Tailwind
```

## ESLint Configuration

This project uses ESLint with TypeScript support. For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // For stricter rules
    ...tseslint.configs.strictTypeChecked,
    // For stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Folder Structure

```
├── public/             # Static assets
├── src/
│   ├── assets/         # Project assets
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Application root component
│   ├── main.tsx        # Entry point
├── .env                # Development environment variables
├── .env.production     # Production environment variables
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```
