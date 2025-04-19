import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/authHelpers';
import { useTranslation } from 'react-i18next';
import './translations';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation('dashboard');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {t('title')}
        </h1>
        <p className="mt-2 text-xl font-medium text-indigo-600">
          {t('welcome')}
        </p>
        <p className="mt-3 text-lg text-gray-600">
          {t('description')}
        </p>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-medium text-gray-700">{t('stats.users')}</h2>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-medium text-gray-700">{t('stats.visits')}</h2>
            <p className="text-2xl font-bold">5,678</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to="/user/1"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('actions.viewProfile')}
          </Link>
          <Link
            to="/"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('back')}
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            {t('logout')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 