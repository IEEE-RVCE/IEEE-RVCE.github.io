import React from 'react';
import {
  Button,
  Popper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Grow,
  Paper,
  ListItem,
  List,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  // Bordered buttons in IEEE blue shade, can be changed as needed
  button: theme.button,
  hiddenMed: {
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
    display: 'none',
  },
  // To remove hyperlink from each Nav
  menuitem: {
    textDecoration: 'none',
    color: localStorage.getItem('darkMode') === 'true' ? '#eee' : '#00629B',
  },
  list: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    display: 'block',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function AppBarMenu(props) {
  const classes = useStyles();

  //Hooks for opening menu
  const [menuOpen, setMenuOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setMenuOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setMenuOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(menuOpen);
  React.useEffect(() => {
    if (prevOpen.current === true && menuOpen === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = menuOpen;
  }, [menuOpen]);

  //menu items
  const MenuItems = props => {
    let menuitems = props.items;
    let items = menuitems.map(item => {
      return (
        <Link to={item.link} className={classes.menuitem} key={item.name + item.link}>
          <MenuItem onClick={handleClose} key={item.name + item.link}>
            {item.name}
          </MenuItem>
        </Link>
      );
    });
    return items;
  };

  const handleDrawer = open => {
    props.drawerHandle(open);
  };

  // Menu items but in list for phones
  const ListItems = props => {
    let listitems = props.items;
    let items = listitems.map(item => {
      return (
        <Link to={item.link} className={classes.menuitem}>
          <ListItem onClick={() => handleDrawer(false)} button key={item.name} className={classes.nested}>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      );
    });
    return items;
  };

  const [listOpen, setListOpen] = React.useState(false);

  const handleClick = () => {
    setListOpen(!listOpen);
  };

  return (
    <React.Fragment>
      <Button
        ref={anchorRef}
        color="inherit"
        aria-controls={menuOpen ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={`${classes.button} ${classes.hiddenMed}`}
        disableTouchRipple
      >
        {props.name}
      </Button>
      <Popper
        open={menuOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        className={classes.hiddenMed}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'center top' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={menuOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItems items={props.items} />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <ListItem button key={props.name} onClick={handleClick} className={classes.list}>
        <ListItemText primary={props.name} className={classes.menuitem} />
      </ListItem>
      <Collapse in={listOpen} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItems items={props.items} />
        </List>
      </Collapse>
    </React.Fragment>
  );
}
