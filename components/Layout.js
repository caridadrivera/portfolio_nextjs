import React from 'react'


export default function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col min-h-screen relative bg-amber-300 border border-8 border-white'> 
        <main>{children}</main>
    </div>
  )
}
