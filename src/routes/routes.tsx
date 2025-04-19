import { RouteObject } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { withSuspense } from './routeUtils';
import * as LazyComponents from './lazyRoutes';
import { TFunction } from 'i18next';

type AppRouteObject = RouteObject & {
  titleKey?: string;
  getTitleFromParams?: (params: Record<string, string>, t: TFunction) => string;
};

// Public routes that don't require authentication
export const publicRoutes: AppRouteObject[] = [
  {
    path: '/',
    element: withSuspense(LazyComponents.Dashboard),
    titleKey: 'home',
  },
  {
    path: '/unauthorized',
    element: withSuspense(LazyComponents.Unauthorized),
    titleKey: 'unauthorized',
  },

  // 404 - Not Found route (must be last)
  {
    path: '*',
    element: withSuspense(LazyComponents.NotFound),
    titleKey: 'notFound',
  },
];

// Protected routes that require authentication
export const protectedRoutes: AppRouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'user/:id',
        element: withSuspense(LazyComponents.UserDetail),
        titleKey: 'userDetail',
      } as AppRouteObject,
      // Add more protected routes here
    ],
  },
];

// Combine all routes
const routes: AppRouteObject[] = [...publicRoutes, ...protectedRoutes];

export default routes;
