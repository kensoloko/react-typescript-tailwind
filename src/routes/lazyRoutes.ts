import { lazy } from 'react';
import { withNamespaceLoader, ComponentImport, Namespaces } from '@/i18n/i18nNamespaces';

/**
 * Create a lazy loaded component with optional translations
 * @param importFn Function that imports the component
 * @param translations Optional function that imports component-specific translations
 */
export const createLazyComponent = <T = Record<string, unknown>>(
  importFn: ComponentImport<T>,
  translations?: () => Promise<any>
) => {
  if (translations) {
    return lazy(async () => {
      // Import the translations first
      await translations();
      // Then import the component
      return importFn();
    });
  }
  // If no translations, just import the component
  return lazy(importFn);
};

/**
 * Create a lazy loaded component with additional namespaces beyond the defaults
 * Only use when component needs specific namespaces beyond common/pageTitle
 */
export const createMultiNamespaceLazyComponent = <T = Record<string, unknown>>(
  namespaces: string[],
  importFn: ComponentImport<T>
) => {
  return lazy(withNamespaceLoader(namespaces as Namespaces[], importFn));
};

// Lazy load components
export const Dashboard = createLazyComponent(() => import('@/pages/dashboard/Dashboard'));
export const Unauthorized = createLazyComponent(() => import('@/pages/unauthorized/Unauthorized'));
export const NotFound = createLazyComponent(() => import('@/pages/not-found/NotFound'));
export const UserDetail = createLazyComponent(() => import('@/pages/user/UserDetail'));

// Development-only routes
const isDevelopment = import.meta.env.DEV;

// Only create the Storybook routes in development mode
export const Storybook = isDevelopment 
  ? createLazyComponent(() => import('@/pages/storybook/Storybook')): undefined; 