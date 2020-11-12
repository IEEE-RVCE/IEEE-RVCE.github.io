import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, useScrollTrigger, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import AppBarMenu from './AppBarMenu';
import { navs, societies, affinities } from '../links';

export default function Header(props) {

    // Get dark or light mode
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem('darkMode') === 'true')

    React.useEffect(() => {
        setDarkMode(localStorage.getItem('darkMode') === 'true')
    })

    // All the styling information for the whole header component is in here
    const useStyles = makeStyles((theme) => ({
        // Make the container take up all space if free. Padding bottom as it's fixed, it should leave a little transparent space which really won't be noticed.
        root: {
            flexGrow: 1,
            backgroundColor: "transparent",
            paddingBottom:  theme.spacing(6),
        },
        // White background for the bar for now
        appbar: {
            backgroundColor: theme.appbar.backgroundColor,
        },
        // Make brand stay on left by taking all remaining space while justifying
        brand: {
            flexGrow: 1,
        },
        // Bordered buttons in IEEE blue shade, can be changed as needed
        button: theme.button,
        // Don't display the navigation buttons if on a small screen
        navs: {
            [theme.breakpoints.up('md')]: {
                display: 'block',
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
                        <Link to={nav.link} className={classes.nav}>
                            <Button color="inherit" className={classes.button}>{nav.name}</Button>
                        </Link>
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
                                    <ListItem button key={nav.name} onClick={logout}>
                                        <ListItemText primary='Logout' />
                                    </ListItem>
                                )
                            }
                            else {
                                return (
                                    <Link to={nav.link} className={classes.nav}>
                                        <ListItem button key={nav.name}>
                                            <ListItemText primary={nav.name} />
                                        </ListItem>
                                    </Link>
                                )
                            }
                        }
                        else {
                            return (
                                <Link to={nav.link} className={classes.nav}>
                                    <ListItem button key={nav.name}>
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
                <AppBar
                    position="fixed"
                    className={classes.appbar}
                    id="navbar"
                  >
                    <Toolbar style={{ padding: 0 }}>
                        <div className={classes.brand}>
                            <Link to='/'>
                                <img src={darkMode ? '/assets/images/ieee_rvce_white.png' : '/assets/images/ieee_rvce.jpg'} height="70px" style={{ float: "left" }} alt="IEEE RVCE logo" />
                            </Link>
                        </div>

                        <div className={classes.navs}>
                            <Buttons />
                        </div>

                        <div className={classes.brand}>
                            <a href='https://www.ieee.org/' target='_blank' rel='noopener noreferrer'>
                                <img src={darkMode ? '/assets/images/ieee_white.png' : '/assets/images/ieee_blue.png'} height="40px" style={{ float: "right", marginRight: "3%" }} alt="IEEE logo" />
                            </a>
                        </div>
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
