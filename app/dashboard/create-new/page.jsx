"use client"
import React, { useState, useContext, useEffect } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import EnterUrl from './_components/EnterUrl';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';

import { v4 as uuidv4 } from 'uuid';
import { VideoDataContext } from '@/app/_context/VideoDataContext';
import { db } from '@/configs/db';
import { VideoData } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import PlayerDialog from '../_components/PlayerDialog';

import { Airplay, Bookmark, FileImage, Hourglass, Palette, SparklesIcon, Wand } from "lucide-react";

//for testing
const scriptData = `Ellie the elephant loved exploring the meadow, but she always felt a bit lonely. One day, she met Anton, a tiny ant who was always busy working. Ellie was surprised to see such a small creature working so hard. Ellie and Anton started talking, and they quickly became friends. Ellie was happy to have a new friend, and Anton enjoyed seeing the world from a different perspective. Together, they helped each other with their tasks, proving that even the smallest creatures can make a big difference. Ellie and Anton learned that friendship can blossom in the most unexpected places, reminding us that size doesn't matter when it comes to kindness and companionship.`

const FILEURL = "https://firebasestorage.googleapis.com/v0/b/url-o-matic-8f684.appspot.com/o/Link-O-Matic%2F5f4244b2-ee49-442e-99df-6f2d97226ef5.mp3?alt=media&token=52312c5f-3fb1-4966-8ac9-ae3799b2b8d3"

const testingScript = [
  {
    "imagePrompt": "A close-up shot of Virat Kohli's face, focused on his determined expression while batting.",
    "contentText": "Virat Kohli, one of the greatest batsmen of all time."
  },
  {
    "imagePrompt": "A bustling marketplace in ancient Rome, with people seeling goods, merchants heggling , and citizens going about their daily live, realistive ,detailed and vibrant colors.",
    "contentText": "Known for his aggressive batting style and record-breaking centuries."
  },
]


