
import Image from 'next/image'
import React,{useState} from 'react'

function SelectStyle({onUserSelect}) {
  const styleOptions = [
    {
      name: "Realistic",
      image: '/real.jpg'
    },
    {
      name: "Wpap",
      image: '/tiger.jpg'
    },
    {
      name: "animated",
      image: '/realistic.jpg'
    },
    {
      name: "Cartoon",
      image: '/anime.jpg'
    },
    {
      name: "WaterColour",
      image: '/water.jpg'
    },
  ]

  const [selectedOption, setSelectedOption] = useState()

  return (
   <div className='style flex flex-row justify-evenly items-center bg-black'>
    {styleOptions.map((item, index) => {
      return (
        <div 
          key={index} 
          className={` relative hover:scale-105 transition-all cursor-pointer rounded-xl ${selectedOption === item.name && 'border-4 border-red-300'}`}>
          
          <Image 
            src={item.image} 
            alt={item.name}
            // fill
            width={100}
            height={100}
            className='img1'
            onClick={() => {
              setSelectedOption(item.name);
              onUserSelect('imageStyle', item.name);
            }}
          />
        </div>
      );
    })}
    </div>
  )
}

export default SelectStyle