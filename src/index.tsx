import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CustomDefaultTheme from './stylethemes/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV === "production") {
    // console.log = function no_console() {};
    // console.warn = function no_console() {};
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );


root.render(
<ThemeProvider theme={CustomDefaultTheme}>
    <CssBaseline>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssBaseline>
</ThemeProvider>
);