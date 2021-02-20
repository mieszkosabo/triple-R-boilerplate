import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/globalStyle';
import { theme } from '../../theme';
import { Homepage } from '../HomePage';

const App = () => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />

            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </>
    </ThemeProvider>
);

export default App;
