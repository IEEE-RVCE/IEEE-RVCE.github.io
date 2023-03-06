import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../components/Avatar";
import EventCard from "../components/EventCard";
import { hostname, ecats, images, execom, alumni } from "../links";
import AlumniAccordions from "../components/AlumniAccordions";
import SpacyDivider from "../components/SpacyDivider";

const useStyles = makeStyles((theme) => ({
	root: theme.root,
	container: theme.page,
	paper: {
		...theme.paper,
		padding: theme.spacing(4),
	},
	link: {
		...theme.link,
		float: "right",
		textDecoration: "none",
	},
	carousel: {
		margin: "auto",
		paddingTop: theme.spacing(4),
	},
}));

export default function CASSocietyPage(props) {
	const classes = useStyles();

	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios.get(hostname + "/api/event/cat/" + ecats.cas).then((response) => {
			setEvents(
				response.data.events.sort((a, b) => {
					return new Date(b.eventstart) - new Date(a.eventstart);
				})
			);
		});
	}, []);

	return (
		<div className={classes.root}>
			<img
				src={images.landing.sps} //to be changed
				id="soclanding"
				alt="Signal Processing Society"
				style={{ maxHeight: "100vh", width: "100%" }}
			/>
			<Container maxWidth="md">
				<br />
				<Paper className={classes.paper}>
					<Typography variant="h3">Vision</Typography>
					<br />
					<Typography variant="body1">
						To get the students interested in circuits and systems
						design and help them in networking with the industry
						experts. To help instill technological skills, teamwork
						and leadership and also to inculcate the skill of design
						and creativity in members through mentor sessions and
						design hackathons.
					</Typography>
				</Paper>
				<SpacyDivider color="rgb(153 221 227)" />
				<Paper className={classes.paper}>
					<Typography variant="h3">Mission</Typography>
					<br />
					<Typography variant="body1">
						<p>
							To nurture the members of the society with relevant
							technical knowledge with respect to analog and
							digital VLSI, embedded systems design, computer
							architecture and related fields.
						</p>
						<p>
							To provide an active platform for the members of the
							society to exchange and encourage new ideas.{" "}
						</p>
						<p>
							To conduct workshops, competitions and seminars
							under the banner of the chapter to enhance the
							industrial knowledge in these domains.
						</p>
					</Typography>
				</Paper>
				<SpacyDivider color="rgb(153 221 227)" />
				{events.length !== 0 && (
					<>
						<Paper className={classes.paper}>
							<Typography variant="h3">Events</Typography>
							<br />
							<Grid container spacing={2} justify="center">
								{events.slice(0, 3).map((item) => {
									return (
										<Grid item xs={12} md={4}>
											<EventCard event={item} />
										</Grid>
									);
								})}
							</Grid>
							<br />
							{events.length >= 4 && (
								<Link
									to={"/events?ecat=" + ecats.cas}
									className={classes.link}
								>
									Click here for more events
								</Link>
							)}
						</Paper>
						<SpacyDivider color="rgb(153 221 227)" />
					</>
				)}
				<Paper className={classes.paper}>
					<Typography variant="h3">Executive Committee</Typography>
					<br />
					<Grid container spacing={2} justify="center">
						{execom.cas.map((member) => (
							<Grid item xs={12} md={4}>
								<Avatar
									name={member.name}
									position={member.position}
									src={member.image}
								/>
							</Grid>
						))}
					</Grid>
				</Paper>
				<AlumniAccordions
					members={alumni.cas}
					color="rgb(153 221 227)"
				/>
				<br />
			</Container>
		</div>
	);
}
