import { useTranslation } from 'react-i18next';

const ButtonExample = () => {
  const { t } = useTranslation('storybook');

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">{t('buttons.title')}</h2>
      <p className="text-gray-600">{t('buttons.description')}</p>
      
      <div className="space-y-6">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-4">{t('buttons.variants.title')}</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              {t('buttons.variants.primary')}
            </button>
            
            <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              {t('buttons.variants.secondary')}
            </button>
            
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              {t('buttons.variants.tertiary')}
            </button>
            
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              {t('buttons.variants.danger')}
            </button>
            
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              {t('buttons.variants.success')}
            </button>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-4">{t('buttons.sizes.title')}</h3>
          <div className="flex items-center flex-wrap gap-4">
            <button className="px-2 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              {t('buttons.sizes.small')}
            </button>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              {t('buttons.sizes.medium')}
            </button>
            
            <button className="px-6 py-3 text-lg bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              {t('buttons.sizes.large')}
            </button>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-4">{t('buttons.states.title')}</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              {t('buttons.states.default')}
            </button>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md opacity-50 cursor-not-allowed">
              {t('buttons.states.disabled')}
            </button>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              {t('buttons.states.withIcon')}
            </button>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('buttons.states.loading')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample; 