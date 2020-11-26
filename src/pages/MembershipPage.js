import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography, Button, MobileStepper, Paper} from '@material-ui/core';
import {images} from '../links';
import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.root,
      ...theme.page,
    },
    button: {
        ...theme.button,
        display: 'flex', 
        float: 'right', 
        flexDirection: 'row',
    },
    backButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(3),
    },
    instructions: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    link: theme.link,
    snapshot: {
        width:"100%",
    },
    heading: {
        margin:'auto',
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2),
    },
    paper: {
        ...theme.paper,
        padding: theme.spacing(4),
    },
    stepper: {
        ...theme.root,
    },
  }));

export default function MembershipPage(){
    const classes = useStyles();
    const [start,setStart]=React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    let {step} = useParams();
    useEffect(() => {
        if(step!== undefined) {
            setStart(true);
            setActiveStep(Number(step)-1);
        }
    },[step])
    const steps = [
      'Create an account on IEEE website ', 
      'Applying for student membership', 
      'Filling out Personal details',
      'Member Profile details','Payment',
      'Filling the Google form',
      'Done!'
    ];
  
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        window.scrollTo(0,0);
        window.location.href = window.location.origin + '/#/membership/' + (activeStep + 2);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      window.scrollTo(0,0);
      window.location.href = window.location.origin + '/#/membership/' + (activeStep);
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setStart(false);
      window.location.href = window.location.origin + '/#/membership/';
      window.location.reload();
    };

    const getStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 0:
          return (
                <Container>Provide all required information like Name, Email ID and password to create an IEEE account:&nbsp;
                    <a className={classes.link} href="https://www.ieee.org/profile/public/createwebaccount/showCreateAccount.html?url=https%3A%2F%2Fwww.ieee.org%2F ">Register here</a>
                    <br/>
                    <img src={images.membership.step11} alt="step1.1" className={classes.snapshot}/>
                    <img src={images.membership.step12} alt="step1.2" className={classes.snapshot}/>
                    <br/>
                    PS: You merely have an IEEE account and are not an IEEE Member yet.
                </Container>
            );
        case 1:
          return (
                <Container>
                    Click <a className={classes.link} href="http://www.ieee.org/go/join_student">here</a> and sign in (if asked) with the credentials of the account you created in Step 1.
                    <br/>
                    <img src={images.membership.step21} alt="step2.1" className={classes.snapshot}/><br/>
                </Container>
            );
        case 2:
          return (
                <Container>
                    <b>A. Contact and Profile Information :</b>
                    Fill all the required information accurately.<br/>
                    <img src={images.membership.step31} alt="step3.1" className={classes.snapshot}/>
                    <br/>
                    <b>B. Professional and educational information :</b>
                    Select - I am a student option.<br/>
                    University / college: Rashtreeya Vidyalaya College of Engineering<br/>
                    Select Undergraduate<br/>
                    Under Degree, choose Bachelor of Engineering<br/>
                    Under Academic Program select your Respective Branch / Department.<br/>
                    Scroll down to fill out the other required details.<br/>
                    <img src={images.membership.step33} alt="step3.2" className={classes.snapshot}/><br/>
                    For the question 'were you referred by another IEEE member'<br/>
                    Fill out the following details <br/>
                    Referring member name: RUTHVIK SJ<br/>
                    Referring IEEE member number: 94513775<br/>
                    <img src={images.membership.step34} alt="step3.4" className={classes.snapshot}/><br/>
                    <b>C. Click on Proceed to Check Out</b>
                    <br/>
                    It should lead you to the IEEE Checkout page.<br/>
                    The page will show "My Cart" details.<br/> 
                    On the right side you will find a box with a heading "Questions" under which you will find the Cart Number. Make a note of the Cart Number and the Total Order Amount.<br/>
                    <img src={images.membership.step36} alt="step3.6" className={classes.snapshot}/>
                    <img src={images.membership.step37} alt="step3.7" className={classes.snapshot}/><br/>
                    Agree to the Terms and Conditions.<br/>
    
                    <b>DO NOT SELECT ANY PAYMENT METHODS.<br/>
                    DO NOT MAKE THE PAYMENT BY YOURSELVES.<br/>
                    (PLEASE ENSURE ONLY THE REQUIRED ITEMS ARE IN CART)</b>
                </Container>
            );
        case 3:
            return (
                <Container>
                    On the right top of the page, you will find a drop-down list under your Profile Name.<br/>
                    <img src={images.membership.step41} alt="step4.1" className={classes.snapshot}/>
                    <img src={images.membership.step42} alt="step4.2" className={classes.snapshot}/><br/>
                    Select My Account in the directed page select <b>Manage Personal Profile</b> tab<br/>
                    <img src={images.membership.step43} alt="step4.3" className={classes.snapshot}/><br/>
                    Make a note of the following : <b>1. User Name (Full name) 2. Member/Customer Number.</b>
                </Container>
            );
        case 4:
            return (
                <Container>
                    After this step payment can be done either online or by cash.<br/>
                    For online payment:<br/> 
                    <b>UPI : prajwaltelkar98@okaxis </b>
                    Or
                    <b> GPAY TO : 9972985281</b><br/>
                    Put Your name - IEEE in description during payment.<br/>
                    <img src={images.membership.step51} alt="step5.1" className={classes.snapshot} style={{width:"50%"}}/>
                    <br/>
                    After successful payment send a screenshot of the payment on WhatsApp to:<br/>
                    <b>PRAJWAL: 9972985281.</b><br/>
                    For cash payment contact <b>PRAJWAL : 9972985281.</b>
                    <img src={images.membership.step52} alt="step5.2" className={classes.snapshot}/>
                </Container>
            );
        case 5:
          return (
                <Container>
                    After you have completed the above 6 steps, fill out this Google Form:<br/>
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLScW15eooiK6_UlnZvQ34EdSVTyWfcK5h7RSTQf32mRDp9ozDw/viewform?embedded=true" 
                        width="100%" 
                        height="640"
                        title="Registration form" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                        margin="auto">
                            Loading…
                    </iframe>
                    <br/>
                    <a className={classes.link} href="https://forms.gle/15tyVvxLZrkAr4CGA">You may also click on this to open the form</a>
                </Container>
            );
        case 6:
            return (
                <Container>
                    <Typography className={classes.instructions}>Congratulations! You are now an IEEE RVCE member!</Typography>
                    <Button onClick={handleReset}>Go back to the start</Button>
                </Container>
            )
        default:
          return 'Unknown stepIndex';
      }
    }

    return(
        <div className={classes.root}>
        {
            !start && (
                <>
                    <Container maxWidth='md' style={{ display: "grid"}}>
                        <Paper className={classes.paper}>
                            <Typography variant='h3'>
                                Why Join IEEE?
                            </Typography>
                            <br/>
                            <Typography variant='body1'>
                                <ol>
                                    <li><b>Staying Technically Relevant:</b>Be aware of the new and changing technologies by getting access to the recent journals, publications and conferences</li>
                                    <li><b>Career Resources and Recognition:</b>Leadership is a skill that must be crafted over time. Keep your career moving in the right direction with IEEE career benefits and resources.</li>
                                    <li><b>Professional Networking:</b>With other IEEE members who share similar interests, you can build a network revolving around your profession, industry or projects.</li>
                                    <li><b>IEEE Chapters:</b>Engage with others through informative technical meetings</li>
                                    <li><b>Member discounts:</b>IEEE Member Discounts offer substantial cost savings on a variety of products and services as a benefit of IEEE membership. These include IEEE books and eBooks, journals and articles, conferences and proceedings, standards, society memberships etc.. </li>
                                    <li><b>Global benefits finder: </b>To uncover IEEE member benefits that are most relevant to you, you may use the Global Benefits finder which will render a list of key IEEE member benefits that can help you accelerate your career plans and help you grow as a technology professional.</li>
                                </ol>
                            </Typography>
                        </Paper>
                        <br/>
                        <Paper className={classes.paper}>
                            <Typography variant='h3'>
                                What does the SB have to offer?
                            </Typography>
                            <br/>
                            <Typography variant='body1'>
                                <ul>
                                    <li>Opportunities to network on a local level</li>
                                    <li>Receive support for hosting professional awareness programs</li>
                                    <li>Obtain funding for events, projects, and activities</li>
                                    <li>Develop projects and obtain sponsorship based on your IEEE affiliation</li>
                                    <li>Connect with other like minded student groups to advance the IEEE mission</li>
                                </ul>
                            </Typography>
                        </Paper>
                        <br/>
                        <div>
                            <Button size='large' className={classes.button} onClick={() => {setStart(true);window.location.href=window.location.href+'/1'}}>Become a member now!! </Button>
                        </div>
                    </Container>
                </>
            )
        }
        {
            start && 
                (
                    <div>
                        <Typography className={classes.heading} variant='h4'><b>{steps[activeStep]}</b></Typography>
                        <Typography className={classes.content}>{getStepContent(activeStep)}</Typography>
                        <MobileStepper
                            steps={7}
                            position="static"
                            variant="text"
                            className={classes.stepper}
                            activeStep={activeStep}
                            nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === 6}>
                                Next
                            </Button>
                            }
                            backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                Back
                            </Button>
                            }
                        />
                    </div>
                )
            }
        </div>
    )
}