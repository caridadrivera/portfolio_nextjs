import React from 'react'
import NavBar from './NavBar'

export default function Layout(props) {
    const {children} = props
  return (
    <>
      <NavBar/>
        <main className='flex '>{children}</main>
    </>
  
  )
}
