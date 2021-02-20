import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/globalStyle';
import { theme } from '../../theme';
import { Homepage } from '../HomePage';
import { Topbar } from '../../components/layout/Topbar';
import { Logo } from '../../components/Logo';

const App = () => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Topbar>
                <Logo />
            </Topbar>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </>
    </ThemeProvider>
);

export default App;
