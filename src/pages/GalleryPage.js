import React, {useState, useEffect} from 'react'
import {Container, GridList, Typography, FormControl, InputLabel, Select, MenuItem, GridListTile, GridListTileBar, Backdrop, Fab, Tooltip, IconButton} from '@material-ui/core';
import {Add, Delete, Edit} from '@material-ui/icons';
import {Skeleton,} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import {ecats, hostname} from '../links';
import * as queryString from 'query-string';
import axios from 'axios';
import {AddImageDialog} from '../components/AddImageDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.root,
        ...theme.page,
    },
    imgrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    filter: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        backgroundColor: 'rgb(0,0,0,0.9)',
    },
    fab: {
        ...theme.fab,
        right: 100,
    },
    titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, ' +
          'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
    },
    bar: {
        ...theme.transbg,
    },
}))

export default function GalleryPage(props) {
    let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const {ecat} = queryString.parse(props.location.search)
    //Society names for dropdown filter
    const [category, setCategory] = useState(ecat !==undefined?ecat:0);
    //Society filter
    const handleFilter = (event) => {
        setCategory(event.target.value);
        window.location.href = event.target.value!==0?window.location.origin + '/#/gallery?ecat=' + event.target.value:window.location.origin + '/#/gallery';
    }

    //Image backdrop
    const [openBackdrop, setBackdrop] = useState(false)
    const handleBackdropClose = () => {
        setBackdrop(false)
    }

    //Clicked image
    const [iid, setClicked] = useState(0)

    //Loading skeletons
    const [loading, setLoading] = useState(true)

    //Grid list tiles
    const [tileData, setTileData] = useState([
        {"ignore":"this"},
        {"this":"helps"},
        {"skeletons":"work"},
        {"anyways":"how"},
        {"you":"doing"},
        {"how's": "life"}
    ])

    //Use effect to fetch images
    useEffect(() => {
        setLoading(true)
        axios.get(ecat!==undefined?hostname+'/api/gallery/cat/'+ecat:hostname+'/api/gallery')
            .then(response => {
                console.log(response.data.images)
                setTileData(response.data.images)
            })
            .then(() => {
                setLoading(false)
            })
    },[ecat])

    //Number of columns to make it responsive
    const [colnum, setColNum] = useState(undefined)
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set on resize to state
            if(window.innerWidth<=600) 
                setColNum(1)
            else if(window.innerWidth<=900)
                setColNum(2)
            else
                setColNum(3)
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    const onTileClicked = (iid) => (event) => {
        setBackdrop(true)
        setClicked(iid)
    }

    const handleDeleteImage = (iid) => (event) => {
        axios.delete(hostname+ '/api/gallery/' + iid, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('atoken')
            }
        })
        .then(response => {
            if (response.data.ok === true) {
                console.log("Successfully deleted image " + iid)
                window.location.reload()
            }
            else {
                console.error("Deletion failed")
            }
        })
    }

    //Dialog stuff
    const [dialog, setDialog] = useState(false);
    //Editable dialog or not
    const [editable, setEditable] = useState(false);

    const handleDialogClose = () => {
        setDialog(false)
        setEditable(false)
    }
    const handleDialogOpen = () => {
        setDialog(true)
    }

    const handleEditImage = (iid) => (event) => {
        setClicked(iid)
        setEditable(true)
        handleDialogOpen()
    }

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.filter}>
                <div className={classes.bar} style={{ float: "left", display: "flex", flexDirection: 'row-reverse', marginLeft: '5%', textAlign: 'center' }}>
                    <FormControl>
                        <InputLabel id='ecat-search-label'>Search by category</InputLabel>
                        <Select
                            labelId='ecat-search-label'
                            id='ecat-search'
                            value={category}
                            onChange={handleFilter}
                            style={{minWidth:"200px"}}
                        >
                            <MenuItem key={"All"} value={0}>All</MenuItem>
                            <MenuItem key={"CompSoc"} value={ecats.compsoc}>Computer Society</MenuItem>
                            <MenuItem key={"ComSoc"} value={ecats.comsoc}>Communication Society</MenuItem>
                            <MenuItem key={"APS"} value={ecats.aps}>Antenna Propogation Society</MenuItem>
                            <MenuItem key={"SPS"} value={ecats.sps}>Signal Processing Society</MenuItem>
                            <MenuItem key={"PES"} value={ecats.pes}>Power and Energy Society</MenuItem>
                            <MenuItem key={"RAS"} value={ecats.ras}>Robotic and Automation Society</MenuItem>
                            <MenuItem key={"SIGHT"} value={ecats.sight}>Special Interest Group on Humanitarian Technology</MenuItem>
                            <MenuItem key={"WIE"} value={ecats.wie}>Women in Engineering</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Container>
                <Typography variant='h4' style={{textAlign: 'center'}}><b>Gallery</b></Typography>
                <br/>
                <div className={classes.imgrid}>
                    {
                        (tileData!==undefined && tileData.length!==0)? (
                            <GridList 
                                cellHeight={400} 
                                cols={colnum}
                            >
                                {
                                    tileData.map((tile, index) => {
                                        if(loading) {
                                            return(
                                                <GridListTile key={"skeleton" + index} cols={1}>
                                                    <Skeleton animation="pulse" variant="rect" height={400} width={400}/>
                                                </GridListTile>
                                            )
                                        }
                                        else {
                                            if(tileData.length >=0) {
                                                return (
                                                    <GridListTile key={tile.image} cols={1} style={{minHeight: 400, minWidth: 400}}>
                                                        <img onClick={onTileClicked(index)} style={{objectFit: 'contain', width: '100%'}} src={`data:image/png;base64,${Buffer(tile.image.data).toString('base64')}`} alt={tile.name}/>
                                                        {
                                                            loggedIn && (<GridListTileBar
                                                                titlePosition="top"
                                                                actionIcon={
                                                                    <>
                                                                        <IconButton aria-label={`delete ${tile.name}`} onClick={handleDeleteImage(tile.iid)}>
                                                                            <Delete />
                                                                        </IconButton>
                                                                        <IconButton aria-label={`delete ${tile.name}`} onClick={handleEditImage(index)}>
                                                                            <Edit />
                                                                        </IconButton>
                                                                    </>
                                                                }
                                                                actionPosition="right"
                                                                className={classes.titleBar}
                                                            />)
                                                        }
                                                    </GridListTile>
                                                )
                                            }
                                            else {
                                                return(
                                                    <Typography variant='h5' style={{textAlign: 'center'}}>No images to display</Typography>
                                                )
                                            }
                                        }
                                    })
                                }
                            </GridList>
                        )
                        :
                        (
                            <Typography variant='h5' style={{textAlign: 'center'}}>No images to display</Typography>
                        )
                    }
                </div>
            </Container>
            {
                !loading && (<Backdrop className={classes.backdrop} open={openBackdrop} onClick={handleBackdropClose}>
                    {tileData!==undefined && tileData.length!==0 && <img src={`data:image/png;base64,${Buffer(tileData[iid].image.data).toString('base64')}`} alt={tileData[iid].name} style={{maxHeight: window.innerHeight*0.9, maxWidth: window.innerWidth *0.9}}/>}
                </Backdrop>)
            }
            {
                loggedIn && (
                    <>
                        <Tooltip title="Add image" aria-label="add-image-tooltip">
                            <Fab onClick={handleDialogOpen} aria-label='addImage' className={classes.fab}>
                                <Add/>
                            </Fab>
                        </Tooltip>
                        <AddImageDialog 
                            onClose={handleDialogClose} 
                            aria-label="add-image-dialog" 
                            open={dialog}
                            data={tileData[iid]}
                            edit={editable}/>
                    </>
                )
            }
        </div>
    )
}