import './styles/index.scss';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthInited, userActions } from 'entities/User';

const App: FC = () => {
    const dispatch = useDispatch();
    const isInited = useSelector(getAuthInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
