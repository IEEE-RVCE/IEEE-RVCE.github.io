import React from 'react';
import { Container, Typography, Grid, CssBaseline, Box, Button, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import EventsCalendar from '../components/Calendar';
import Avatar from '../components/Avatar';
import FrontText from '../components/FrontText';
import { execom, alumni } from '../links';
import FrontBox from '../components/FrontBox';
import SpacyDivider from '../components/SpacyDivider';
import AlumniAccordions from '../components/AlumniAccordions';
import GiveMeABreak from '../components/GiveMeABreak';

const useStyles = makeStyles((theme) => ({
    root: theme.root,
    container: theme.page,
    paper: {
        ...theme.paper,
        padding: theme.spacing(4)
    },
    link: theme.link,
    textField: {
        marginBottom:'10px',
        width:'60vw',
        [`& fieldset`]: {
          borderRadius: '0.25rem',
        },
    },
    '@global': {
        '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#12c48c',
        }
    }
}))

export default function HomePage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline></CssBaseline>
            <FrontBox />
            <Container className={classes.container}>
                <FrontText />
                <SpacyDivider num={2} className={classes.divider}/>
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

                <SpacyDivider num={2} color='#12c48c'/>
                <AlumniAccordions members={alumni.main}/>
                <SpacyDivider num={2} color='#12c48c'/>
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
            </Container>
            
            {/* contact form */}

            <Container>
                <SpacyDivider num={2} color='#12c48c'/>
                <Typography variant='h4' align='center'>
                            Contact Us
                </Typography>
                <br/>
                <Box align='center'>
                    <form
                        action="https://formspree.io/f/xjvjbrdz"
                        method="POST"
                        target='_blank'
                    >
                        {/* <InputLabel> */}
                            {/* Your email:  */}
                            <TextField type="text" name="_name" variant="outlined" className={classes.textField} label="Your name"/>
                            <TextField type="email" name="_replyto" variant="outlined" className={classes.textField} label="Your email"/>
                        {/* </InputLabel> */}
                        <br/>
                        {/* <InputLabel> */}
                                {/* Your message: */}
                            <TextField name="message" variant="outlined" multiline className={classes.textField} label="Your message" rows={5}/>
                        {/* </InputLabel> */}
                        <br/>
                        <Button type="submit" align='center' style={{marginBottom:"1%"}}>Send</Button>
                        <br/>
                    </form>
                </Box>
            </Container>
            <GiveMeABreak num={2}/>
        </div>
    )
}