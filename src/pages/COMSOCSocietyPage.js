import React from "react";
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import { isMobile } from 'react-device-detect';
import Collapsible from 'react-collapsible';

const prefersDarkMode = localStorage.getItem('darkMode') === 'true'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: prefersDarkMode ? '#303030' : "#FFF"
    },
    container: theme.page,
    paper: {
        ...theme.paper,
        padding: theme.spacing(4)
    },
}))

export default function COMSOCSocietyPage(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <img src="/assets/images/comsoc.png" style={{ maxHeight: "100vh", width: "100%" }} />
            <Container maxWidth='xl' className={classes.root}><br />
                <div>
                    <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <strong>Vision</strong>
                    </Typography>
                    <Typography variant='body1'>
                        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>To get the students community interested in Communication and networking together and help in developing the society by conducting research, education, invitation, projects and implementation of new ideas provided by the members of this Society.</p>
                    </Typography>
                </div>
                <br /><br />
                <div>
                    <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <strong>Mission</strong>
                    </Typography>
                    <Typography variant='body1'>
                        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>The IEEE RVCE Communication Society intends to help understand its members, the importance of Communication and develop a forum to share information related to it. The society provides an opportunity to its members, improving themselves in technical, non-technical and professional aspects by building the right network. The society provides a platform to exchange ideas amongst the members and experts in both academia and industry. </p>
                    </Typography>
                </div><br />
                <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                    <strong>EVENTS</strong>
                </Typography><br />
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                </Grid><br />
                <a href="#" style={{ float: "right", textDecoration: "none" }}>Click here for more events</a>
                {/* </Paper> */}
                <br />
                {/* <Paper className={classes.paper}> */}
                <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                    <strong>ExeCom</strong>
                </Typography>
                <br />
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                </Grid>
                {/* </Paper> */}
                <br /><br />
                <Typography variant="h4" style={{ textAlign: (isMobile) ? "center" : "" }}>
                    <strong>Additional Resources</strong>
                </Typography><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6" >
                        <Collapsible trigger="Conferences" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Typography>
                </Paper><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6">
                        <a><Collapsible trigger="Competitions" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                        </a>
                    </Typography>
                </Paper><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6">
                        <Collapsible trigger="Certifications" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Typography>
                </Paper><br />
            </Container>
        </React.Fragment>
    )
}

