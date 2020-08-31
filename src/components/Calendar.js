import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
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
      eventsList: []
    };
  }

  componentDidMount() {
    window.onresize = this.setDims;
  }

  getEvents = () => {
      // Code that gets events from backend
      this.state.setState({
          eventsList: [
            {
                title: "Test",
                start: new Date("August 30, 2020 22:00:00"),
                end: new Date("August 30, 2020 23:00:00"),
                allDay: false,
                resource: false
            },
        ]
        }
      )
  }

  setDims = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    return (
      <div
        style={{
          height: this.state.height * (this.state.proportions.height / 100),
          width: this.state.width * (this.state.proportions.width / 100),
          margin: "auto"
        }}
      >
        <Calendar
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
