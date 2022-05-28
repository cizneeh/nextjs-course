import Link from 'next/link'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'
import Button from '../ui/button'

import classes from './EventItem.module.css'

type Props = {
  title: string
  image: string
  date: string
  location: string
  id: string
}

function EventItem({ title, image, date, location, id }: Props) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt="title" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
