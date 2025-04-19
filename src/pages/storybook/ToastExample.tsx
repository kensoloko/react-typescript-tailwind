import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ToastExample = () => {
  const { t } = useTranslation('storybook');
  const [visibleToasts, setVisibleToasts] = useState<{[key: string]: boolean}>({});
  
  const showToast = (type: string) => {
    setVisibleToasts(prev => ({...prev, [type]: true}));
    setTimeout(() => {
      setVisibleToasts(prev => ({...prev, [type]: false}));
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">{t('toasts.title')}</h2>
      <p className="text-gray-600">{t('toasts.description')}</p>
      
      <div className="space-y-6">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-4">{t('toasts.types.title')}</h3>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => showToast('success')}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              {t('toasts.types.showSuccess')}
            </button>
            
            <button 
              onClick={() => showToast('error')}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              {t('toasts.types.showError')}
            </button>
            
            <button 
              onClick={() => showToast('warning')}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              {t('toasts.types.showWarning')}
            </button>
            
            <button 
              onClick={() => showToast('info')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {t('toasts.types.showInfo')}
            </button>
          </div>
        </div>
        
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-medium mb-2">{t('toasts.positions.title')}</h3>
          <p className="text-sm text-gray-600 mb-4">{t('toasts.positions.description')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <div className="font-medium mb-2">{t('toasts.positions.topLeft')}</div>
              <button 
                onClick={() => showToast('topLeft')}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                {t('toasts.positions.show')}
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <div className="font-medium mb-2">{t('toasts.positions.topCenter')}</div>
              <button 
                onClick={() => showToast('topCenter')}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                {t('toasts.positions.show')}
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <div className="font-medium mb-2">{t('toasts.positions.topRight')}</div>
              <button 
                onClick={() => showToast('topRight')}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                {t('toasts.positions.show')}
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <div className="font-medium mb-2">{t('toasts.positions.bottomLeft')}</div>
              <button 
                onClick={() => showToast('bottomLeft')}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                {t('toasts.positions.show')}
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <div className="font-medium mb-2">{t('toasts.positions.bottomCenter')}</div>
              <button 
                onClick={() => showToast('bottomCenter')}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                {t('toasts.positions.show')}
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <div className="font-medium mb-2">{t('toasts.positions.bottomRight')}</div>
              <button 
                onClick={() => showToast('bottomRight')}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                {t('toasts.positions.show')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast container */}
      <div className="fixed inset-0 pointer-events-none flex flex-col items-end justify-start p-4 space-y-2 z-50">
        {visibleToasts.success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md max-w-md pointer-events-auto transform transition-all animate-fade-in-down">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-medium">{t('toasts.messages.success')}</p>
                <p className="text-sm">{t('toasts.messages.successContent')}</p>
              </div>
            </div>
          </div>
        )}
        
        {visibleToasts.error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md max-w-md pointer-events-auto animate-fade-in-down">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-medium">{t('toasts.messages.error')}</p>
                <p className="text-sm">{t('toasts.messages.errorContent')}</p>
              </div>
            </div>
          </div>
        )}
        
        {visibleToasts.warning && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-md max-w-md pointer-events-auto animate-fade-in-down">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-medium">{t('toasts.messages.warning')}</p>
                <p className="text-sm">{t('toasts.messages.warningContent')}</p>
              </div>
            </div>
          </div>
        )}
        
        {visibleToasts.info && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md max-w-md pointer-events-auto animate-fade-in-down">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-medium">{t('toasts.messages.info')}</p>
                <p className="text-sm">{t('toasts.messages.infoContent')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToastExample; 