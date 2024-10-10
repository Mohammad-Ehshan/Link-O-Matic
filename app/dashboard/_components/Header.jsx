import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md bg-[#181819]'>
      <div>
        <Link href="/">
        <Image src="/Logo2.jpg" alt="Link-O-Matic"
        width="50" height="50"></Image>
        </Link>
        {/* <h1 className="text-white">Link-O-Matic</h1> */}
      </div>
      <div className="flex gap-3 items-center">
        <Button className="bg-white text-black font-bold">Dashboard</Button>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
