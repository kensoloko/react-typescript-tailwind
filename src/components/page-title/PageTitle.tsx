import { useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '@/routes/routes';
import { RouteObject } from 'react-router-dom';
import { TFunction } from 'i18next';

// Define AppRouteObject type locally
type AppRouteObject = RouteObject & {
  titleKey?: string;
  getTitleFromParams?: (params: Record<string, string>, t: TFunction) => string;
};

// Create a regex pattern from a route path
const createPathPattern = (path: string): string | null => {
    if (!path || path === '*') return null;
    return path.replace(/:\w+/g, '[^/]+').replace(/\*/g, '.*');
};

// Combine parent and child paths correctly
const combinePaths = (parent: string, child: string): string => {
    const parentPath = parent === '/' ? '' : parent;
    return `${parentPath}/${child}`.replace(/\/+/g, '/');
};

const PageTitle = () => {
    const location = useLocation();
    const params = useParams();
    const { t } = useTranslation('pageTitle');

    // Find the matching route for the current pathname
    const findMatchingRoute = useCallback((pathname: string): AppRouteObject | undefined => {
        // First, look for direct matches in routes and their children
        for (const route of routes) {
            // Check for exact match with route path
            if (route.path === pathname) return route;
            
            // Check children routes for exact matches
            if (route.children?.length) {
                for (const child of route.children) {
                    const fullPath = combinePaths(route.path || '', child.path || '');
                    if (fullPath === pathname) return child as AppRouteObject;
                }
            }
        }
        
        // If no exact match, try regex matching for parameterized routes
        for (const route of routes) {
            // Skip wildcard routes for regex matching
            if (route.path === '*') continue;
            
            try {
                // Check if the route path matches via regex
                const pathPattern = createPathPattern(route.path || '');
                if (pathPattern) {
                    const regex = new RegExp(`^${pathPattern}$`);
                    if (regex.test(pathname)) return route;
                }
                
                // Check children routes with regex
                if (route.children?.length) {
                    for (const child of route.children) {
                        const fullPath = combinePaths(route.path || '', child.path || '');
                        const childPattern = createPathPattern(fullPath);
                        
                        if (childPattern) {
                            const childRegex = new RegExp(`^${childPattern}$`);
                            if (childRegex.test(pathname)) return child as AppRouteObject;
                        }
                    }
                }
            } catch (error) {
                console.error('Invalid route pattern:', route.path, error);
            }
        }
        
        // Fallback to wildcard route (404 page)
        return routes.find(route => route.path === '*');
    }, []);

    // Set the page title based on the current route
    const setPageTitle = useCallback((route: AppRouteObject | undefined) => {
        if (!route) {
            // No route found - use not found title
            const notFoundRoute = routes.find(route => route.path === '*');
            if (notFoundRoute?.titleKey) {
                document.title = t(notFoundRoute.titleKey);
            } else {
                document.title = t('default');
            }
            return;
        }

        // Use dynamic title if available and params exist
        if (route.getTitleFromParams && Object.keys(params).length) {
            document.title = route.getTitleFromParams(params as Record<string, string>, t);
            return;
        }
        
        // Use static title key
        if (route.titleKey) {
            document.title = t(route.titleKey);
            return;
        }
        
        // Fallback title
        document.title = t('default');
    }, [params, t]);

    useEffect(() => {
        const matchingRoute = findMatchingRoute(location.pathname);
        setPageTitle(matchingRoute);
    }, [location, findMatchingRoute, setPageTitle]);

    return null;
};

export default PageTitle;