import { Box, Grid, makeStyles, Typography, Button, Card, CardContent } from '@material-ui/core';
import React from 'react';
import { whatWeDo } from '../links';

const useStyles = makeStyles(theme => ({
    bigbutton: {
        padding: '.6rem 1.2rem'
    },
    bigbadBackground: {
        backgroundImage: 'url(assets/images/devs/Chirag_Bapat.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
}));
export default function FrontBox() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.bigbadBackground}>
                <Grid container style={{ padding: '6rem' }} alignContent='center' justify='center'>
                    <Grid item>
                        <Typography variant='h4' >IEEE RVCE</Typography>

                    </Grid>
                </Grid>
                <br />

                <Grid container alignContent='center' alignItems='center' direction='row' justify='center' spacing={2}>
                    <Grid item>
                        <Button className={classes.bigbutton} variant='outlined' size='large'>Something</Button>

                    </Grid>
                    <Grid item>
                        <Button className={classes.bigbutton} variant='contained' color="primary" size='large'>Join US</Button>
                    </Grid>
                </Grid>
                <br />
            </Box>
            <br />

            <Grid container >
                <Grid item sm={12} md={6}>
                    {/* <Card variant='outlined'> */}
                        {/* <CardContent> */}
                            <Typography variant='h4'>What we do</Typography><br />

                            <Typography variant='body1'>{whatWeDo}</Typography>
                        {/* </CardContent> */}
                    {/* </Card> */}
                </Grid>
            </Grid>
            <br />
            <Grid container >
                <Typography variant='h4'>Achievements</Typography>
                <Typography variant='body1'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</Typography>

            </Grid>
        </>
    );
}