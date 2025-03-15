import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Progress from './components/Progress';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'ct',
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>            
                <div>
                    <Header />
                        <Suspense fallback={<Progress />}>
                            <Switch>
                                <Route path="/auth" component={AuthLazy} />
                                <Route path="/" component={MarketingLazy} />
                            </Switch>
                        </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}
