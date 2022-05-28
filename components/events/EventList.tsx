import { Event } from '../../dummy-data'
import EventItem from './EventItem'

import classes from './EventList.module.css'

// a React function component that is responsible for rendering list of events
// should be reusable because we're gonna use this component for both home page and event lists page.
// this EventList component shouldn't care about where the events are coming from, but should only do rendering the events that's passed over. This should be its only job.
type Props = {
  events: Event[]
}

function EventList({ events }: Props) {
  return (
    <ul className={classes.list}>
      {events.map(event => (
        <EventItem
          id={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          location={event.location}
          key={event.id}
        />
      ))}
    </ul>
  )
}

export default EventList
