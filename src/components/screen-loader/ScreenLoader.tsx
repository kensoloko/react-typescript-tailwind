import React from 'react';

/**
 * Loading spinner component for suspense fallback
 */
const ScreenLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

export default ScreenLoader;
