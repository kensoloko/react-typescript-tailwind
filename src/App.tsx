import './App.scss'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Suspense } from 'react'
import routes from './routes/routes'
import './i18n/i18nInit' // Import the i18n configuration
import LanguageSwitcher from './components/language-switcher/LanguageSwitcher'
import ScreenLoader from './components/screen-loader/ScreenLoader'
import PageTitle from './components/page-title/PageTitle'

const AppRoutes = () => {
  const routeElements = useRoutes(routes);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <PageTitle />
      {routeElements}
    </>
  )
}

function App() {
  return (
    <Suspense fallback={<ScreenLoader />}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
