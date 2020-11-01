import React from 'react';
import {Container, Paper, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '../components/Avatar'
import {images} from '../links'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8),
    },
    paper: {
        padding: theme.spacing(4),
    },
}))

export default function DevelopersPage(){
    const classes = useStyles()
    return(
        <Container maxWidth='lg' className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} md={3}>
                        <Avatar src={images.devs.ambu} name="Ambu Karthik"/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar src={images.devs.risha} name="Risha Dassi"/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar src={images.devs.bain} name="Atreya Bain"/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} md={3}>
                        <Avatar src={images.devs.chirag} name="Chirag Bapat"/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar src={images.devs.vishal} name="Vishal M"/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar src={images.devs.akshara} name="Akshara N Udupa"/>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}