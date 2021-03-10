import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, useScrollTrigger, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useRouteMatch } from 'react-router-dom';
import useScrollPosition from '@react-hook/window-scroll';
import AppBarMenu from './AppBarMenu';
import {navs, societies, affinities, images} from '../links';

export default function Header(props) {

    // Get dark or light mode
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem('darkMode') === 'true')
    const [transparent, setTransparent] = React.useState(0)
    const scrollY = useScrollPosition(120)
    const matchSociety = useRouteMatch('/society/')
    const matchAffinity = useRouteMatch('/affinity')

    React.useEffect(() => {
        setDarkMode(localStorage.getItem('darkMode') === 'true')
        setTransparent(0)
    },[])

    React.useEffect(() => {
        setTransparent(0)
        if(matchSociety || matchAffinity) {
            let landingImg = document.getElementById('soclanding')
            if(scrollY/(0.8*landingImg.scrollHeight) < 1)
                setTransparent(scrollY/(0.8*landingImg.scrollHeight))
            else
                setTransparent(1)
        }
        else {
            if(scrollY < 20) {
                setTransparent(scrollY/20)
            }
            else
                setTransparent(1)
        }
    }, [matchSociety, matchAffinity,scrollY])

    // All the styling information for the whole header component is in here
    const useStyles = makeStyles((theme) => ({
        // Make the container take up all space if free. Padding bottom as it's fixed, it should leave a little transparent space which really won't be noticed.
        root: {
            flexGrow: 1,
        },
        // White background for the bar for now
        appbar: {
            backgroundColor: transparent!==1?(darkMode?'rgb(34,34,34,' + transparent + ')':'rgb(255,255,255,' + transparent + ')'):theme.appbar.backgroundColor,
        },
        // Make brand stay on left by taking all remaining space while justifying
        brand: {
            flexGrow: 1,
            [theme.breakpoints.down('sm')]: transparent!==1?{
                opacity: 0,
                transition: 'opacity 1s linear',
            }:{
                opacity: 1,
                transition: 'opacity 1s linear',
            }
        },
        // Bordered buttons in IEEE blue shade, can be changed as needed
        button: theme.button,
        // Don't display the navigation buttons if on a small screen
        navs: {
            [theme.breakpoints.up('md')]: {
                display: 'block',
                visibility: (transparent<0.75 && (matchAffinity || matchSociety))?'hidden':'visible',
            },
            display: 'none',
        },
        link: theme.link,
        // To remove hyperlink from each Nav
        nav: {
            textDecoration: 'none',
            color: darkMode ? '#eee':'#00629B',
        },
        // Don't display menu button when on a not-small screen
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
            display: 'block',
            color: darkMode ? '#eee':'#00629b',
            backgroundColor: transparent!==1?theme.transbg.backgroundColor:'inherit',
            transition: 'backgroundColor 1s linear',
        },
    }))

    // All styles are in classes now
    const classes = useStyles()

    // drawer has the state if drawer is open or not. setDrawer sets that as per UI clicks.
    const [drawer, setDrawer] = React.useState(false)

    // State for logged in
    const [loggedin, setLoggedin] = React.useState(false)

    React.useEffect(() => {
        setLoggedin(localStorage.getItem('isAuthenticated'))
    }, [])

    // Sort of has an elevation effect when you scroll down. Really cool
    function ElevationScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    // Support for above function
    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('atoken')
        window.location.replace(window.location.origin)
    }

    // Renders all the navigation buttons by traversing array
    const Buttons = () => {
        let buttons = navs.map((nav) => {
            if (nav.name === 'Societies') {
                return (
                    <AppBarMenu name={nav.name} items={societies} />
                )
            }
            else if (nav.name === 'Affinities') {
                return (
                    <AppBarMenu name={nav.name} items={affinities} />
                )
            }
            else if (nav.name === 'Login') {
                if (loggedin) {
                    return (
                        <Button color="inherit" onClick={logout} className={classes.button}>Logout</Button>
                    )
                }
                else {
                    return (
                        <React.Fragment/>
                    )
                }
            }
            else {
                return (
                    <Link to={nav.link} className={classes.nav}>
                        <Button color="inherit" className={classes.button}>{nav.name}</Button>
                    </Link>
                )
            }
        })
        return buttons
    }

    // Handles toggle of drawer
    const handleDrawerToggle = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open)
    }

    // Makes list for drawer
    const list = () => (
        <div>
            <List>
                {
                    navs.map((nav) => {
                        if (nav.name === 'Societies') {
                            return (
                                <AppBarMenu drawerHandle={setDrawer} name={nav.name} items={societies} />
                            )
                        }
                        else if (nav.name === 'Affinities') {
                            return (
                                <AppBarMenu drawerHandle={setDrawer} name={nav.name} items={affinities} />
                            )
                        }
                        else if (nav.name === 'Login') {
                            if (loggedin) {
                                return (
                                    <ListItem button key={nav.name} onClick={logout}>
                                        <ListItemText primary='Logout' />
                                    </ListItem>
                                )
                            }
                            else {
                                return (
                                    <React.Fragment/>
                                )
                            }
                        }
                        else {
                            return (
                                <Link to={nav.link} className={classes.nav}>
                                    <ListItem onClick={handleDrawerToggle(false)} button key={nav.name}>
                                        <ListItemText primary={nav.name} />
                                    </ListItem>
                                </Link>
                            )
                        }
                    })
                }
            </List>
        </div>
    );

    // Combines all the stuff above and makes the header. It works great on phones as well.
    return (
        <div className={classes.root}>
            <ElevationScroll {...props}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar style={{padding: 0}}>
                            <div className={classes.brand}>
                                <Link to='/'>
                                    <img src={darkMode?images.logos.ieee_rvce_new_white:images.logos.ieee_rvce_new_blue} height="60px" style={{float:"left"}} alt="IEEE RVCE logo"/>
                                </Link>
                            </div>
                            
                            <div className={classes.navs}>
                                <Buttons/>
                            </div>
                            
                            {/* <div className={classes.brand}>
                                <a href='https://www.ieee.org/' target='_blank' rel='noopener noreferrer'>
                                    <img src={darkMode?images.logos.ieee_white:images.logos.ieee_blue_png} height="60px" style={{float:"right", marginRight: "3%", paddingTop: '10px', paddingBottom: '10px'}} alt="IEEE logo"/>
                                </a>
                            </div> */}
                            <IconButton
                                onClick={handleDrawerToggle(true)}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <SwipeableDrawer
                anchor='right'
                open={drawer}
                onClose={handleDrawerToggle(false)}
                onOpen={handleDrawerToggle(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    )
}
