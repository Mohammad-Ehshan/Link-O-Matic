import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function SelectDuration({onUserSelect}) {
  return (
    <Select onValueChange={(value) => onUserSelect('duration', value)}>
      <SelectTrigger className="bg-gray-900 border border-gray-700 text-white w-full md:w-48">
        <SelectValue placeholder="Select Duration" />
      </SelectTrigger>
      <SelectContent className="bg-gray-900 text-white border border-gray-700">
        <SelectItem value="15 Seconds">15 Seconds</SelectItem>
        <SelectItem value="30 Seconds">30 Seconds</SelectItem>
        <SelectItem value="60 Seconds">60 Seconds</SelectItem>
        <SelectItem value="2 Minute">2 Minute</SelectItem>
        <SelectItem value="5 Minute">5 Minute</SelectItem>
        <SelectItem value="10 Minute">10 Minute</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectDuration