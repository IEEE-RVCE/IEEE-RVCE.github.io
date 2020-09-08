import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from 'axios';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default class EventsCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      proportions: {
        width: props.height,
        height: props.width
      },
      toolbar: props.toolbar,
      defaultView: props.defaultView,
      eventsList: [
        {
          title: "Event 1",
          start: new Date(0),
          end: new Date(0),
          allDay: false,
          resource: false
        }
      ]
    };
  }

  componentDidMount() {
    this.getEvents();
    window.onresize = this.setDims;
  }

  getEvents = () => {
      // Code that gets events from backend
      axios.get('http://forseti-full.herokuapp.com/api/calendar')
        .then(res => {
          this.setState({eventsList: res.data.eventsList})
        })
        .catch(err => {
          console.error(`Error when getting calendar events: ${err}`)
        })
  }

  setDims = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  static defaultProps = {
    defaultView: 'month',
    toolbar: true,
    maxHeight: "100%",
  }

  render() {
    return (
      <div
        style={{
          height: this.state.height * (this.state.proportions.height / 100),
          width: this.state.width * (this.state.proportions.width / 100),
          margin: "auto",
          maxWidth: this.props.maxHeight,
          paddingBottom: 20,
          paddingTop: 40,
        }}
      >
        <Calendar
          popup
          localizer={localizer}
          events={this.state.eventsList}
          defaultView={this.props.defaultView}
          startAccessor="start"
          endAccessor="end"
          toolbar={this.props.toolbar}
        />
      </div>
    );
  }
}
