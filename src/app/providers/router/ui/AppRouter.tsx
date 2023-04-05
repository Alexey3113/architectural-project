import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePropsWithAuth, routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RoutePropsWithAuth) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.onlyAuth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;
