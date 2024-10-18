"use client"
import { Button } from '@/components/ui/button'
import React, { useState,useEffect } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';
import { db } from '@/configs/db';
import { VideoData } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import VideoList from './_components/VideoList';
import Prepers from '../Home/_components/Prepers';
import Testimonal2 from '../Home/_components/Testimonial2';

const page = () => {
  const [videoList, setVideoList] = useState([]);
  const {user}=useUser();

  useEffect(() => {
    user&&GetVideoList();
  }, [user])
  

  const GetVideoList=async()=>{
    const result=await db.select().from(VideoData).where(eq(VideoData?.createdBy,user?.primaryEmailAddress?.emailAddress));

    console.log(result);
    setVideoList(result);
  }

  return (
    <div >
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
          <Button>+  Create New</Button>
        </Link>
      </div>

      {/* Empty list */}
      {videoList?.length == 0 && <div>
        <EmptyState />
      </div>}

      {/* list of video  */}
      <VideoList videoList={videoList}/>
    </div>
  )
}

export default page