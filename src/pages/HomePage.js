import React from 'react';

import {Container, Grid, Typography} from '@material-ui/core';

import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export default function HomePage(props) {
    return(
        <React.Fragment>
            <Container maxWidth='md'>
                <Grid>
                    <Typography>
                        {lorem.generateParagraphs(1)}
                    </Typography>
                </Grid>
            </Container>
        </React.Fragment>
    )
}