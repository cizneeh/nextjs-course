import EventList from '../../components/events/EventList'
import { getAllEvents } from '../../dummy-data'

function AllEventsPage() {
  const allEvents = getAllEvents()

  return (
    <>
      <EventList events={allEvents} />
    </>
  )
}

export default AllEventsPage
