import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function SelectDuration({onUserSelect}) {
  return (
    // <div className="mt-7">
    // <div className='mt-7'>
    // {/* <h2 className='font-bold text-2xl text-primary'>Duration</h2>
    // <p className='text-gray-500'>Select the duration of your video?</p> */}
    //  {/* <div className="tag flex justify-center items-center flex-row gap-16 bg-black"> */}
    <Select onValueChange={(value)=>{
    onUserSelect('duration',value)}}
      
      >
      <SelectTrigger className="bg-black border-none">
        <SelectValue placeholder="Select Duration" />
      </SelectTrigger>
      <SelectContent className="bg-black text-white">
          <SelectItem value="15 Seconds">15 Seconds</SelectItem>
          <SelectItem value="30 Seconds">30 Seconds</SelectItem>
          <SelectItem value="60 Seconds">60 Seconds</SelectItem>
          <SelectItem value="2 Minute">2 Minute</SelectItem>
          <SelectItem value="5 Minute">5 Minute</SelectItem>
          <SelectItem value="10 Minute">10 Minute</SelectItem>
      </SelectContent>
    </Select>
    // </div>
    //  </div>
  )
}

export default SelectDuration
