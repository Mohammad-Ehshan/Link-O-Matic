'use client'
import { Wand } from 'lucide-react';
import React from 'react'


function EnterUrl({onUserSelect,onCreateClickHandler}) {
  return (
    <div className="prompt flex flex-row justify-center items-center gap-10">
    <input className="bg-transparent text-zinc-200" type="search" placeholder="Enter the Url.(If you don't have Url just enter 'none')" onChange={(e)=>onUserSelect('url',e.target.value)}/>
    <button className="flex flex-row justify-evenly items-center">
      <Wand/>
      <p className="" onClick={onCreateClickHandler}>Generate</p>
      </button>
  </div>
  )
}

export default EnterUrl



