import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Open Sans, sans-serif',
    },
    root: {
      backgroundColor: "#fff",
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div className={theme.root}>
        <CssBaseline />
        <Header />
        <Footer />
      </div>  
    </ThemeProvider>
  );
}