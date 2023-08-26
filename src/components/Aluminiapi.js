import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import Avatar from './Avatar';
import GiveMeABreak from './GiveMeABreak';
import SpacyDivider from './SpacyDivider';

const useStyles = makeStyles(theme => ({
  paper: {
    ...theme.paper,
    padding: theme.spacing(4),
    backgroundColor: '#00000000',
  },
}));

export default function Aluminiapi(props) {
  const { members } = props;
  const classes = useStyles();


//    const[members,setMembers] = useState({
//     "2020": [
//         {
//             "name": "Risha Dassi",
//             "position": "Chair",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2020/compsoc/risha.jpg"
//         },
//         {
//             "name": "Nischal J",
//             "position": "Vice Chair",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2020/compsoc/nischal.jpg"
//         },
//         {
//             "name": "Chirag Bapat",
//             "position": "Treasurer",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2020/compsoc/chirag.jpg"
//         },
//         {
//             "name": "Nikitha Srikanth",
//             "position": "Secretary",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2020/compsoc/niks.jpg"
//         }
//     ],
//     "2021": [
//         {
//             "name": "Dr. Ashok Kumar AR",
//             "position": "Faculty Advisor",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2021/compsoc/ashok_sir.jpg"
//         },
//         {
//             "name": "Akshara Udupa",
//             "position": "Chair",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2021/compsoc/akshara.jpg"
//         },
//         {
//             "name": "Vishal M",
//             "position": "Vice Chair",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2021/compsoc/vishal.jpg"
//         },
//         {
//             "name": "Namya LG",
//             "position": "Treasurer",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2021/compsoc/namya.jpg"
//         },
//         {
//             "name": "Shashank Dhavalla",
//             "position": "Secretary",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2021/compsoc/shashank.jpg"
//         }
//     ],
//     "2022": [
//         {
//             "name": "Dr. Ashok Kumar AR",
//             "position": "Faculty Advisor",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2022/compsoc/ashok_sir.jpg"
//         },
//         {
//             "name": "Shubhaprada K P",
//             "position": "Chair",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2022/compsoc/ShubhaPrada.jpeg"
//         },
//         {
//             "name": "Prajwal P",
//             "position": "Vice Chair",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2022/compsoc/prajwal.PNG"
//         },
//         {
//             "name": "Sonia Singh B",
//             "position": "Treasurer",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2022/compsoc/Sonia_Singh.jpeg"
//         },
//         {
//             "name": "Malavika Hariprasad ",
//             "position": "Secretary",
//             "image": "https://ieee-rvce.org/assets/images/alumni/2022/compsoc/Malavika_HariPrasad.jpg"
//         }
//        ]
//     }
// );
  // useEffect(() => {
  //   axios.get(hostname + `/api/execom/alumini/1`).then(response => {
  //       setMember(response.data.execom);
  //       console.log(member);
  //     });
  
  // }, []);

  let color = props.color ?? '#222222';
  return (
    <>
      {
        // Check if members is not empty
        members !== undefined && Object.keys(members).length !== 0 && (
          <>
            <SpacyDivider color={color} />
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h4" align="center">
                Alumni
              </Typography>
              <GiveMeABreak num={2} />
              {Object.keys(members).map((batch,index) => (
                <Accordion
                  key={index}
                  style={{
                    borderLeft: '1px solid ' + color,
                    borderBottom: '2px solid ' + color,
                    backgroundColor: '#00000000',
                    boxShadow: '0px 0px 0px 0px #00000000',
                  }}
                >
                  <AccordionSummary>
                    <Typography>{batch}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2} justifyContent="center">
                      {members[batch].map(member => (
                        <Grid item xs={12} md={4} key={member.id}>
                          <Avatar name={member.name} position={member.position} src={member.image} />
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
            <br />
          </>
        )
      }
    </>
  );
}
