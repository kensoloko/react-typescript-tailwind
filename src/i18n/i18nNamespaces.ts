import i18next from 'i18next';
import type { ComponentType } from 'react';

export type Namespaces = 'common' | 'login' | 'pageTitle' | 'messages';

/**
 * Load i18n namespaces for components
 * @param {Namespaces | Namespaces[]} ns - Namespace(s) to load
 * @returns Promise that resolves when namespaces are loaded
 */
export const loadNamespaces = (ns: Namespaces | Namespaces[]): Promise<void> => {
  // Convert single namespace to array
  const namespaces = Array.isArray(ns) ? ns : [ns];
  
  
  // Load each namespace
  return Promise.all(
    namespaces.map(namespace => 
      i18next.loadNamespaces(namespace)
    )
  ).then(() => {
    // Return void when all namespaces are loaded
    return;
  });
};

/**
 * Type for a React component import function
 */
export type ComponentImport<T = Record<string, unknown>> = () => Promise<{ default: ComponentType<T> }>;

/**
 * Higher-order function to preload namespaces before component load
 * @param {Namespaces | Namespaces[]} ns - Namespace(s) to load
 * @param {ComponentImport} importFn - Component import function
 * @returns Function that returns a promise with the component module
 */
export const withNamespaceLoader = <T = Record<string, unknown>>(
  ns: Namespaces | Namespaces[],
  importFn: ComponentImport<T>
): ComponentImport<T> => {
  return async () => {
    await loadNamespaces(ns);
    return importFn();
  };
};
