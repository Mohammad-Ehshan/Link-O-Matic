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
    <div className='bg-black text-white'>
      <div className='flex justify-between items-center'>
        <Link href={'/dashboard/create-new'}>
          <Button className='ml-2 bg-blue-500'>+  Create New</Button>
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