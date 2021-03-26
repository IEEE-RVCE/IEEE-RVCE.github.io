import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Paper, Container, List, ListItem, ListItemText} from "@material-ui/core";
import AboutUsBox from '../components/AboutUsBox';

const useStyles = makeStyles((theme) => ({
    root: theme.root,
    container: theme.page, 
    paper: {
        ...theme.paper,
        padding: theme.spacing(4),
    },
}))

export default function AboutPage(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AboutUsBox/>
            <Container maxWidth='md' className={classes.container}>   
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        What is IEEE?
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                    The Institute of Electrical and Electronics Engineers (IEEE) is a professional 
                    association for electronic engineering and electrical engineering (and associated 
                    disciplines) .It was formed in 1963 from the amalgamation of the American Institute 
                    of Electrical Engineers and the Institute of Radio Engineers.
                    
                    As of 2018, it is the world's largest association of technical professionals with 
                    more than 423,000 members in over 160 countries around the world. Its objectives are 
                    the educational and technical advancement of electrical and electronic engineering, 
                    telecommunications, computer engineering and allied disciplines.
                    </Typography>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        What is an IEEE Student Branch?
                    </Typography>
                    <br/>
                    <Typography>
                    An IEEE Student Branch provides opportunities to meet and learn from fellow IEEE Student and 
                    Graduate Student Members and engage with professional IEEE members locally. It comprises of faculty
                    and students and is the place where Student members to begin networking in their areas of interest 
                    and future profession.

                    IEEE RVCE Student Branch was started in 2017.
                    </Typography>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                            What are the Member Grades in IEEE?
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        <List>
                            <ListItem>
                                <ListItemText
                                primary="Student Member"
                                secondary="A Student member must carry at least 50% of a normal full-time academic program as a 
                                        registered undergraduate or graduate student in a regular course of study in IEEE-designated 
                                        fields. The total cumulative period for a member to hold the Student member grade and/or the 
                                        Graduate Student member grade is limited to eight years."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Graduate Student Member"
                                secondary="A Graduate Student member must carry at least 50% of a normal full-time academic program 
                                as a registered graduate student in a regular course of study in IEEE- designated fields. The total 
                                cumulative period for a member to hold the Student member grade and/or the Graduate Student member 
                                grade is limited to eight years."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Associate Member"
                                secondary="Member grade is limited to those who have satisfied IEEE-specified educational 
                                requirements and/or who have demonstrated professional competence in IEEE-designated fields of interest. "
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Senior Member"
                                secondary="The grade of Senior member is the highest for which application may be made and 
                                requires experience reflecting professional maturity. For admission or transfer to the grade 
                                of Senior member, a candidate shall be an engineer, scientist, educator, technical executive, 
                                or originator in IEEE-designated fields."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Fellow Member"
                                secondary="The grade of Fellow recognizes unusual distinction in the profession and is conferred 
                                only by invitation of the Board of Directors upon a person with an extraordinary record of accomplishments 
                                in any of IEEE’s designated fields of interest."
                                />
                            </ListItem>
                        </List>
                    </Typography>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        What are the communities present in IEEE ?
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        <List>
                            <ListItem>
                                <ListItemText
                                primary="Societies"
                                secondary="IEEE has technical Societies that provide benefits to members within specialized fields 
                                of interest. Society memberships enable you to stay current within your chosen technology profession, 
                                keep in touch with your peers, and invest in your career."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Affinities and Special Interest Groups"
                                secondary="IEEE affinity and special interest groups are local units of IEEE organizational units, or 
                                standing committees. These woork towards serving specific communities such as Women in Engineering, 
                                IEEE Young Professionals etc."
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Humanitarian"
                                secondary="The goal of this community is to use the work of IEEE members and volunteers to improve the standard of living of underserved 
                                populations, and inspire the next generation to do the same. "
                                />
                            </ListItem>
                            
                            <ListItem>
                                <ListItemText
                                primary="Some additional communities"
                                secondary="
                                Humanitarian,
                                IEEE Collabratec,
                                Technical Councils,
                                General technical communities,
                                Standards Association &amp; working groups
                                etc. "
                                />
                            </ListItem>
                        </List>
                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}