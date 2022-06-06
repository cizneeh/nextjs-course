import { ReactNode } from 'react'
import MainHeader from './main-header'

type Props = {
  children: ReactNode
}

function Layout(props: Props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
