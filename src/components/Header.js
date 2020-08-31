import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Container, useScrollTrigger, IconButton, List, ListItem, ListItemText, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import './style.css';

// All the styling information for the whole header component is in here
const useStyles = makeStyles((theme) => ({
    // Make the container take up all space if free. Padding bottom as it's fixed, it should leave a little transparent space which really won't be noticed.
    root: {
        flexGrow: 1,
        backgroundColor: "transparent",
        paddingBottom: theme.spacing(6),
    },
    // White background for the bar for now
    appbar: {
        backgroundColor: theme.root.backgroundColor,
    },
    // Make brand stay on left by taking all remaining space while justifying
    brand: {
        flexGrow: 1,
    },
    // Bordered buttons in IEEE blue shade, can be changed as needed
    button: {
        border: '1px solid #00629B',
        color: '#00629B',
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(2),
    },
    // Don't display the navigation buttons if on a small screen
    navs: {
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
        display: 'none',
    },
    // To remove hyperlink from each Nav
    nav: {
        textDecoration: 'none',
        color: '#00629B',
    },
    // Don't display menu button when on a not-small screen
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
        display: 'block',
    },
}))

export default function Header(props) {
    // All styles are in classes now
    const classes = useStyles()

    // drawer has the state if drawer is open or not. setDrawer sets that as per UI clicks.
    const [drawer, setDrawer] = React.useState(false)

    // Edit this list and the navs shall change accordingly
    const navs = [
        {name: "Home", link: '/'},
        {name: "About Us", link: '/about'},
        {name: "Societies", link: '/society'},
        {name: "Affinities", link: '/'},
        {name: "Membership", link: '/membership'},
        {name: "About the developers", link: '/devs'},
        {name: "Login", link: '/signin'},
    ]

    //List of societies and links
    const societies = [
        {name: "Computer Society", link: '/society'},
        {name: "Com Soc", link: '/society'},
        {name: "PES", link: '/society'},
        {name: "SPS", link: '/society'},
        {name: "APS", link: '/society'},
        {name: "RAS", link: '/society'},
    ]

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

    //for menu functions
    const [anchorEl, setAnchorEl] = React.useState();

    function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    // Renders all the navigation buttons by traversing array
    const Buttons = () => {
        let buttons = navs.map((nav) => {
            return (
                <Link to={nav.link} className={classes.nav} key={nav.name+nav.link}>
                    {/* {!(nav.name === "Societies") && <Button color="inherit" className={classes.button}>{nav.name}</Button>}
                    {
                        (nav.name === "Societies") && (
                        <div> */}
                        <div className="right-menu">
                        <Button color="inherit" className={classes.button} onMouseOver={handleClick}>{nav.name}</Button>
                        <div className="drop-menu">
                            <MenuItems/>
                        </div>
                        </div>
                        {/* </Menu> */}
                        {/* </div>)
                    } */}
                </Link>
            )
        })
        return buttons
    }

    //menu items
    const MenuItems = () => {
        let items = societies.map((society)=>{
            return (
                    <Link to={society.link} className={classes.nav} key={society.name+society.link}>
                        <MenuItem key={society.name+society.link}>{society.name}</MenuItem>
                    </Link>
                )
            }
        )
        return items
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
        <div
          onClick={handleDrawerToggle(false)}
          onKeyDown={handleDrawerToggle(false)}
        >
          <List>
            {navs.map((nav) => (
              <ListItem button key={nav.name}>
                    <Link to={nav.link} className={classes.nav}>
                        <ListItemText primary={nav.name}/>
                    </Link>      
              </ListItem>
            ))}
          </List>
        </div>
    );

    // Combines all the stuff above and makes the header. It works great on phones as well.
    return(
        <div className={classes.root}>
            <ElevationScroll {...props}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Container>
                        <Toolbar>
                                <div className={classes.brand} style={{marginLeft:"-5%"}}>
                                    <img src='/assets/images/rvce_logo.png' height="70px" style={{float:"left"}} alt="RV logo"/>
                                </div>
                                
                                <div style={{marginTop:"5%"}}>
                                    <Buttons button={classes.button}/>
                                </div>
                                <div className={classes.brand} style={{float:"right",marginRight:"-10%",marginLeft:"5%"}}>
                                    <img src='/assets/images/ieee_blue.jpg' height="40px" alt="IEEE logo"/>
                                </div>
                                <IconButton
                                    color="primary"
                                    onClick={handleDrawerToggle(true)}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Drawer 
            anchor='right' 
            open={drawer} 
            onClose={handleDrawerToggle(false)}
            >
                {list()}
            </Drawer>  
        </div>
    )
}