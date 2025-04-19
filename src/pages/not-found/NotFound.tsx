import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="text-6xl font-bold text-gray-600">{t('notFound.code')}</div>
        <h1 className="text-4xl font-bold text-gray-900">{t('notFound.title')}</h1>
        <p className="mt-3 text-lg text-gray-600">
          {t('notFound.description')}
        </p>
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="w-full flex justify-center py-2 px-4 
              border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('notFound.home')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 