import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {hostname} from '../links';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Container, LinearProgress, Paper } from '@material-ui/core';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab';
import {Delete, Edit} from '@material-ui/icons';
import {AddArticleDialog} from '../components/AddArticleDialog';
import EditArticle from '../components/EditArticle';

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiFab-primary': {
            backgroundColor: theme.fab.backgroundColor,
            color: theme.fab.color,
            '&:hover': {
                backgroundColor: theme.fab.backgroundColor,
                color: theme.fab.color,
            }
        },
    },
    root: {
        ...theme.root,
        ...theme.page,
        paddingBottom: theme.spacing(4),
    },
    link: theme.link,
    griditem: {
        width: '90%',
        padding: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
        }
    },
    backButton: {
        float: "left",
        display: "flex",
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    adminButtons: {
        float:"right", 
        display:"flex",
        flexDirection:"row",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    loadingBar: {
        paddingTop: 60,
        minHeight: 1000,
    },
    header: {
        textAlign: 'center',
    },
    speedDial: {
        position: 'fixed',
        bottom: 32,
        right: 100,
    },
    paper: {
        ...theme.paper,
        padding: theme.spacing(4),
    }
}))
 
export default function ArticlePage() {
    const classes = useStyles()
    let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const [loaded, setLoaded] = useState(false);
    let {arid} = useParams()
    const [article, setArticle] = useState({title: ''})
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setLoaded(false)
        axios.get(hostname + '/api/article/' + arid)
        .then((response) => {
            if(response.data.ok) {
                setArticle({...response.data.article, content: JSON.parse(response.data.article.content)})
                setLoaded(true)
            }
            else
                setError(true)
        })
        .catch((error) => {
            console.error(error)
            setError(true)
        })
    },[arid])

    const deleteArticle = () => {
        axios.delete(hostname+ '/api/article/' + arid, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('atoken')
            }
        })
        .then(response => {
            if (response.data.ok === true) {
                console.log("Successfully deleted article " + arid)
                window.history.back()
            }
            else {
                console.error("Deletion failed")
            }
        })
    }

    // Dialog stuff
    const [dialog, setDialog] = useState(false);
    const handleDialogClose = () => {
        setDialog(false)
    }
    const handleDialogOpen = () => {
        setDialog(true)
    }

    // Speed dial stuff
    const [dialopen, setDialopen] = useState(false);
    const handleDialClose = () => {
        setDialopen(false)
    }
    const handleDialOpen = () => {
        setDialopen(true)
    }

    const actions = [
        {icon: <Edit />, name: 'Edit article', onClick: handleDialogOpen},
        {icon: <Delete />, name: 'Delete article', onClick: deleteArticle},
    ]
    return(
        <>
            {
                loaded?
                (
                    <div className={classes.root}>
                        <Container maxWidth='md' fluid className={classes.container}>
                            <Paper className={classes.paper}>
                                <EditArticle readOnly={true} edit={false} editorContent={article.content} />
                            </Paper>
                        </Container>
                        <AddArticleDialog 
                            open={dialog} 
                            onClose={handleDialogClose} 
                            aria-label="edit-article-dialog" 
                            data={{
                                ...article,
                            }}
                            edit={true}
                        />
                        {
                            loggedIn && (
                                <>
                                    <SpeedDial
                                    ariaLabel="Event page speed dial"
                                    className={classes.speedDial}
                                    icon={<SpeedDialIcon />}
                                    onClose={handleDialClose}
                                    onOpen={handleDialOpen}
                                    open={dialopen}
                                    >
                                    {actions.map((action) => (
                                        <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={action.onClick}
                                        />
                                    ))}
                                    </SpeedDial>
                                </>
                            )
                        }
                    </div>
                )
                :
                (
                    <div classes={(classes.loadingBar,classes.root)}>
                        {error?(<Typography variant='h3' style={{textAlign: 'center', paddingTop: '20%', paddingBottom: '20%'}}><b>No such article</b></Typography>):(<LinearProgress/>)}
                    </div>
                )
            }
        </>
    )
}