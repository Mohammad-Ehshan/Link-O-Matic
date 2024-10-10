'use client'
import { Textarea } from '@/components/ui/textarea';
import React from 'react'


function EnterUrl({onUserSelect}) {
  return (
    <div>
      <h2 className='font-bold text-2xl text-primary'>URL</h2>
      <p className='text-gray-500'>Enter the Url of the Video.If you don't have Url just enter 'none'</p>
       <Textarea className="mt-5 min-h-9"
        onChange={(e)=>onUserSelect('url',e.target.value)}
        
       placeholder="Enter the Url"/>
    </div>
  )
}

export default EnterUrl
