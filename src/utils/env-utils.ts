/**
 * Environment utility functions for the application
 */

/**
 * Check if the application is running in development mode
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.MODE === 'development';
};

/**
 * Check if the application is running in production mode
 */
export const isProduction = (): boolean => {
  return import.meta.env.MODE === 'production';
};

/**
 * Get environment variables with type safety
 */
export const getEnvVariable = (key: string, defaultValue: string = ''): string => {
  return (import.meta.env[`VITE_${key}`] as string) || defaultValue;
};

/**
 * Get application title from environment
 */
export const getAppTitle = (): string => {
  return getEnvVariable('APP_TITLE', 'Reactjs Typescript Tailwind');
};

/**
 * Check if debug mode is enabled
 */
export const isDebugMode = (): boolean => {
  return getEnvVariable('DEBUG_MODE', 'false') === 'true';
};

/**
 * Get the API URL from environment
 */
export const getApiUrl = (): string => {
  return getEnvVariable('API_URL', 'http://localhost:8000/api');
};

export default {
  isDevelopment,
  isProduction,
  getEnvVariable,
  getAppTitle,
  isDebugMode,
  getApiUrl,
}; 