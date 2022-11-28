import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function NavBar() {
 
    const router = useRouter()
    const activeLinkStyle = "bg-green-500" 
    const inactiveLinkStyle = "text-green-800 hover:text-white"

  return (
    <nav className='flex flex-1 text-2xl bg-green-500 p-4 sm:w-screen' alt="navigation">
        <ul className='flex space-x-4 '>      
            <li>
                <Link href="/" 
                 className={router.pathname == "/" ? activeLinkStyle : inactiveLinkStyle} >
                    Home
               </Link>
            </li>
            <li>
                <Link href="/experience"
                 className={router.pathname == "/experience" ? activeLinkStyle : inactiveLinkStyle}>
                    Experience
               </Link>
            </li>
            <li>
                <Link href="/projects" 
                    className={router.pathname == "/projects" ? activeLinkStyle : inactiveLinkStyle}>
                    Projects
               </Link>
            </li>

            
    
        </ul>
    </nav>
  )
}
