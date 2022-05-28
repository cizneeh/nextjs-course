import Link from 'next/link'
import { ReactNode } from 'react'

import classes from './button.module.css'

type Props = {
  link: string
  children: ReactNode
}

function Button({ link, children }: Props) {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  )
}

export default Button
