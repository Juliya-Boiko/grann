import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { App } from 'App';
import { store } from 'redux/store';
import { theme } from 'styles/theme';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename='/grann'>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
