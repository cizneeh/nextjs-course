import classes from './EventContent.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function EventContent({ children }: Props) {
  return <section className={classes.content}>{children}</section>
}

export default EventContent
