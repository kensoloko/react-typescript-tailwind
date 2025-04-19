import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">{t('user.details')}</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{t('user.details')}</h2>
          <p className="text-gray-700">
            {t('user.viewingUser', { id })}
          </p>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <p className="text-gray-500 text-sm">
            {t('user.idNote')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail; 