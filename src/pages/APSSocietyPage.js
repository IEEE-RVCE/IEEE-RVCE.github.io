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
    link: {
        ...theme.link,
        color: localStorage.getItem('darkMode') === 'true' ? '#bbb' : '#00629B',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    carousel: {
        margin: "auto",
        paddingTop: theme.spacing(4),
    }
}))

export default function APSSocietyPage(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <img src="/assets/images/AntennaPropagation.png" style={{ width: "100%", maxHeight: "100vh" }} />
            <Container maxWidth='xl' className={classes.root}><br />
                {(isMobile) ? "" : <br />}
                <div>
                    <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <strong>Vision</strong>
                    </Typography>
                    <Typography variant='body1' style={{ paddingRight: "7%", paddingLeft: (isMobile) ? "5%" : "" }}>
                        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>To instil excellent and broadly accessible concepts and ideals of the Antennas and Propagation domain empowering the professional development of its members and the society.</p>
                    </Typography>
                </div>
                <br />

                <div >
                    <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <strong>Mission</strong>
                    </Typography>
                    <Typography variant='body1' style={{ paddingRight: "7%" }}>
                        <ul>
                            <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To nurture the members of the society with relevant technical knowledge with respect to the Antennas and Propagation Domain.</li>
                            <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To instil excellence in the domain of Antenna’s specifically with regard to their analysis and design.</li>
                            <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To provide an active platform for the members of the society to exchange, challenge and encourage new ideas.</li>
                            <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To ensure the members of the society imbibe skills relevant and required by the society and actively contribute to the same.</li>
                            <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To guarantee the proficiency of the society members and to ensure overall professional development by conducting Webinars, Workshops and Distinguished lectures.</li>
                        </ul>

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

