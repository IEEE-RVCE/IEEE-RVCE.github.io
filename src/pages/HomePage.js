import React from 'react';
import { Container, Typography, Grid,  CssBaseline, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import EventsCalendar from '../components/Calendar';
import Avatar from '../components/Avatar';
import FrontText from '../components/FrontText';
import { execom } from '../links';
import FrontBox from '../components/FrontBox';
import SpacyDivider from '../components/SpacyDivider';
// import GiveMeABreak from '../components/GiveMeABreak';
const useStyles = makeStyles((theme) => ({
    root: theme.root,
    container: theme.page,
    paper: {
        ...theme.paper,
        padding: theme.spacing(4)
    },
    link: theme.link,
}))

export default function HomePage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline></CssBaseline>
            <FrontBox />
            <Container className={classes.container}>
                <FrontText />
                <SpacyDivider num={2}/>
                <Typography variant='h4' align='center'>
                    Executive Committee
                </Typography>
                <br />
                <Container maxWidth="md">

                    <Grid container spacing={3} justify='space-evenly'>
                        {/* <Grid container item xs={12} sm={6} md={4} lg={3}> */}
                        {
                            execom.main.map((member) => (
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Avatar name={member.name} position={member.position} src={member.image} />
                                </Grid>
                            ))
                        }
                        {/* </Grid> */}
                    </Grid>
                </Container>

                <SpacyDivider num={2}/>
                <Box >
                    <Typography variant='h4' align='center'>
                        Upcoming Events
                    </Typography>
                    <br />
                    <Container maxWidth='md'>

                        <EventsCalendar
                            toolbar={false}
                            defaultView="agenda"
                        />
                        <Link to='/calendar' className={classes.link}>Click here to view full calendar</Link>
                    </Container>
                </Box>
                <br />
            </Container>
        </div>
    )
}