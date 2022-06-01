import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import classes from './EventLogistics.module.css'
import LogisticsItem from './LogisticsItem'

type Props = {
  location: string
  date: string
  img: string
  imgAlt: string
}

function EventLogistics({ location, date, img, imgAlt }: Props) {
  return (
    <section className={classes.logistics}>
      <section className={classes.image}>
        <img src={`/${img}`} alt={imgAlt} />
      </section>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{date}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{location}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}

export default EventLogistics
