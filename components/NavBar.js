import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NavBar() {


  return (
    <div className='flex flex-1 p-8 text-3xl font-bold text-white'>
        <ul>    
            <li>
                <Link href="/">
                    Home
               </Link>
            </li>
            <li>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li>
                <Link href="/experience">
                    Experience
               </Link>
            </li>
            <li>
                <Link href="/projects">
                    Projects
               </Link>
            </li>
            <li>
                <Link href="/contact">
                    Contact
               </Link>
            </li>
        </ul>
    </div>
  )
}
