import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
