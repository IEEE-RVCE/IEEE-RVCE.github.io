import React from 'react';

import EventsCalendar from '../components/Calendar';

export default function CalendarPage() {
    return(
        <>
            <EventsCalendar
                toolbar={true}
                defaultView="month"
                width={70}
                height={80}
            />
        </>
    )
}