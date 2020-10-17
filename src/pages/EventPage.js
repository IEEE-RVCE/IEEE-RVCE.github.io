import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Button, CardHeader, Grid, TextField, Menu, MenuItem, Select, InputLabel, Backdrop, CircularProgress, FormControl } from '@material-ui/core';
import EventCard from '../components/EventCard';
import { societies } from '../links';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(2),
        minHeight: '500px',
        marginLeft: '5%',
        padding: "1%"
    },
    instructions: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    backdrop: {
        zIndex: 100,
        color: '#fff',
    },
}));

const workshops = [
    {
        name: "WORKSHOP ON HPCC SYSTEMS",
        society: "Computer Society",
        description: "By the end of this faculty development workshop the audience will \n 1.	Understand the distributed architectures for handling big data processing. \n2.	Install HPCC distributed systems platform and learn ECL programming language constructs \n 3.	Perform data analysis , and carryout machine learning tasks on publicly available datasets using HPCC Systems platform.",
        date: "27 JULY, 2020 TO 31 JULY,2020",
        time: "5PM-7PM",
        fee: "1180 Rs.",
        speaker: "Dr.Shobha G",
        aboutSpeaker: "Dr. G. Shobha (SG) is a Professor in Computer Science and Engineering Department at R V College of Engineering, Bengaluru, India.",
        keywords: "Machine learning, Artificial Intelligence",
        reglink: "cant register",
        smallposter: "https://www.uktech.news/wp-content/uploads/2020/02/shutterstock_1384554629-898x505.jpg",
        largeposter: "/assets/images/workshop.png",
    },
    {
        name: "WORKSHOP ON ComSoc SYSTEMS",
        society: "Com Soc",
        description: "By the end of this faculty development workshop the audience will \n 1.	Understand the distributed architectures for handling big data processing. \n2.	Install HPCC distributed systems platform and learn ECL programming language constructs \n 3.	Perform data analysis , and carryout machine learning tasks on publicly available datasets using HPCC Systems platform.",
        date: "27 JULY, 2020 TO 31 JULY,2020",
        time: "5PM-7PM",
        fee: "1180 Rs.",
        speaker: "Dr.Shobha G",
        aboutSpeaker: "Dr. G. Shobha (SG) is a Professor in Computer Science and Engineering Department at R V College of Engineering, Bengaluru, India. Her area of interest is on Artificial Intelligence , Machine Learning, Image Processing and Natural Language Processing. She is also a guest faculty for distance learning in Bits Pilani. She has collaborated with many industries in executing projects like   AI driven User Interface, Hand written sketch  to code using Machine Learning,  NLP to SQL, Virtual Reality Platform with Recommender System for a Super market, Object Tracking and Recognition, sentimental Analysis etc.",
        keywords: "ML, HPCC, Distributed Platform",
        reglink: "dont register",
        smallposter: "https://www.uktech.news/wp-content/uploads/2020/02/shutterstock_1384554629-898x505.jpg",
        largeposter: "/assets/images/workshop.png",
    },
    {
        name: "WORKSHOP ON APS SYSTEMS",
        society: "APS",
        description: "By the end of this faculty development workshop the audience will \n 1.	Understand the distributed architectures for handling big data processing. \n2.	Install HPCC distributed systems platform and learn ECL programming language constructs \n 3.	Perform data analysis , and carryout machine learning tasks on publicly available datasets using HPCC Systems platform.",
        date: "27 JULY, 2020 TO 31 JULY,2020",
        time: "5PM-7PM",
        fee: "1180 Rs.",
        speaker: "Dr.Shobha G",
        aboutSpeaker: "Dr. G. Shobha (SG) is a Professor in Computer Science and Engineering Department at R V College of Engineering, Bengaluru, India. Her area of interest is on Artificial Intelligence , Machine Learning, Image Processing and Natural Language Processing. She is also a guest faculty for distance learning in Bits Pilani. She has collaborated with many industries in executing projects like   AI driven User Interface, Hand written sketch  to code using Machine Learning,  NLP to SQL, Virtual Reality Platform with Recommender System for a Super market, Object Tracking and Recognition, sentimental Analysis etc.",
        keywords: "ML, Antennas",
        reglink: "dont register",
        smallposter: "https://www.uktech.news/wp-content/uploads/2020/02/shutterstock_1384554629-898x505.jpg",
        largeposter: "/assets/images/workshop.png",
    },
    {
        name: "WORKSHOP ON PES SYSTEMS",
        society: "PES",
        description: "By the end of this faculty development workshop the audience will \n 1.	Understand the distributed architectures for handling big data processing. \n2.	Install HPCC distributed systems platform and learn ECL programming language constructs \n 3.	Perform data analysis , and carryout machine learning tasks on publicly available datasets using HPCC Systems platform.",
        date: "27 JULY, 2020 TO 31 JULY,2020",
        time: "5PM-7PM",
        fee: "1180 Rs.",
        speaker: "Dr.Shobha G",
        aboutSpeaker: "Dr. G. Shobha (SG) is a Professor in Computer Science and Engineering Department at R V College of Engineering, Bengaluru, India. Her area of interest is on Artificial Intelligence , Machine Learning, Image Processing and Natural Language Processing. She is also a guest faculty for distance learning in Bits Pilani. She has collaborated with many industries in executing projects like   AI driven User Interface, Hand written sketch  to code using Machine Learning,  NLP to SQL, Virtual Reality Platform with Recommender System for a Super market, Object Tracking and Recognition, sentimental Analysis etc.",
        keywords: "ML systems, Nuclear Power, Solar Energy",
        reglink: "dont register",
        smallposter: "https://www.uktech.news/wp-content/uploads/2020/02/shutterstock_1384554629-898x505.jpg",
        largeposter: "/assets/images/workshop.png",
    },
    {
        name: "WORKSHOP ON SPS SYSTEMS",
        society: "SPS",
        description: "By the end of this faculty development workshop the audience will \n 1.	Understand the distributed architectures for handling big data processing. \n2.	Install HPCC distributed systems platform and learn ECL programming language constructs \n 3.	Perform data analysis , and carryout machine learning tasks on publicly available datasets using HPCC Systems platform.",
        date: "27 JULY, 2020 TO 31 JULY,2020",
        time: "5PM-7PM",
        fee: "1180 Rs.",
        speaker: "Dr.Shobha G",
        aboutSpeaker: "Dr. G. Shobha (SG) is a Professor in Computer Science and Engineering Department at R V College of Engineering, Bengaluru, India. Her area of interest is on Artificial Intelligence , Machine Learning, Image Processing and Natural Language Processing. She is also a guest faculty for distance learning in Bits Pilani. She has collaborated with many industries in executing projects like   AI driven User Interface, Hand written sketch  to code using Machine Learning,  NLP to SQL, Virtual Reality Platform with Recommender System for a Super market, Object Tracking and Recognition, sentimental Analysis etc.",
        keywords: "ML systems, Signals",
        reglink: "dont register",
        smallposter: "https://www.uktech.news/wp-content/uploads/2020/02/shutterstock_1384554629-898x505.jpg",
        largeposter: "/assets/images/workshop.png",
    },
];

