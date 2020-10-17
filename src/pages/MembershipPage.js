import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
      minHeight: '500px',
      marginLeft: '10%'
    },
    backButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(3),
    },
    instructions: {
        marginLeft: theme.spacing(3),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  function getSteps() {
    return ['Create an account on IEEE website ', 'Applying for student membership', 'Filling out Personal details','Member Profile details','Payment','Filling the Google form'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (<div>Provide all required information like Name, Email ID and password to create an IEEE account:
                <br/>
                <a href="https://www.ieee.org/profile/public/createwebaccount/showCreateAccount.html?url=https%3A%2F%2Fwww.ieee.org%2F ">https://www.ieee.org/profile/public/createwebaccount/showCreateAccount.html?url=https%3A%2F%2Fwww.ieee.org%2F </a>
                <br/>
                <img src="/assets/images/Membership_1.1.png" style={{width:"100%",marginRight:"2%",height:"240px",margin:"1%"}}/>
                <img src="/assets/images/Membership_1.2.png" style={{width:"40%",height:"240px",margin:"1%"}}/>
                <br/>
                PS: You merely have an IEEE account and are not an IEEE Member yet.
                </div>);
      case 1:
        return (<div>Click <a href="http://www.ieee.org/go/join_student">here</a> and sign in (if asked) with the credentials of the account you created in Step 1.
                <br/>
                <img src="/assets/images/Membership_2.1.png" style={{height:"240px",margin:"1%"}}/><br/>
                </div>);
      case 2:
        return (<div>
                <b>A. Contact and Profile Information :</b>
                Fill all the required information accurately.<br/>
                <img src="/assets/images/Membership_3.1.png" style={{width:"40%",height:"240px",margin:"1%"}}/>
                <br/>
                <b>B. Professional and educational information :</b>
                Select - I am a student option.<br/>
                University / college: Rashtreeya Vidyalaya College of Engineering<br/>
                Select Undergraduate<br/>
                Under Degree, choose Bachelor of Engineering<br/>
                Under Academic Program select your Respective Branch / Department.<br/>
                Scroll down to fill out the other required details.<br/>
                <img src="/assets/images/Membership_3.3.png" style={{width:"40%",height:"240px",margin:"1%"}}/><br/>
                For the question 'were you referred by another IEEE member'<br/>
                Fill out the following details <br/>
                Referring member name: RUTHVIK SJ<br/>
                Referring IEEE member number: 94513775<br/>
                <img src="/assets/images/Membership_3.4.png" style={{width:"40%",height:"240px",margin:"1%"}}/><br/>
                <b>C. Click on Proceed to Check Out</b>
                <br/>
                It should lead you to the IEEE Checkout page.<br/>
                The page will show "My Cart" details.<br/> 
                On the right side you will find a box with a heading "Questions" under which you will find the Cart Number. Make a note of the Cart Number and the Total Order Amount.<br/>
                <img src="/assets/images/Membership_3.6.png" style={{width:"40%",height:"240px",margin:"1%"}}/>
                <img src="/assets/images/Membership_3.7.png" style={{width:"40%",height:"240px",margin:"1%"}}/><br/>
                Agree to the Terms and Conditions.<br/>

                <b>DO NOT SELECT ANY PAYMENT METHODS.<br/>
                DO NOT MAKE THE PAYMENT BY YOURSELVES.<br/>
                (PLEASE ENSURE ONLY THE REQUIRED ITEMS ARE IN CART)</b>
        </div>);
      case 3:
          return (<div>
                On the right top of the page, you will find a drop-down list under your Profile Name.<br/>
                <img src="/assets/images/Membership_4.1.png" style={{width:"40%",height:"240px",margin:"1%"}}/>
                <img src="/assets/images/Membership_4.2.png" style={{width:"40%",height:"240px",margin:"1%"}}/><br/>
                Select My Account in the directed page select <b>Manage Personal Profile</b> tab<br/>
                <img src="/assets/images/Membership_4.3.png" style={{width:"40%",height:"240px",margin:"1%"}}/><br/>
                Make a note of the following : <b>1. User Name (Full name) 2. Member/Customer Number.</b>
          </div>);
      case 4:
          return (<div>
              After this step payment can be done either online or by cash.<br/>
                For online payment:<br/> 
                <b>UPI : prajwaltelkar98@okaxis </b>
                Or
                <b> GPAY TO : 9972985281</b><br/>
                Put Your name - IEEE in description during payment.<br/>
                After successful payment send a screenshot of the payment on WhatsApp to:<br/>
                <b>PRAJWAL: 9972985281.</b><br/>
                For cash payment contact <b>PRAJWAL : 9972985281.</b>
              </div>);
      case 5:
        return (<div>
              After you have completed the above 6 steps, fill out this Google Form:<br/>
              <img src="/assets/images/Membership_6.1.png" style={{height:"240px",margin:"1%"}}/><br/>
            <a href="https://forms.gle/15tyVvxLZrkAr4CGA">https://forms.gle/15tyVvxLZrkAr4CGA</a>
        </div>);
      default:
        return 'Unknown stepIndex';
    }
  }
  
  
export default function MembershipPage(){

    const classes = useStyles();
    const [start,setStart]=React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return(
        <div className={classes.root} style={{marginTop:"5%"}}>
          {!start && (<Button onClick={() => setStart(true)}>Start</Button>)}
      {start && (<div>
        {/* <Stepper activeStep={activeStep} alternativeLabel orientation='vertical'>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>            
              <Typography >{getStepContent(activeStep)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper> */}
      <Typography >{getStepContent(activeStep)}</Typography>
      <MobileStepper
        steps={6}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
            Back
          </Button>
        }
      />
      <div>
        {activeStep === steps.length ? (
          <div style={{display:"grid",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
            <Typography className={classes.instructions}>Congratulations! You are now an IEEE RVCE member!</Typography>
            <Button onClick={handleReset}>Go Back</Button>
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions} style={{display:"grid",alignItems:"center",justifyContent:"center"}}>{getStepContent(activeStep)}</Typography> */}
            <div style={{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      </div>
      )}
    </div>
    )
}