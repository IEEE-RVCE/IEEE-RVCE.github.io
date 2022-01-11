import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  // MobileStepper,
  Paper,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { images } from "../links";
import { costs } from "../data/membershipCosts";
// import { useParams } from "react-router-dom";
import MembershipBox from "../components/MembershipBox";
// import { HashLink } from "react-router-hash-link";
import GiveMeABreak from "../components/GiveMeABreak";
import SpacyDivider from "../components/SpacyDivider";
import { isMobileOnly } from "react-device-detect";
import CostFragment from "../components/CostFragment";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root,
    //   ...theme.page,
  },
  button: {
    ...theme.button,
    display: "flex",
    // float: 'right',
    flexDirection: "row",
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
    width: isMobileOnly ? "100%" : "45%",
  },
  heading: {
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
  },
  paper: {
    ...theme.paper,
    padding: theme.spacing(4),
  },
  paper1: {
    ...theme.paper,
    padding: theme.spacing(1),
  },
  stepper: {
    backgroundColor: "inherit",
  },
  steps: {
    ...theme.backgroundBlend,
  },
  bigbutton1: {
    background: `linear-gradient( -45deg, #fe8c00 30%, #f83600 90%)`,
    fontWeight: "bold",
  },
  bigbutton2: {
    background: `linear-gradient( 45deg, #fe8c00 30%, #f83600 90%)`,
    fontWeight: "bold",
  },
  image: {
    ...theme.img,
    width: "27%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  typo: {
    ...theme.typography,
    variant: "body1",
    fontSize: "1.2rem",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  history: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function MembershipPage() {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  // let { step } = useParams();
  // useEffect(() => {
  //   if (step !== undefined) {
  //     setStart(true);
  //     setActiveStep(Number(step) - 1);
  //   }
  // }, [step]);
  // const steps = [
  //   "Step 1: Create an account on IEEE website ",
  //   "Step 2: Applying for student membership",
  //   "Step 3: Filling out Personal details",
  //   "Step 4: Member Profile details",
  //   "Step 5: Payment",
  //   "Step 6: Filling the Google form",
  //   "Done!",
  // ];

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   window.scrollTo(0, 0);
  //   window.location.href =
  //     window.location.origin + "/#/membership/" + (activeStep + 2);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   window.scrollTo(0, 0);
  //   window.location.href =
  //     window.location.origin + "/#/membership/" + activeStep;
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setStart(false);
  //   window.location.href = window.location.origin + "/#/membership/";
  //   window.location.reload();
  // };

  // const getStepContent = (stepIndex) => {
  //   switch (stepIndex) {
  //       case 0:
  //           return (
  //               <Container align='center'>Provide all required information like Name, Email ID and password to create an IEEE account:&nbsp;
  //                   <a className={classes.link} target="_blank" rel="noreferrer" href="https://www.ieee.org/profile/public/createwebaccount/showCreateAccount.html?url=https%3A%2F%2Fwww.ieee.org%2F ">Register here</a>
  //                   <GiveMeABreak />(If you're ready registered, you can skip this step)
  //                   <GiveMeABreak num={2}/>
  //                   <img src={images.membership.step111} alt="step1.1" className={classes.snapshot} style={{marginRight: "2%"}} />
  //                   <img src={images.membership.step122} alt="step1.2" className={classes.snapshot} />
  //                   <GiveMeABreak num={2}/>
  //               PS: You merely have an IEEE account and are not an IEEE Member yet.
  //               </Container>
  //           );
  //       case 1:
  //           return (
  //               <Container align='center'>
  //                   Click <a className={classes.link} href="http://www.ieee.org/go/join_student" target="_blank" rel="noreferrer">here</a> and sign in (if asked) with the credentials of the account you created in Step 1.
  //                   <br /><GiveMeABreak/>
  //                   <img src={images.membership.step21} alt="step2.1" className={classes.snapshot} /><br />
  //               </Container>
  //           );
  //       case 2:
  //           return (
  //               <Container >
  //                   <b style={{paddingLeft:!(isMobileOnly)?"14%":""}}>A. Contact and Profile Information: </b>
  //               Fill all the required information accurately.<br /> <GiveMeABreak/>
  //                   <Container align='center'>
  //                       <img src={images.membership.step31} alt="step3.1" className={classes.snapshot} />
  //                   </Container>

  //                   <br /><GiveMeABreak/>
  //                   <b style={{paddingLeft:!(isMobileOnly)?"14%":""}}>B. Professional and educational information :</b><br/>
  //               {/* Select - I am a student option.<br />
  //               University / college: Rashtreeya Vidyalaya College of Engineering<br />
  //               Select Undergraduate<br />
  //               Under Degree, choose Bachelor of Engineering<br />
  //               Under Academic Program select your Respective Branch / Department.<br />
  //               Scroll down to fill out the other required details.<br /><GiveMeABreak/> */}
  //               <Container align='left' style={{paddingLeft:!(isMobileOnly)?"20%":""}}><GiveMeABreak/>
  //               Select Checkbox:			I am a student option.<br/>
  //               University/college:	 		Rashtreeya Vidyalaya College of Engineering<br/>
  //               Select Checkbox:	 		Undergraduate<br/>
  //               Degree (dropdown):			Bachelor of Engineering<br/>
  //               Academic Program (dropdown): 	Select your Respective Branch / Department.<br/><br/>
  //               </Container>
  //               <Container align='center'>
  //                   <img src={images.membership.step33} alt="step3.2" className={classes.snapshot} /><br /><GiveMeABreak/>
  //               </Container>
  //               <Container align='center'>
  //                   For the question 'were you referred by another IEEE member'<br />
  //                   Fill out the following details <br />
  //                   Referring member name: Risha Dassi<br />
  //                   Referring IEEE member number: 96195458<br /><GiveMeABreak/>
  //                   <img src={images.membership.step34} alt="step3.4" className={classes.snapshot} /><br /><GiveMeABreak/>
  //               </Container>
  //                   <b style={{paddingLeft:!(isMobileOnly)?"14%":""}}>C. Click on Proceed to Check Out</b><GiveMeABreak/>
  //                   <br />
  //                   <Container align='center'>
  //                   <div style={{paddingRight: !(isMobileOnly)?"10%":"", paddingLeft:!(isMobileOnly)?"10%":""}}>
  //                   It should lead you to the IEEE Checkout page and it will show "My Cart" details.<br />
  //                   On the right side you will find a box with a heading "Questions" under which you will find the Cart Number. Make a note of the Cart Number and the Total Order Amount.<br /><GiveMeABreak/>
  //                       </div>

  //                       <img src={images.membership.step36} alt="step3.6" className={classes.snapshot} style={{marginRight: "2%"}}/>
  //                       <img src={images.membership.step37} alt="step3.7" className={classes.snapshot} /><br /><GiveMeABreak/>
  //                   Agree to the Terms and Conditions.<br />

  //                       <b>DO NOT SELECT ANY PAYMENT METHODS.<br />
  //                   DO NOT MAKE THE PAYMENT BY YOURSELVES.<br />
  //                   (PLEASE ENSURE ONLY THE REQUIRED ITEMS ARE IN CART)</b>
  //                   </Container>

  //               </Container>
  //           );
  //       case 3:
  //           return (
  //               <Container align='center'>
  //                   <div style={{paddingRight: "10%", paddingLeft: "10%"}}>
  //                   On the top-right corner of the page, you will find a drop-down list under your Profile Name. Select My Account and in the directed page select Manage Personal Profile tab as shown in the images below.<br/>
  //                   Check the document <a className={classes.link} href="http://bit.ly/IEEE_Promotional_Codes" target="_blank" rel="noreferrer">here</a> for promotional codes that are applicable for your membership and do use those to get discounts wherever applicable.<br/>
  //                       <GiveMeABreak/>Make a note of the following details: <br/>
  //                        User Name (Full name) <br/>
  //                        Member/Customer Number.
  //                       <br /><GiveMeABreak/>
  //                   </div>

  //                   <img src={images.membership.step41} alt="step4.1" className={classes.snapshot}  style={{marginRight: "2%"}}  />
  //                   <img src={images.membership.step42} alt="step4.2" className={classes.snapshot} /><br /><GiveMeABreak/>
  //                   <img src={images.membership.step43} alt="step4.3" className={classes.snapshot} /><br /><GiveMeABreak/>
  //               </Container>
  //           );
  //       case 4:
  //           return (
  //               <Container align='center'>
  //                   After this step payment can be done either online or by cash.<br />
  //               For online payment:<br />
  //                   <b>UPI : bapatchirag@oksbi </b>
  //               Or
  //                   <b> GPAY TO : +91 80880 65605</b><br />
  //                Format of Message accompanying payment: <br/>
  //                   Name- IEEE + List of societies (for which you have taken membership)<br/><br/>
  //               For cash payment contact <b>Chirag Bapat : +91 80880 65605.</b><GiveMeABreak/><GiveMeABreak/>
  //               After successful payment send a screenshot of the payment on WhatsApp to:<br />
  //                   <b>Chirag Bapat: +91 80880 65605</b><br /><GiveMeABreak/>
  //                   <img src={images.membership.step511} alt="step5.1" className={classes.snapshot} style={{ width: !(isMobileOnly)?"30%":"", marginRight: !(isMobileOnly)?"5%":"" }} />
  //                   <img src={images.membership.step522} alt="step5.2" className={classes.snapshot} style={{ width: !(isMobileOnly)?"30%":"" }}/>
  //               </Container>
  //           );
  //       case 5:
  //   return (
  //       <Container align='center'>
  //           After you have completed the above 6 steps, fill out this Google Form:<br />
  //           <iframe
  //               src="https://docs.google.com/forms/d/e/1FAIpQLScW15eooiK6_UlnZvQ34EdSVTyWfcK5h7RSTQf32mRDp9ozDw/viewform?embedded=true"
  //               width="100%"
  //               height="640"
  //               title="Registration form"
  //               frameborder="0"
  //               marginheight="0"
  //               marginwidth="0"
  //               margin="auto">
  //               Loading…
  //       </iframe>
  //           <br />
  //           <a className={classes.link} href="https://forms.gle/15tyVvxLZrkAr4CGA" target="_blank" rel="noreferrer">You may also click on this to open the form</a>
  //       </Container>
  //   );
  //       case 6:
  //           return (
  //               <Container align='center'>
  //                   <Typography className={classes.instructions}>Congratulations! You are now an IEEE RVCE member!</Typography>
  //                   <img src="/assets/images/history/3.png" alt="Congratulations!"/>
  //                   <Button
  //                       style={{ margin: '1rem', width: "50%", color:"black"}}
  //                       className={`${classes.bigbutton} ${classes.bigbutton2} ${classes.button}`}
  //                       onClick={handleReset}
  //                   >
  //                       Go back to Membership Page
  //                   </Button>
  //               </Container>
  //           )
  //       default:
  //           return <Container align='center'><Typography className={classes.instructions}>Unknown stepIndex</Typography></Container>;
  //   }
  //   return (
  //     <Container align="center">
  //       Fill out this Google Form to complete your membership:
  //       <br />
  //       <iframe
  //         src="https://docs.google.com/forms/d/e/1FAIpQLScW15eooiK6_UlnZvQ34EdSVTyWfcK5h7RSTQf32mRDp9ozDw/viewform?embedded=true"
  //         width="100%"
  //         height="640"
  //         title="Registration form"
  //         frameborder="0"
  //         marginheight="0"
  //         marginwidth="0"
  //         margin="auto"
  //       >
  //         Loading…
  //       </iframe>
  //       <br />
  //       <a
  //         className={classes.link}
  //         href="https://forms.gle/15tyVvxLZrkAr4CGA"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         You may also click on this to open the form
  //       </a>
  //     </Container>
  //   );
  // };

  return (
    <div className={classes.root}>
      <MembershipBox />
      {/* {start && ( */}
      <>
        <Container maxWidth="lg" style={{ display: "grid" }}>
          <div id="whyjoinieee"></div>
          <br />
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "transparent" }}
          >
            <Typography variant="h3">Why Join IEEE?</Typography>
            <GiveMeABreak num={2} />

            <Grid container spacing={4} justify="center">
              <Grid item xs={12} md={4} align="center">
                <div>
                  <img
                    src={images.membership.benefit1}
                    alt="benefit"
                    style={{ width: "40%", height: "40%" }}
                  />
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>Staying Technically Relevant: </b>Be aware of the new and
                    changing technologies by getting access to the recent
                    journals, publications and conferences
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} align="center">
                <div>
                  <img
                    src={images.membership.benefit2}
                    alt="benefit"
                    style={{ width: "40%", height: "40%" }}
                  />
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>Career Resources and Recognition: </b>Leadership is a
                    skill that must be crafted over time. Keep your career
                    moving in the right direction with IEEE career benefits and
                    resources.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} align="center">
                <div style={{ justifyContent: "center" }}>
                  <img
                    src={images.membership.benefit3}
                    alt="benefit"
                    style={{ width: "40%", height: "40%" }}
                  />
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>Professional Networking: </b>With other IEEE members who
                    share similar interests, you can build a network revolving
                    around your profession, industry or projects.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} align="center">
                <div>
                  <img
                    src={images.membership.benefit4}
                    alt="benefit"
                    style={{ width: "40%", height: "40%" }}
                  />
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>IEEE Chapters: </b> Engage with others through
                    informative technical meetings
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} align="center">
                <div>
                  <img
                    src={images.membership.benefit5}
                    alt="benefit"
                    style={{ width: "40%", height: "40%" }}
                  />
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>Member discounts:</b> IEEE Member Discounts offer
                    substantial cost savings on a variety of products and
                    services as a benefit of IEEE membership. These include IEEE
                    books and eBooks, journals and articles, conferences and
                    proceedings, standards, society memberships etc..{" "}
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} align="center">
                <div>
                  <img
                    src={images.membership.benefit6}
                    alt="benefit"
                    style={{ width: "40%", height: "40%" }}
                  />
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>Global benefits finder: </b> To uncover IEEE member
                    benefits that are most relevant to you, you may use the
                    Global Benefits finder which will render a list of key IEEE
                    member benefits that can help you accelerate your career
                    plans and help you grow as a technology professional.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <SpacyDivider color="#3be52e" />
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "transparent" }}
          >
            <Typography variant="h3">
              What does the SB have to offer?
            </Typography>
            <br />
            <div className={classes.history}>
              <img
                src={images.membership.whatSBOffers}
                className={classes.image}
                alt="image2"
              />
              <Typography variant="body1" className={classes.typo}>
                <ul>
                  <li>Opportunities to network on a local level</li>
                  <li>
                    Receive support for hosting professional awareness programs
                  </li>
                  <li>Obtain funding for events, projects, and activities</li>
                  <li>
                    Develop projects and obtain sponsorship based on your IEEE
                    affiliation
                  </li>
                  <li>
                    Connect with other like minded student groups to advance the
                    IEEE mission
                  </li>
                </ul>
              </Typography>
            </div>
          </Paper>
          <br />
          <SpacyDivider color="#3be52e" />
          <Typography variant="h3">
            What do the membership costs look like?
          </Typography>
          <Container maxWidth="md">
            <TableContainer component={Paper} className={classes.paper} md={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell>Discounts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {costs.map((e) => (
                    <TableRow>
                      <TableCell>{e.name}</TableCell>
                      {/* This passes in the object as props - be careful */}
                      <CostFragment {...e} />
                      <TableCell>{e.notes ?? ""}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          <Paper
            className={classes.paper1}
            id="beamember"
            align="center"
            style={{ backgroundColor: "transparent" }}
          >
            {/* <HashLink smooth to="#steps" style={{ textDecoration: "none" }}>
                <Button
                  style={{ margin: "1rem", width: "50%", color: "black" }}
                  className={`${classes.bigbutton} ${classes.bigbutton2} ${classes.button}`}
                  onClick={() => {
                    setStart(true);
                    window.location.href = window.location.href + "/1";
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Become A Member
                </Button>
              </HashLink> */}
            {/* <Button size='large' className={classes.button} style={{ margin: "auto", color: "white", backgroundColor: "green" }} onClick={() => { setStart(true); window.location.href = window.location.href + '/1' }}>Become a member now!! </Button> */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1UBQ4YyoYTbdzuCwRWRGIHX0BMaLtB9tuL1YiMn_pekZ3YA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                style={{
                  margin: "1rem",
                  width: "50%",
                  color: "black",
                  textDecoration: "none",
                  underline: "none",
                }}
                className={`${classes.bigbutton} ${classes.bigbutton2} ${classes.button}`}
                //   onClick={() => {
                //     setStart(true);
                //     window.location.href = window.location.href + "/1";
                //   }}
                variant="contained"
                color="primary"
                size="large"
              >
                Become A Member
              </Button>
            </a>
            {/* <Button size='large' className={classes.button} style={{ margin: "auto", color: "white", backgroundColor: "green" }} onClick={() => { setStart(true); window.location.href = window.location.href + '/1' }}>Become a member now!! </Button> */}
          </Paper>
          <GiveMeABreak num={3} />
        </Container>
      </>
      {/* )} */}
      {/* {start && (
        <Container
          className={classes.steps}
          id="steps"
          style={{ marginTop: "60px" }}
        >
          <Typography className={classes.heading} variant="h4">
            <b>{steps[activeStep]}</b>
          </Typography>
          <Typography className={classes.content}>
            {getStepContent(activeStep)}
          </Typography>
          <Container maxWidth="lg">
            <MobileStepper
              steps={7}
              position="static"
              variant="text"
              className={classes.stepper}
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 6}
                >
                  Next
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              }
            />
          </Container>
        </Container>
      )} */}
    </div>
  );
}
