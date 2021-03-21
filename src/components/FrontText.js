import React from 'react';
import { Grid, Typography ,Box} from '@material-ui/core';
import { fp_image_1, whatWeDo } from '../links';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
    less:{
        padding:'1rem'
    }
}))
export default function FrontText() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.less} container  justify='space-around' alignItems='center' spacing={2} >
                <Grid item sm={12} md={6}>
                    <Typography variant='h4'>What we do</Typography><br />

                    <Typography variant='body1' align='justify'>{whatWeDo}</Typography>

                </Grid>
                <Grid item sm={12} md={4}>
                    <Box><img src={fp_image_1} alt='no-alt-pls' width='100%'></img></Box>
                </Grid>
            </Grid>
            <br />
            <Grid className={classes.less} direction='row-reverse' container justify='space-around' alignItems='center' spacing={2}>
                <Grid item sm={12} md={6}>
                    <Typography variant='h4'>Achievements</Typography>
                    <Typography variant='body1'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</Typography>

                </Grid>
                <Grid item sm={12} md={4}>
                <Box><img src={fp_image_1} alt='no-alt-pls' width='100%'></img></Box>

                </Grid>
                


            </Grid>
        </>
    )
}