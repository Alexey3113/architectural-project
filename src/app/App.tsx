import './styles/index.scss';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type FC, Suspense } from 'react';

const App: FC = () => (
    <div className="app">
        <Suspense fallback="">
            <Navbar />

            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
