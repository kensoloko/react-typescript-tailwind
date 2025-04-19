import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import i18n instance (must be before rendering the app)
import './i18n/i18nInit.ts'

// Create the root element
const root = createRoot(document.getElementById('root')!)

// Render the app
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
