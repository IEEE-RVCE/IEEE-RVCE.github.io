import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {CssBaseline, Fab, Tooltip} from '@material-ui/core';
import {Brightness3, BrightnessHigh} from '@material-ui/icons';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import MembershipPage from './pages/MembershipPage';
import DevelopersPage from './pages/DevelopersPage';
import CSSocietyPage from './pages/CSSocietyPage';
import APSSocietyPage from './pages/APSSocietyPage';
import RASSocietyPage from './pages/RASSocietyPage';
import SPSSocietyPage from './pages/SPSSocietyPage';
import PESSocietyPage from './pages/PESSocietyPage';
import COMSOCSocietyPage from './pages/COMSOCSocietyPage';
import WIEAffinityPage from './pages/WIEAffinityPage';
import SIGHTAffinityPage from './pages/SIGHTAffinityPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CalendarPage from './pages/CalendarPage';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';

export default function App() {

  const tempMedia = useMediaQuery('(prefers-color-scheme: dark)');
  if(localStorage.getItem('isSetByUser') === null)
    localStorage.setItem('darkMode', tempMedia)
  const prefersDarkMode = localStorage.getItem('darkMode') === 'true'

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light'
    },
    typography: {
      fontFamily: 'Open Sans, sans-serif',
    },
    appbar: {
      backgroundColor: prefersDarkMode?'#222':"#FFF"
    },
    button: prefersDarkMode?{
      border: '1px solid #eee ',
      color: '#eee ',
      marginRight: 16,
    }:
    {
      border: '1px solid #00629B',
      color: '#00629B',
      marginRight: 16,
    },
    link: {
      textDecoration: 'none',
      color: prefersDarkMode? '#bbbbbb':'#00629B',
      '&:hover': {
          textDecoration: 'underline',
      }
    },
    fab: {
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 100,
      color: prefersDarkMode?'#111':'#eee',
      backgroundColor: prefersDarkMode?'#eee':'#222',
      '&:hover': {
        backgroundColor: prefersDarkMode?'#eee':'#222'
      }
    },
    paper: prefersDarkMode?{
      backgroundColor: '#222',
    }:
    {
      backgroundColor: '#fff',
    },
    root: {
      backgroundColor: prefersDarkMode ? "#111":"#eee",
    },
    page: {
      paddingTop: 64,
      paddingBottom: 64,
    },
    eventcard: {
      backgroundColor: prefersDarkMode?'#444':'#fff',
    },
  });

  const changeTheme = () => {
    localStorage.setItem('darkMode', !prefersDarkMode)
    localStorage.setItem('isSetByUser', true)
    window.location.reload()
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div>
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
        <Route path='/devs'>
          <DevelopersPage/>
        </Route>
        <Route path='/society/cs'>
          <CSSocietyPage/>
        </Route>
        <Route path='/society/aps'>
          <APSSocietyPage/>
        </Route>
        <Route path='/society/comsoc'>
          <COMSOCSocietyPage/>
        </Route>
        <Route path='/society/pes'>
          <PESSocietyPage/>
        </Route>
        <Route path='/society/ras'>
          <RASSocietyPage/>
        </Route>
        <Route path='/society/sps'>
          <SPSSocietyPage/>
        </Route>
        <Route path='/affinity/wie'>
          <WIEAffinityPage/>
        </Route>
        <Route path='/affinity/sight'>
          <SIGHTAffinityPage/>
        </Route>
        <Route path='/calendar'>
          <CalendarPage/>
        </Route>

        <Switch>
          <Route path='/membership/:step'>
            <MembershipPage/>
          </Route>
          <Route path='/membership'>
            <MembershipPage/>
          </Route>
        </Switch>

        <Switch>
          <Route path='/events/:eid'>
            <EventPage/>
          </Route>
          <Route path='/events'>
            <EventsPage/>
          </Route>
        </Switch>

        <Tooltip title={prefersDarkMode? 'Switch to light theme': 'Switch to dark theme'} aria-label='themeSwitcherTooltip'>
          <Fab onClick={changeTheme} aria-label='themeSwitcher' style={{...theme.fab}}>
              {prefersDarkMode?<BrightnessHigh/>:<Brightness3 style={{transform: 'rotate(150deg)'}}/>}
          </Fab>
        </Tooltip>
        <Footer/>
      </div>  
    </ThemeProvider>
  );
}