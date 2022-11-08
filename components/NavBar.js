import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function NavBar() {
 
    const router = useRouter()
    const activeLinkStyle = "active:bg-amber-500" 
    const inactiveLinkStyle = "text-slate-400 hover:text-white"

  return (
    <div className='flex flex-1 p-8 text-3xl font-bold text-white hover:bg-yellow-300' alt="navigation">
        <ul>      
            <li>
                <Link href="/" 
                 className={router.pathname == "/" ? activeLinkStyle : inactiveLinkStyle} >
                    Home
               </Link>
            </li>
            <li>
                <Link href="/about" 
                 className={router.pathname == "/about" ? activeLinkStyle : inactiveLinkStyle}>
                    About
                </Link>
            </li>
            <li>
                <Link href="/experience"
                 className={router.pathname == "/experience" ? activeLinkStyle : inactiveLinkStyle}>
                    Experience
               </Link>
            </li>
            <li>
                <Link href="/projects" className={router.pathname == "/projects" ? activeLinkStyle : inactiveLinkStyle}>
                    Projects
               </Link>
            </li>
    
        </ul>
    </div>
  )
}
