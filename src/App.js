import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
function App() {
    return (
        <Router>
            <div class="container">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout;
                        if (route.layout === null) {
                            Layout = React.Fragment;
                        } else {
                            Layout = route.layout || DefaultLayout;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
