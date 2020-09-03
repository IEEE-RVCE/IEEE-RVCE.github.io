import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import MembershipPage from './pages/MembershipPage';
import DevelopersPage from './pages/DevelopersPage';
import SocietyPage from './pages/SocietyPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CalendarPage from './pages/CalendarPage';

export default function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Open Sans, sans-serif',
    },
    root: {
      backgroundColor: "#fff",
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div className={theme.root}>
        <CssBaseline />
        <Header/>
        
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/about'>
          <AboutPage/>
        </Route>
        <Route path='/login'>
          <SignInPage/>
        </Route>
        <Route path='/membership'>
          <MembershipPage/>
        </Route>
        <Route path='/devs'>
          <DevelopersPage/>
        </Route>
        <Route path='/society'>
          <SocietyPage/>
        </Route>
        <Route path='/calendar'>
          <CalendarPage/>
        </Route>

        <Footer/>
      </div>  
    </ThemeProvider>
  );
}