function page() {

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setvideoScript] = useState();
  const [audioFileUrl, setAudioFileUrl] = useState();
  const [captions, setCaptions] = useState();
  const [imageList, setImageList] = useState();
  const { videoData, setVideoData } = useContext(VideoDataContext);
  const { user } = useUser();
  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState(7);
  const [data, setData] = useState();

  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    GetVideoScript();
    // GenerateAudioFile(scriptData);
    // GenerateAudioCaption(FILEURL);
    // GenerateImage();
  }

  //Get Summary
  const GetUrlSummary = async () => {
    setLoading(true)

    try {
      // Fetch the URL data by sending the user-entered URL
      const res = await fetch(`http://localhost:3000/api/get-summary?url=${encodeURIComponent(formData.url)}`);

      if (!res.ok) {
        const errorData = await res.json();
        setError(`Error fetching data: ${errorData.error}`);
        console.error("Error fetching data:", errorData.error);
        return;
      }

      const { summary } = await res.json(); // Update to access summary instead of text
      setData(summary); // Store the summarized data
    } catch (err) {
      setError(`Error: ${err.message}`);
      console.error("Fetch error:", err);
    }
  }

  //Get Video Script
  const GetVideoScript = async () => {
    setLoading(true)
    const prompt = `Generate a script for a ${formData.duration} video. Use the information from the URL ${formData.url}. Use the user-provided prompt: '${formData.topic}'. Include ${formData.imageStyle} image prompts for each scene and provide the result in JSON format with imagePrompt and contentText fields only.`;
    console.log(prompt)

    const resp = await axios.post('/api/get-video-script', {
      prompt: prompt
    });
    if (resp.data.result) {
      setVideoData(prev => ({
        ...prev,
        'videoScript': resp.data.result
      }))
      setvideoScript(resp.data.result);
      await GenerateAudioFile(resp.data.result);
    }
    setLoading(false)

    // const result = await axios.post('/api/get-video-script', {
    //   prompt: prompt
    // }).then(resp => {
    //   console.log(resp.data.result);
    //   setvideoScript(resp.data.result);
    //   GenerateAudioFile(resp.data.result);
    // });
    // setLoading((false));
  }

  //Get Audio File
  const GenerateAudioFile = async (videoScriptData) => {
    setLoading(true)
    let script = '';
    const id = uuidv4()
    videoScriptData.forEach(item => {
      script = script + item.contentText + ' ';
    })

    const resp = await axios.post('/api/generate-audio', {
      text: script,
      id: id
    });

    console.log('Audio generation response:', resp.data);

    setVideoData(prev => ({
      ...prev,
      'audioFileUrl': resp.data.result
    }))

    setAudioFileUrl(resp.data.result);//Get file url
    resp.data.result && await GenerateAudioCaption(resp.data.result, videoScriptData)

    // await axios.post('/api/generate-audio',{
    //   text:videoScriptData,
    //   id:id
    // }).then(resp=>{
    //   console.log(resp.data);
    //   setAudioFileUrl(resp.data.result);
    //   resp.data.result && await GenerateAudioCaption(resp.data.result)
    // })

    setLoading(false);
  }

  //Get Audio Caption
  const GenerateAudioCaption = async (fileUrl, videoScriptData) => {
    setLoading(true);

    const resp = await axios.post('/api/generate-caption', {
      audioFileUrl: fileUrl
    })

    setCaptions(resp?.data?.result);
    setVideoData(prev => ({
      ...prev,
      'captions': resp.data.result
    }))
    resp.data.result && await GenerateImage(videoScriptData);

    // await axios.post('/api/generate-caption', {
    //   audioFileUrl: fileUrl
    // }).then(resp => {
    //   console.log(resp.data.result);
    //   setCaptions(resp?.data?.result);
    //   resp.data.result && GenerateImage(videoScriptData);
    // })
    // console.log(videoScript, captions, audioFileUrl);
    setLoading(false)
  }

  //Get Images
  const GenerateImage = async (videoScriptData) => {
    setLoading(true); // Set loading state to true while generating images
    let images = [];

    // Use for...of to handle asynchronous operations properly
    for (const element of videoScriptData) {
      // const id=uuidv4()
      try {
        const resp = await axios.post('/api/generate-image', {
          prompt: element?.imagePrompt,
          // id:id
        });
        console.log(resp.data.result);
        images.push(resp.data.result); // Collect the generated image
      } catch (error) {
        console.error('Error generating image:', error); // Log any errors
      }
    }

    // console.log(images, videoScript, audioFileUrl, captions);

    setVideoData(prev => ({
      ...prev,
      'imageList': images
    }))
    setImageList(images);
    setLoading(false);
  };

  useEffect(() => {
    console.log(videoData);
    if (Object.keys(videoData).length == 4) {
      SaveVideoData(videoData);
    }
  }, [videoData])

  const SaveVideoData = async (videoData) => {
    setLoading(true)

    const result = await db.insert(VideoData).values({
      script: videoData?.videoScript,
      audioFileUrl: videoData?.audioFileUrl,
      captions: videoData?.captions,
      imageList: videoData?.imageList,
      createdBy: user?.primaryEmailAddress?.emailAddress
    }).returning({ id: VideoData?.id })


    setVideoId(result[0].id);
    setPlayVideo(true);
    console.log(result);
    setLoading(false);

  }

  return (
   <>
    <section className="main flex flex-col items-center bg-[#000000] text-white">
      <main className="content">
        <div className="text flex flex-col justify-end items-center">
          <p>AI in Visualization of Data</p>
          <h1>Creative AI, Cinematic Flair</h1>
          <span>Discover the future of video creation with AI</span>
        </div>

        {/* url input  */}
        <EnterUrl onUserSelect={onHandleInputChange} onCreateClickHandler={onCreateClickHandler} />

        {/* <div className="prompt flex flex-row justify-center items-center gap-10">
          <input className="bg-transparent text-zinc-200" type="search" placeholder="Paste url of any Website" name="" id=""/>
          <button className="flex flex-row justify-evenly items-center">
            <Wand/>
            <p className="">Generate</p>
            </button>
        </div> */}


        <div className="tag flex justify-center items-center flex-row gap-16 bg-black">
          <div className="tagbox flex justify-between items-center flex-row">
            <div className="flex justify-center items-center gap-2">
              {/* <i class="fa-regular fa-hourglass-half"></i> */}
              <Hourglass />
              {/* Duration */}
              <SelectDuration onUserSelect={onHandleInputChange}/>
              </div>
            <div className="flex justify-center items-center gap-2">
              {/* <i class="fa-solid fa-palette"></i> */}
              <Palette />
              Style</div>
            <div className="flex justify-center items-center gap-2">
              {/* <i class="fa-solid fa-file-image"></i> */}
              <FileImage />
              Photo</div>
            <div className="flex justify-center items-center gap-2">
              {/* <i class="fa-solid fa-book-bookmark"></i> */}
              <Bookmark />
              Content</div>
            <div className="flex justify-center items-center gap-2">
              {/* <i class="fa-solid fa-dragon"></i> */}
              <Airplay />
              Anime</div>
          </div>
          {/* <div className="text-black sample flex justify-center items-center gap-2 cursor-pointer"><SparklesIcon/>Prompt Samples</div> */}
          <SelectTopic onUserSelect={onHandleInputChange} />
        </div>
      </main>

      {/* style  */}
      <SelectStyle onUserSelect={onHandleInputChange} />

      {/* <div className="style flex flex-row justify-evenly items-center bg-black">
        <img className="img1" src="./real.jpg" alt="" />
        <img className="img2" src="./tiger.jpg" alt="" />
        <img className="img3" src="./realistic.jpg" alt="" />
        <img className="img4" src="./anime.jpg" alt="" />
        <img className="img5" src="./water.jpg" alt="" />
      </div> */}
    </section>
    <CustomLoading loading={loading} />
    <PlayerDialog playVideo={playVideo} videoId={videoId}/>
    </>
  )
}

export default page









