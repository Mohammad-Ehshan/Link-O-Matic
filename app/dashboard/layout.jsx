"use client"

import React,{useState} from 'react'
import { VideoDataContext } from '../_context/VideoDataContext'

function DashboardLayout({ children }) {
  const [videoData, setVideoData] = useState([]);
  return (
    <VideoDataContext.Provider value={{videoData,setVideoData}}>
    <div>
      <div>
        {/* <Header /> */}
        {/* <div className="md:ml-64 p-10"> */}
        <div>
        {children}
        </div>
      </div>
    </div>
    </VideoDataContext.Provider>
  )
}

export default DashboardLayout
