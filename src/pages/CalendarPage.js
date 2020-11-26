import React from 'react';
import EventsCalendar from '../components/Calendar';

export default function CalendarPage() {
    return(
        <>
            <EventsCalendar
                toolbar={true}
                defaultView="month"
                width={window.innerWidth<450?95:70}
                height={window.innerWidth<450?50:80}
            />
        </>
    )
}