import { useContext } from 'react';
import AuthContext from './AuthContext';

/**
 * Custom hook to use the auth context
 * @returns The auth context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
