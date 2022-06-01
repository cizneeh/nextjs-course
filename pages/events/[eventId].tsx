import { useRouter } from 'next/router'
import EventContent from '../../components/event-detail/EventContent'
import EventLogistics from '../../components/event-detail/EventLogistics'
import EventTitle from '../../components/event-detail/EventTitle'
import { getEventById } from '../../dummy-data'

function EventDetailPage() {
  const router = useRouter()
  const eventId: string = router.query.eventId as string

  const eventData = getEventById(eventId)
  if (!eventData) return <p>No event found!</p>

  return (
    <article>
      <EventTitle title={eventData.title}></EventTitle>
      <EventLogistics
        location={eventData.location}
        date={eventData.date}
        img={eventData.image}
        imgAlt="Alt String"
      ></EventLogistics>
      <EventContent>{eventData.description}</EventContent>
    </article>
  )
}

export default EventDetailPage
