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
import GiveMeABreak from '../components/GiveMeABreak';
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
            {/* <GiveMeABreak num={5} /> */}
            <Container className={classes.container}>
                <FrontText />
                {/* <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Vision
                    </Typography>
                    <br />
                    <Typography variant='body1'>
                        IEEE RVCE will be instrumental in facilitating the global outreach of IEEE
                        by providing a platform for students to connect with professionals worldwide
                        and develop their technical expertise, thus making a positive impact on the society
                    </Typography>
                </Paper>
                <br />
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        What we do
                    </Typography>
                    <br />
                    <Typography variant='body1'>
                        As members of a larger technical community,  IEEE RVCE aims to connect future engineers and researchers with industry experts and top academicians.
                        We provide a platform for students to stay updated with today's research through webinars and technical talks by eminent professors and professionals.
                        We also arrange workshops and Industrial visits that help students upgrade their skills to stay relevant in today's global market.
                    </Typography>
                </Paper> */}
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