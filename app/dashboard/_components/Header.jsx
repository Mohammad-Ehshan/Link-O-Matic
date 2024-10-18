import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    // <div className='p-3 px-5 flex items-center justify-between shadow-md bg-[#181819]'>
    //   <div>
    //     <Link href="/">
    //     <Image src="/Logo2.jpg" alt="Link-O-Matic"
    //     width="50" height="50"></Image>
    //     </Link>
    //     {/* <h1 className="text-white">Link-O-Matic</h1> */}
    //   </div>
    //   <div className="flex gap-3 items-center">
    //     <Button className="bg-white text-black font-bold">Dashboard</Button>
    //     <UserButton/>
    //   </div>
    // </div>
    
    <div className="main flex flex-col items-center bg-[#000000] text-white">
     <nav className="navbar flex flex-row justify-evenly items-center text-gray-300 bg-black">
        <div className="logo">
          {/* <Image className="mt-7" src="/anime.jpg" fill alt="logo" /> */}
          <img className="mt-7" src="/newLogo.jpg"  alt="logo" />
        </div>
        <ul className="flex flex-row justify-end items-center p-10 font-semibold cursor-pointer">
          <li><a href="">Home</a></li>
          <li><a href="">Create New</a></li>
          <li><a href="">Dashboard</a></li>
          <li><a href="">Subscriptions</a></li>
        </ul>
        {/* <button className="flex justify-center items-center bg-white text-black">Sign up</button> */}
        <UserButton className="bg-blue-600 text-blue-400"/>
      </nav>
    </div>
  )
}

export default Header
