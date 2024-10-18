// "use client"
// import React,{useState,useEffect} from 'react'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Player } from "@remotion/player";
// import RemotionVideo from './RemotionVideo';
// import { Button } from '@/components/ui/button';
// import { db } from '@/configs/db';
// import { VideoData } from '@/configs/schema';
// import { eq } from 'drizzle-orm';
// import { useRouter } from 'next/navigation';

// function PlayerDialog({playVideo,videoId}) {

//   const [openDialog, setOpenDialog] = useState(true);
//   const [videoData, setVideoData] = useState();
//   const [durationInFrame, setDurationInFrame] = useState(100);
//   const router=useRouter();

//   useEffect(()=>{
//     setOpenDialog(!openDialog);
//     videoId&&GetVideoData();
//   },[playVideo])

//   const GetVideoData=async()=>{
//     const result=await db.select().from(VideoData).where(eq(VideoData.id,videoId));

//     console.log(result);
//     setVideoData(result[0]);
//   }

//   return (
//     <Dialog open={openDialog}>
//     <DialogContent className="flex flex-col items-center">
//       <DialogHeader>
//         <DialogTitle className="text-3xl font-bold my-5">Here is your Video!</DialogTitle>
//         <DialogDescription>
//         <Player
//       component={RemotionVideo}
//       durationInFrames={Number(durationInFrame.toFixed(0))}
//       compositionWidth={300}
//       compositionHeight={450}
//       fps={30}
//       controls={true}
//       inputProps={{
//         ...videoData,
//         setDurationInFrame:(frameValue)=>setDurationInFrame(frameValue)
//       }}
//     />
//     <div className="flex gap-10 mt-7">
//       <Button variant="ghost" onClick={()=>{router.replace('/dashboard');setOpenDialog(false)}}>Cancel</Button>
//       <Button>Export</Button>
//     </div>
//         </DialogDescription>
//       </DialogHeader>
//     </DialogContent>
//   </Dialog>
  
//   )
// }

// export default PlayerDialog


// "use client"
// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Player } from "@remotion/player";
// import RemotionVideo from './RemotionVideo';
// import { Button } from '@/components/ui/button';
// import { db } from '@/configs/db';
// import { VideoData } from '@/configs/schema';
// import { eq } from 'drizzle-orm';
// import { useRouter } from 'next/navigation';

// function PlayerDialog({ playVideo, videoId, closeDialog }) {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [videoData, setVideoData] = useState(null);
//   const [durationInFrame, setDurationInFrame] = useState(100);
//   const router = useRouter();

//   useEffect(() => {
//     if (playVideo && videoId) {
//       GetVideoData();
//     }
//   }, [playVideo, videoId]);

//   const GetVideoData = async () => {
//     try {
//       const result = await db.select().from(VideoData).where(eq(VideoData.id, videoId));
//       console.log(result);
//       setVideoData(result[0]);
//     } catch (error) {
//       console.error("Error fetching video data:", error);
//     }
//   };

//   return (
//     <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//       <DialogContent className="flex flex-col items-center">
//         <DialogHeader>
//           <DialogTitle className="text-3xl font-bold my-5">Here is your Video!</DialogTitle>
//           <DialogDescription>
//             {videoData ? (
//               <Player
//                 component={RemotionVideo}
//                 durationInFrames={Number(durationInFrame.toFixed(0))}
//                 compositionWidth={300}
//                 compositionHeight={450}
//                 fps={30}
//                 controls={true}
//                 inputProps={{
//                   ...videoData,
//                   setDurationInFrame: (frameValue) => setDurationInFrame(frameValue)
//                 }}
//               />
//             ) : (
//               <p>Loading...</p>
//             )}
//             <div className="flex gap-10 mt-7">
//               <Button variant="ghost" onClick={() => { closeDialog(); router.replace('/dashboard'); }}>Cancel</Button>
//               <Button>Export</Button>
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default PlayerDialog;


"use client"
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Player } from "@remotion/player";
import RemotionVideo from './RemotionVideo';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { VideoData } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';

function PlayerDialog({ playVideo, videoId, closeDialog }) {
  const [videoData, setVideoData] = useState(null);
  const [durationInFrame, setDurationInFrame] = useState(100);
  const router = useRouter();

  // Fetch video data when playVideo and videoId change
  useEffect(() => {
    if (playVideo && videoId) {
      GetVideoData();
    }
  }, [playVideo, videoId]);

  const GetVideoData = async () => {
    try {
      const result = await db.select().from(VideoData).where(eq(VideoData.id, videoId));
      console.log(result);
      setVideoData(result[0]);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  return (
    <Dialog open={playVideo} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent className="flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold my-5">Here is your Video!</DialogTitle>
          <DialogDescription>
            {videoData ? (
              <Player
                component={RemotionVideo}
                durationInFrames={Number(durationInFrame.toFixed(0))}
                compositionWidth={300}
                compositionHeight={450}
                fps={30}
                controls={true}
                inputProps={{
                  ...videoData,
                  setDurationInFrame: (frameValue) => setDurationInFrame(frameValue),
                }}
              />
            ) : (
              <p>Loading...</p>
            )}
            <div className="flex gap-10 mt-7">
              <Button variant="ghost" onClick={() => { closeDialog(); router.replace('/dashboard'); }}>Cancel</Button>
              <Button>Export</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PlayerDialog;
