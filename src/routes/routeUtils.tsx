import { Suspense } from 'react';
import ScreenLoader from '@/components/screen-loader/ScreenLoader';

/**
 * Wrap component with Suspense
 */
export const withSuspense = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<ScreenLoader />}>
      <Component />
    </Suspense>
  );
}; 