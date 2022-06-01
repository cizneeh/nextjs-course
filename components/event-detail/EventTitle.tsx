import classes from './EventTitle.module.css'

import { ReactNode } from 'react'

type Props = {
  title: string
}

function EventTitle({ title }: Props) {
  return (
    <section className={classes.title}>
      <h1>{title}</h1>
    </section>
  )
}

export default EventTitle
