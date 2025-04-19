import { useTranslation } from 'react-i18next';

const ElementExample = () => {
  const { t } = useTranslation('storybook');

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">{t('elements.title')}</h2>
      <p className="text-gray-600">{t('elements.description')}</p>
      
      <div className="space-y-6">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-2">{t('elements.card.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium">{t('elements.card.basic')}</h4>
              <p className="text-sm text-gray-500 mt-2">{t('elements.card.basicDescription')}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-medium">{t('elements.card.bordered')}</h4>
              <p className="text-sm text-gray-500 mt-2">{t('elements.card.borderedDescription')}</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-2">{t('elements.input.title')}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('elements.input.text')}
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={t('elements.input.placeholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('elements.input.select')}
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>{t('elements.input.option1')}</option>
                <option>{t('elements.input.option2')}</option>
                <option>{t('elements.input.option3')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementExample; 