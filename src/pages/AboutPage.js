import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {about} from '../links';
import {Typography, Paper, Container, List, ListItem, ListItemText,Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
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
                    History of IEEE RVCE
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                    IEEE RVCE Student Branch was started in 2017 and since then from having few members initially to having 200+ members now, we have shown immense growth in terms of membership and the quality of events. 
                    <br/>
                        <img src={about.img1} style={{width:"35%"}} />
                    <br/>
                    We have been successfully conducting workshops, seminars and shifted swiftly to webinars and online workshops during the pandemic because no matter what the circumstances, learning never stops.
                    <br/>
                        <img src={about.img2} style={{width:"35%"}} />
                    <br/>
                    From encouraging our student members to take up projects that develop a research mindset to even building this website, we at IEEE RVCE have strived to help the members to gain practical skills to become better professionals.
                    </Typography>
                </Paper>
                <br/>

                {/* FAQs */}
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        FAQ
                    </Typography>
                    <br/>
                    <Accordion style={{backgroundColor:'#424242'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>1. What is IEEE?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        The Institute of Electrical and Electronics Engineers (IEEE) is a professional association for electronic engineering and electrical engineering (and associated disciplines). It was formed in 1963 from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers. As of 2018, it is the world's largest association of technical professionals with more than 423,000 members in over 160 countries around the world. Its objectives are the educational and technical advancement of electrical and electronic engineering, telecommunications, computer engineering and allied disciplines.
                    </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#272727'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>2. What is an IEEE Student Branch?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        An IEEE Student Branch provides opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. It comprises faculty members and students that volunteer and work together to spread awareness about technological progress and develop their skillsets for the professional world. IEEE RVCE Student Branch was started in 2017.                     </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#424242'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>3. What are the Member Grades in IEEE?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#272727'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>4. Why is the IEEE membership expensive?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        IEEE membership dues are quite reasonable when you consider the quantity and quality of benefits offered to members. Also, IEEE membership often pays for itself. The discounts members receive on IEEE products or attending a conference makes membership a good return-on-investment. You can also get benefits for various paid events and conferences where discounts are given exclusively to members. There are often discounts
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#424242'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>5. Does the value of IEEE membership justify its cost?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        IEEE membership offers an array of benefits that may be of interest to you. They include Access to technical publications; Professional and educational development; Unique networking venues; Discounts on conference attendance, insurance programs, IEEE products. IEEE membership not only helps you learn more about the technical fields you are interested in but also shape up your personality as a whole through volunteering for the professional world.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#272727'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>6. I have no time to read the publications.</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        It's a constant challenge between finding the time to be informed, and one day discovering that you're not technically current. Our members tell us that reading IEEE publications saves them time, as they do not need to "reinvent-the-wheel" at work. IEEE publications are the world's best collection of technical information. Taking the time to read this information keeps you technically current. Investing 30 minutes with one publication could save you 40 hours of research at work.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#424242'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>7. I can find all this information on Google—what's the value of membership?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        There's a lot of information to be found on Google, but IEEE publications are not available for free on Google. Moreover, the quality of technical information found via Google is random and doesn't adhere to any consistent standards of technical excellence. Did you know that 60,000 patents cite IEEE information? -These patents cite IEEE, not Google. IEEE membership is much more than access to information. It's about networking, professional development, and you take personal responsibility for your career. Membership is about meeting new colleagues and coming into contact with really great people.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#272727'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>8. What are the communities present in IEEE ?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{backgroundColor:'#424242'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>9. What does a member have access to?</Typography>    
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant='body1'>
                        <List>
                            <ListItem>
                                <ListItemText
                                primary="IEEE Member Digital library"
                                secondary="Access up to 25 articles a month from any IEEE publication 
                                Awards and Scholarships: Enhance your resume with IEEE awards and also get access to a scholarship for educational and research purposes
                                "
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="IEEE Conferences and Workshops"
                                secondary="Registration discount on all IEEE conferences and workshops"
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="IEEE Chapters"
                                secondary="Engage with others through informative technical meetings"
                                />
                            </ListItem>
                            
                            <ListItem>
                                <ListItemText
                                primary="IEEE Spectrum Magazine"
                                secondary="12 monthly issues on topics that'll keep you updated with the fast-changing world of technology"
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Events"
                                secondary="Participate and organise technical, educational and humanitarian events"
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="IEEE JobSite"
                                secondary="Locate career opportunities easily "
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                primary="Paper Publications and many more "
                                />
                            </ListItem>
                        </List>
                    </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                    </Paper>
            </Container>
        </div>
    )
}