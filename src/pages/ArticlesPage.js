import * as queryString from 'query-string';

import {
  Button,
  Container,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ecats, hostname } from '../links';

import { Add } from '@material-ui/icons';
import { AddArticleDialog } from '../components/AddArticleDialog';
import ArticleCard from '../components/ArticleCard';
import ArticlesBox from '../components/ArticlesBox';
import GiveMeABreak from '../components/GiveMeABreak';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.root,
    // ...theme.page,
  },
  filter: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button: {
    ...theme.button,
    display: 'flex',
    flexDirection: 'row',
  },
  fab: {
    ...theme.fab,
    right: 100,
  },
  bar: {
    ...theme.transbg,
  },
  bigbutton1: {
    background: `linear-gradient( -45deg, #fe8c00 30%, #f83600 90%)`,
    fontWeight: 'bold',
  },
  bigbutton2: {
    background: `linear-gradient( 45deg, #fe8c00 30%, #f83600 90%)`,
    fontWeight: 'bold',
  },
}));

export default function ArticlesPage(props) {
  const classes = useStyles();
  let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
  const { ecat } = queryString.parse(props.location.search);

  const [articles, setArticles] = useState([]);
  const [list, setList] = useState([
    { hi: 'these' },
    { dont: 'mean' },
    { anything: 'they' },
    { help: 'skeletons' },
  ]);

  //search text
  const [text, setText] = React.useState('');
  //Keyword search
  const handleSearch = event => {
    setText(event.target.value);
  };

  useEffect(() => {
    var updatedList = articles;
    if (articles) {
      updatedList = articles.filter(function (item) {
        if (text === '') return articles;
        return (
          item.keywords.toLowerCase().search(text.toLowerCase()) !== -1 ||
          item.title.toLowerCase().search(text.toLowerCase()) !== -1
        );
      });
      setList(updatedList);
    } else {
      setList([]);
    }
  }, [articles, text]);

  //Society names for dropdown filter
  const [category, setCategory] = useState(ecat !== undefined ? ecat : 0);
  //Society filter
  const handleFilter = event => {
    setCategory(event.target.value);
    window.location.href =
      event.target.value !== 0
        ? window.location.origin + '/#/articles?ecat=' + event.target.value
        : window.location.origin + '/#/articles';
  };

  //Loading skeletons
  const [loading, setLoading] = useState(false);

  //Use effect to fetch images
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        ecat !== undefined
          ? hostname + '/api/article/cat/' + ecat
          : hostname + '/api/article'
      )
      .then(response => {
        setArticles(response.data.articles);
        setList(response.data.articles);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [ecat]);

  //Dialog stuff
  const [dialog, setDialog] = useState(false);

  const handleDialogClose = () => {
    setDialog(false);
  };
  const handleDialogOpen = () => {
    setDialog(true);
  };

  return (
    <div className={classes.root}>
      <ArticlesBox />
      <div className={classes.filter}>
        <div
          className={classes.bar}
          style={{
            float: 'right',
            display: 'flex',
            flexDirection: 'row',
            marginRight: '15%',
          }}
        >
          <FormControl>
            <TextField
              value={text}
              onChange={handleSearch}
              placeholder="Enter keywords or name"
              label="Search events"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue="All"
            />
          </FormControl>
        </div>
        <div
          className={classes.bar}
          style={{
            float: 'left',
            display: 'flex',
            flexDirection: 'row-reverse',
            marginLeft: '15%',
            textAlign: 'center',
          }}
        >
          <FormControl>
            <InputLabel id="ecat-search-label">Search by category</InputLabel>
            <Select
              labelId="ecat-search-label"
              id="ecat-search"
              value={category}
              onChange={handleFilter}
              style={{ minWidth: '200px' }}
            >
              <MenuItem key={'All'} value={0}>
                All
              </MenuItem>
              <MenuItem key={'CompSoc'} value={ecats.compsoc}>
                Computer Society
              </MenuItem>
              <MenuItem key={'ComSoc'} value={ecats.comsoc}>
                Communication Society
              </MenuItem>
              <MenuItem key={'APS'} value={ecats.aps}>
                Antenna Propogation Society
              </MenuItem>
              <MenuItem key={'SPS'} value={ecats.sps}>
                Signal Processing Society
              </MenuItem>
              <MenuItem key={'PES'} value={ecats.pes}>
                Power and Energy Society
              </MenuItem>
              <MenuItem key={'RAS'} value={ecats.ras}>
                Robotic and Automation Society
              </MenuItem>
              <MenuItem key={'SIGHT'} value={ecats.sight}>
                Special Interest Group on Humanitarian Technology
              </MenuItem>
              <MenuItem key={'WIE'} value={ecats.wie}>
                Women in Engineering
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Container maxWidth="md">
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Button
            style={{
              width: '50%',
              color: 'black',
              textDecoration: 'none',
              underline: 'none',
            }}
            className={`${classes.bigbutton} ${classes.bigbutton2} ${classes.button}`}
            variant="contained"
            color="primary"
            size="large"
          >
            <a
              href="http://www.tinyurl.com/ieeervceblog"
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Submit a blog entry
            </a>
          </Button>
        </div>
        {/* <Typography variant="h4" style={{ textAlign: "center" }}>
          <b>Articles</b>
        </Typography> */}
        <br />
        {Array.isArray(list) && list.length !== 0 ? (
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="stretch"
            className={classes.grid}
          >
            {list.map(function (item) {
              if (loading) {
                return (
                  <Grid item lg={12} sm={12} xs={12} md={12}>
                    <Skeleton animation="wave" variant="rect" height={400} />
                  </Grid>
                );
              } else {
                return (
                  <Grid item lg={12} sm={12} xs={12} md={12}>
                    <ArticleCard article={item} />
                  </Grid>
                );
              }
            })}
          </Grid>
        ) : (
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            Coming soon...
          </Typography>
        )}
      </Container>
      {loggedIn && (
        <>
          <Tooltip title="Add article" aria-label="add-article-tooltip">
            <Fab
              onClick={handleDialogOpen}
              aria-label="addArticle"
              className={classes.fab}
            >
              <Add />
            </Fab>
          </Tooltip>
        </>
      )}
      <AddArticleDialog
        open={dialog}
        onClose={handleDialogClose}
        edit={false}
        aria-label="add-article-dialog"
      />
      <GiveMeABreak />
      <GiveMeABreak />
      <GiveMeABreak />
    </div>
  );
}
