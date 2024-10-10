'use client'
import { CircleUser, LayoutDashboard, MonitorPlay, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideNav() {
  
  const MenuOption=[
    {
      id:1,
      name:'Dashboard',
      path:'/dashboard',
      icon:LayoutDashboard
    },
    {
      id:2,
      name:'Create New',
      path:'/dashboard/create-new',
      icon:MonitorPlay
    },
    {
      id:3,
      name:'Upgrade',
      path:'/upgrade',
      icon:ShieldPlus
    },
    {
      id:4,
      name:'Account',
      path:'/account',
      icon:CircleUser
    }
  ]

  const path=usePathname();

  return (
    <div className='w-64 h-screen shadow-md p-5'>
      <div className='grid gap-3'>
        {MenuOption.map((item,index)=>(
          <Link href={item.path} key={index}>
          <div className={`flex items-center gap-3 p-3 hover:bg-gray-600 hover:text-white rounded-md cursor-pointer ${path==item.path&&'bg-gray-800 text-white'}`}>
            <item.icon/>
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
