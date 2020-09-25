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
      events: [
        {
          title: "Event 1",
          start: new Date(),
          end: new Date(),
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
      axios.get('https://forseti-full.herokuapp.com/api/calendar')
        .then(res => {
          this.setState({events: res.data.events})
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
        style={this.props.defaultView !== "agenda"?{
          paddingBottom: 60,
          paddingTop: 80,
        }:
        {
          paddingBottom: 20,
          paddingTop: 20,
        }
        }
      >
        <div
          style={this.props.defaultView !== "agenda"?{
            height: this.state.height * (this.state.proportions.height / 100),
            width: this.state.width * (this.state.proportions.width / 100),
            margin: "auto",
            maxWidth: this.props.maxHeight,
            padding: 30,
            borderRadius: 5,
            boxShadow: localStorage.getItem('darkMode') === "true"?"0px 0px 5px 3px #222":"0px 0px 5px 3px #ddd",
            backgroundColor: '#fff',
            color: '#000'
          }:
          {
            height: this.state.height * (this.state.proportions.height / 100),
            width: this.state.width * (this.state.proportions.width / 100),
            margin: "auto",
            maxWidth: this.props.maxHeight,
          }
          }>
            <Calendar
              popup
              localizer={localizer}
              events={this.state.events}
              defaultView={this.props.defaultView}
              startAccessor="start"
              endAccessor="end"
              toolbar={this.props.toolbar}
            />
          </div>
      </div>
    );
  }
}
