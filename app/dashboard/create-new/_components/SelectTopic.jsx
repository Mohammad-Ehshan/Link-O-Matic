'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'


function SelectTopic({ onUserSelect }) {
  const options = ['Custom Prompt', 'Sports', 'News', 'learning']
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <h2 className='font-bold text-2xl text-primary'>Content</h2>
      <p className='text-gray-500'>What is the topic of your video?</p>
      <Select onValueChange={(value) => {
        setSelectedOption(value);
        value != 'Custom Prompt' && onUserSelect('topic', value)
      }}

      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {/* {options.map((item,index)=>(
            <SelectItem value={item}>{item}</SelectItem>
          ))} */}
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>{item}</SelectItem>
          ))}

        </SelectContent>
      </Select>

      {selectedOption == 'Custom Prompt' &&
        <Textarea className="mt-5"
          onChange={(e) => onUserSelect('topic', e.target.value)}
          placeholder="Write prompt about the type of video you want to generate" />
      }

    </div>
  )
}

export default SelectTopic
