"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)


  return (
    <nav className="bg-blue-950  text-white h-[10vh] flex flex-col md:flex-row  justify-around md:justify-between w-full items-center md:px-15">
         <Link href={"/"}>
      <div className="md:text-lg font-bold flex flex-row items-center gap-1">
        <img width={33} className='invertImg ' src="./teacup.gif" alt="this" />
        <span>Get Me A Chai</span>
      </div>
        </Link>

      <div className="relative" >        
        {session && <> <button onClick={() => setshowdropdown(!showdropdown)}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " type="button">
          <span>{session.user.email} </span>
           <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
           
        </svg>
        
        </button>

       
        


          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute left-[70px] `}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/Dashboard"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"onClick={() => setshowdropdown(false)}>Dashboard</Link>
              </li>
              <li>
                <Link  href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"onClick={() => setshowdropdown(false)}>Your page</Link>
              </li>
              
              <li>
                <Link onClick={() => {signOut(),setshowdropdown(false)}} href={"/login"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
        </>
        } 

       
        {!session && <Link href={"/login"}>
          <button type="button" className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
