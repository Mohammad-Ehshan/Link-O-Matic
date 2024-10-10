// import { TextToSpeechClient } from "@google-cloud/text-to-speech";
// import { NextResponse } from "next/server";


// const client = new TextToSpeechClient.TextToSpeechClient({
//   apiKey:process.env.GOOGLE_API_KEY
// })

// export async function POST(req){

//   const {text,id}=await req.json();

//   const request={
//     input:{text:text},

//     voice:{languageCode:'en-US',ssmlGender:'FEMALE'},

//     audioConfig:{audoEncoding:'MP3'},

//   };
//   const [response]=await client.synthesizeSpeech(request);

//   const writeFile=util.promisify(fs.writeFile);

//   await writeFile('output.mp3',response.audioContent,'binary');

//   return NextResponse({Result:'Success'});
// }

// pages/api/tts.js
// import axios from 'axios';
// import fs from 'fs';
// import Error from 'next/error';
// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   const { text,id } = await req.json();

//   // Replace with your Hugging Face API key
//   const apiKey = process.env.HUGGINGFACE_API_KEY;

//   try {
//     // const response = await axios.post(
//     //   'https://api-inference.huggingface.co/models/tts_models/en/ljspeech/vits',
//     //   { inputs: text },
//     //   {
//     //     headers: {
//     //       Authorization: `Bearer ${apiKey}`,
//     //     },
//     //   }
//     // );

//     const response=await fetch("https://api-inference.huggingface.co/models/facebook/mms-tts-eng",{
//       headers: {
//         Authorization:`Bearer ${apiKey}`,
//         "Content-Type":"application/json",
//       },
//       method:"POST",
//       input:{text:text},
//     });

//     if(!response.ok){
//       throw new Error("Request Failed")
//     }

//     const audioData=await response.arrayBuffer();

//     return new Response(audioData,{
//       headers:{
//         "Content-Type":"audio/mpeg"
//       }
//     })

//     // const audioContent = response.data.audio; // Assuming the audio content is in base64 format

//     // // Convert base64 string to binary
//     // const buffer = Buffer.from(audioContent, 'base64');

//     // // Specify the path to save the MP3 file
//     // const mp3FilePath = 'output.mp3';

//     // // Write the audio to an MP3 file
//     // await fs.promises.writeFile(mp3FilePath, buffer);

//     // return NextResponse.json({ Result: 'Success', audioFilePath: mp3FilePath });
//   } catch (error) {
//     console.error('Error generating audio:', error);
//     return NextResponse.json({ Error: 'Failed to generate speech' });
//   }
// }

// import axios from 'axios';
// import fs from 'fs';
// import util from 'util'; // For promisifying writeFile
// import { NextResponse } from 'next/server';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { storage } from '@/configs/FirebaseConfig';

// export async function POST(req) {
//   const { text, id } = await req.json(); // Get both text and id from the request body
//   const storageRef=ref(storage,'Link-O-Matic/'+id+'.mp3')//firebase storage folder path

//   // Replace with your Hugging Face API key
//   const apiKey = process.env.HUGGING_FACE_API_KEY;

//   try {
//     // // Log the API key and input values for debugging
//     // console.log('Hugging Face API Key:', apiKey); // Ensure API key is correctly set
//     // console.log('Input Text:', text); // Log the input text
//     // console.log('Input ID:', id); // Log the input ID

//     // Make the POST request to the Hugging Face TTS model
//     const response = await fetch("https://api-inference.huggingface.co/models/facebook/mms-tts-eng", {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify({ inputs: text }), // Pass the text in the request body
//     });

//     // Check if the response is okay
//     if (!response.ok) {
//       const errorData = await response.json(); // Get error details
//       throw new Error(`Request Failed: ${errorData.error || 'Unknown error'}`); // Log the error details
//     }

//     // Fetch the audio data as an ArrayBuffer (binary data)
//     const audioData = await response.arrayBuffer();

//     // Convert the ArrayBuffer to a Buffer
//     const buffer = Buffer.from(audioData);

//     // Generate an MP3 file path using the id to ensure uniqueness
//     // const mp3FilePath = `output_${id}.mp3`; // Filename includes the id

//     // Write the audio content to the MP3 file in local storage
//     // const writeFile = util.promisify(fs.writeFile);
//     // await writeFile(mp3FilePath, buffer);

//     //storing data to firebase storage
//     await uploadBytes(storageRef,buffer,{contentType:'audio/mp3'})

//     const downloadUrl=await getDownloadURL(storageRef);
//     console.log(downloadUrl);

//     // Return a response with the file path and id
//     return NextResponse.json({ Result:downloadUrl });
//   } catch (error) {
//     console.error('Error generating audio:', error);
//     return NextResponse.json({ Error: 'Failed to generate speech', details: error.message });
//   }
// }


import { NextResponse } from 'next/server';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/FirebaseConfig'; // Import Firebase storage instance

// Function to fetch TTS audio from Hugging Face with retry mechanism
const fetchTTS = async (text, apiKey, retryCount = 3, delay = 5000) => {
  for (let attempt = 0; attempt < retryCount; attempt++) {
    try {
      // Make POST request to Hugging Face API for TTS generation
      const response = await fetch("https://api-inference.huggingface.co/models/facebook/mms-tts-eng", {
        headers: {
          Authorization: `Bearer ${apiKey}`, // Authorization using Hugging Face API key
          "Content-Type": "application/json", // Content type to indicate JSON request
        },
        method: "POST",
        body: JSON.stringify({ inputs: text }), // Sending text as input for TTS generation
      });

      // Retry if the model is still loading (service unavailable)
      if (response.status === 503) {
        console.log(`Attempt ${attempt + 1}: Model is loading, retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the specified delay before retrying
        continue; // Retry after delay
      }

      // If the response is not ok, throw an error with the details
      if (!response.ok) {
        const errorData = await response.json(); // Capture error details from the response
        throw new Error(`Request Failed: ${errorData.error || 'Unknown error'}`);
      }

      // Fetch audio data as an ArrayBuffer and return it
      return await response.arrayBuffer();

    } catch (error) {
      if (attempt === retryCount - 1) {
        throw error; // After all retries, throw the error to be handled by the caller
      }
    }
  }
};

export async function POST(req) {
  const { text, id } = await req.json(); // Parse the request body to get text and id

  // Create a Firebase storage reference for the MP3 file using the provided id
  const storageRef = ref(storage, `Link-O-Matic/${id}.mp3`);

  // Hugging Face API key (retrieved from environment variables)
  const apiKey = process.env.HUGGING_FACE_API_KEY;

  try {
    // Fetch the audio from Hugging Face with retry logic if the model is still loading
    const audioData = await fetchTTS(text, apiKey);

    // Convert the ArrayBuffer (binary audio data) to a Node.js Buffer for Firebase upload
    const buffer = Buffer.from(audioData);

    // Upload the MP3 buffer to Firebase Storage with the appropriate content type
    await uploadBytes(storageRef, buffer, { contentType: 'audio/mp3' });

    // Retrieve the public download URL of the uploaded MP3 file
    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl); // Log the download URL for debugging purposes

    // Return the download URL in the response
    return NextResponse.json({ result: downloadUrl });

  } catch (error) {
    // Log the error and return the error message in the response
    console.error('Error generating audio:', error);
    return NextResponse.json({ Error: 'Failed to generate speech', details: error.message });
  }
}
