import React from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '../components/Avatar'
import {images} from '../links'

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.root,
        padding: theme.spacing(8),
    },
    paper: {
        ...theme.paper,
        padding: theme.spacing(4),
    },
    page: theme.page,
    grid: theme.grid,
}))

export default function DevelopersPage(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Container maxWidth='lg' className={classes.page}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2} justify='space-evenly' className={classes.grid}>
                        <Grid item xs={12} md={4}>
                            <Avatar src={images.devs.ambu} name="Ambu Karthik"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Avatar src={images.devs.risha} name="Risha Dassi"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Avatar src={images.devs.bain} name="Atreya Bain"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Avatar src={images.devs.chirag} name="Chirag Bapat"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Avatar src={images.devs.vishal} name="Vishal M"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Avatar src={images.devs.akshara} name="Akshara N Udupa"/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}