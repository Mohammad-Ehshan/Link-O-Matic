// import React,{useState} from 'react'
// import { Thumbnail } from "@remotion/player";
// import RemotionVideo from './RemotionVideo';
// import PlayerDialog from './PlayerDialog';
// import { VideoData } from '@/configs/schema';
// import { db } from '@/configs/db';
// import { eq } from 'drizzle-orm';

// function VideoList({ videoList }) {

//   const [openPlayerDialog, setOpenPlayerDialog] = useState(false);
//   const [videoId, setVideoId] = useState();

//   return (
//     <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
//       {
//         videoList?.map((video, index) => (
//           <div className="cursor-pointer hover:scale-105 transition-all"
//           Key={index}
//           onClick={()=>{setOpenPlayerDialog(Date.now());setVideoId(video?.Id)} }
//           >
//             <Thumbnail
//               component={RemotionVideo}
//               compositionWidth={300}
//               compositionHeight={450}
//               frameToDisplay={30}
//               durationInFrames={120}
//               fps={30}
//               style={{
//                 borderRadius:25
//               }}
//               inputProps={{
//                ...video,
//                setDurationInFrame:(v)=>console.log(v)
//               }}
//             />
//           </div>
//         ))
//       }
//       <PlayerDialog playVideo={openPlayerDialog} videoId={videoId}/>
//     </div>
//   )
// }

// export default VideoList



// import React,{useState} from 'react'
// import { Thumbnail } from "@remotion/player";
// import RemotionVideo from './RemotionVideo';
// import PlayerDialog from './PlayerDialog';

// function VideoList({ videoList }) {
//   const [openPlayerDialog, setOpenPlayerDialog] = useState(false);
//   const [videoId, setVideoId] = useState(null);

//   return (
//     <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
//       {
//         videoList?.map((video, index) => (
//           <div className="cursor-pointer hover:scale-105 transition-all"
//             key={index}
//             onClick={() => {
//               setOpenPlayerDialog(true);
//               setVideoId(video?.id); // ensure it's the correct field
//             }}
//           >
//             <Thumbnail
//               component={RemotionVideo}
//               compositionWidth={300}
//               compositionHeight={450}
//               frameToDisplay={30}
//               durationInFrames={120}
//               fps={30}
//               style={{
//                 borderRadius: 25
//               }}
//               inputProps={{
//                 ...video,
//                 setDurationInFrame: (v) => console.log(v)
//               }}
//             />
//           </div>
//         ))
//       }
//       {openPlayerDialog && (
//         <PlayerDialog playVideo={openPlayerDialog} videoId={videoId} closeDialog={() => setOpenPlayerDialog(false)} />
//       )}
//     </div>
//   )
// }

// export default VideoList;


import React, { useState } from 'react';
import { Thumbnail } from "@remotion/player";
import RemotionVideo from './RemotionVideo';
import PlayerDialog from './PlayerDialog';

function VideoList({ videoList }) {
  const [openPlayerDialog, setOpenPlayerDialog] = useState(false); // Initially set to false
  const [videoId, setVideoId] = useState(null);

  return (
    <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {
        videoList?.map((video, index) => (
          <div className="cursor-pointer hover:scale-105 transition-all"
            key={index}
            onClick={() => {
              setOpenPlayerDialog(true); // Open on thumbnail click
              setVideoId(video?.id); // Ensure correct video ID is passed
            }}
          >
            <Thumbnail
              component={RemotionVideo}
              compositionWidth={300}
              compositionHeight={450}
              frameToDisplay={30}
              durationInFrames={120}
              fps={30}
              style={{
                borderRadius: 25
              }}
              inputProps={{
                ...video,
                setDurationInFrame: (v) => console.log(v)
              }}
            />
          </div>
        ))
      }
      {openPlayerDialog && (
        <PlayerDialog 
          playVideo={openPlayerDialog} 
          videoId={videoId} 
          closeDialog={() => setOpenPlayerDialog(false)} // Close function
        />
      )}
    </div>
  );
}

export default VideoList;