export default function EventPage(props) {
    const classes = useStyles();
    const prefersDarkMode = localStorage.getItem('darkMode') === 'true'
    const [backdrop, setBackdrop] = React.useState(false)

    //search text
    const [text, setText] = React.useState("");

    //event list
    const [list, setList] = React.useState(workshops);

    //Society names for dropdown filter
    let [society, setSociety] = React.useState('All');

    //Keyword search
    const handleSearch = (event) => {
        setText(event.target.value);
        var updatedList = workshops;
        updatedList = workshops.filter(function (item) {
            if (text === "")
                return workshops;
            return (
                item.keywords.toLowerCase().search(text.toLowerCase()) !== -1 ||
                item.name.toLowerCase().search(text.toLowerCase()) !== -1
            );
        });
        setList(updatedList);
    }

    //Society filter
    // const handleFilter = (event) => {
    //     setSociety(event.target.value);
    //     var updatedList = workshops;
    //     updatedList = workshops.filter(function (item) {
    //         if (society === "All")
    //             return workshops;
    //         return (
    //             item.society.search(society) !== -1
    //         );
    //     });
    //     setList(updatedList);
    //     setBackdrop(false);
    // }

    return (
        <div className={classes.root}>
            <div>
                <span style={{ fontSize: "2em" }}>
                    Events
            </span>
                <div style={{ float: "right", display: "flex" }}>
                    <FormControl style={{ marginTop: "-5px", marginRight: "5px", marginBottom: "5px" }}>
                        <TextField
                            value={text}
                            onChange={handleSearch}
                            label="Search"
                        />
                    </FormControl>
                    {/* <div>
                        {"  "}
                        <InputLabel style={{ fontSize: "0.8em" }}>Society</InputLabel>
                        <Select
                            value={society}
                            //onChange={handleFilter}
                            style={{width:"200px"}}
                        >
                            <MenuItem key={"All"} onClick={() => setSociety("All")} value={"All"}>All</MenuItem>
                            {societies.map(function (societyItem) {
                                return (<MenuItem key={societyItem.name} onClick={() => { setSociety(societyItem.name) }} value={societyItem.name}>{societyItem.name}</MenuItem>)
                            })}
                        </Select>
                    </div> */}
                </div>
            </div>
            <Grid container spacing={1}>
                {list.map(function (item) {
                    return (
                        <Grid item lg={3} xs={12} md={4}>
                            <EventCard event={item} />
                        </Grid>
                    );
                })
                }
            </Grid>
            <Backdrop className={classes.backdrop} open={backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}