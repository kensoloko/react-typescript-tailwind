import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ElementExample from './ElementExample';
import ButtonExample from './ButtonExample';
import ToastExample from './ToastExample';
import './translations/loadStorybookTranslation';

const Storybook = () => {
    const { t } = useTranslation('storybook');
    const [activeTab, setActiveTab] = useState<'elements' | 'buttons' | 'toasts'>('elements');

    const renderExample = () => {
        switch (activeTab) {
            case 'elements':
                return <ElementExample />;
            case 'buttons':
                return <ButtonExample />;
            case 'toasts':
                return <ToastExample />;
            default:
                return <ElementExample />;
        }
    };

    return (
        <div className="bg-gray-50">
            {/* Development environment banner */}
            <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-indigo-800">
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span>{t('banner.devModeOnly')}</span>
                            </p>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <Link to="/" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                                <span className="text-white">{t('banner.backToApp')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-b border-gray-200 mb-8">
                        <div className="sm:flex sm:items-baseline">
                            <h1 className="text-3xl font-bold text-gray-900 sm:mr-8">
                                {t('title')}
                            </h1>
                        </div>
                        <div className="mt-4 sm:mt-0">
                                <nav className="-mb-px flex space-x-8">
                                    <button
                                        className={`${activeTab === 'elements'
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
                                        onClick={() => setActiveTab('elements')}
                                    >
                                        {t('tabs.elements')}
                                    </button>

                                    <button
                                        className={`${activeTab === 'buttons'
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ml-2`}
                                        onClick={() => setActiveTab('buttons')}
                                    >
                                        {t('tabs.buttons')}
                                    </button>

                                    <button
                                        className={`${activeTab === 'toasts'
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ml-2`}
                                        onClick={() => setActiveTab('toasts')}
                                    >
                                        {t('tabs.toasts')}
                                    </button>
                                </nav>
                            </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        {renderExample()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Storybook; 