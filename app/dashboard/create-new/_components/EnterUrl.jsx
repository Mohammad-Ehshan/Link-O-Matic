'use client'
import { Textarea } from '@/components/ui/textarea';
import { Wand } from 'lucide-react';
import React from 'react'


function EnterUrl({onUserSelect,onCreateClickHandler}) {
  return (
    // <div>
    //   <h2 className='font-bold text-2xl text-primary'>URL</h2>
    //   <p className='text-gray-500'>Enter the Url of the Video.(If you don't have Url just enter 'none')
    //     </p>
    //    <Textarea className="mt-5 min-h-9"
    //     onChange={(e)=>onUserSelect('url',e.target.value)}
        
    //    placeholder="Enter the Url"/>
    // </div>
    <div className="prompt flex flex-row justify-center items-center gap-10">
    <input className="bg-transparent text-zinc-200" type="search" placeholder="Enter the Url.(If you don't have Url just enter 'none')" onChange={(e)=>onUserSelect('url',e.target.value)}/>
    <button className="flex flex-row justify-evenly items-center">
      {/* <i className="fa-solid fa-wand-magic-sparkles"></i> */}
      <Wand/>
      <p className="" onClick={onCreateClickHandler}>Generate</p>
      </button>
  </div>
  )
}

export default EnterUrl
