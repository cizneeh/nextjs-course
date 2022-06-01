import classes from './LogisticsItem.module.css'
import { ReactNode } from 'react'

type Props = {
  icon: any
  children: ReactNode
}

function LogisticsItem({ icon: Icon, children }: Props) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  )
}

export default LogisticsItem
