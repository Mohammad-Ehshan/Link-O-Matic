import { NextResponse } from "next/server";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/FirebaseConfig'; // Import Firebase storage instance

export async function POST(req) {
  try {
    const { prompt } = await req.json(); // Get prompt from request body

      // Define the API URL for Hugging Face
    const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"; //time
    // const API_URL =  "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";//quality

    // Create the request options for Hugging Face API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`, // Use your Hugging Face API token
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }), // Send the prompt for image generation
    });

    // Check if the response is okay
    if (!response.ok) {
      const errorData = await response.json(); // Capture error details from the response
      throw new Error(`Request failed: ${errorData.error || 'Unknown error'}`);
    }

    // Fetch the binary image data (blob)
    const imageBlob = await response.blob();

    // Convert Blob to ArrayBuffer
    const arrayBuffer = await imageBlob.arrayBuffer();

    // Convert ArrayBuffer to Node.js Buffer for uploading to Firebase
    const buffer = Buffer.from(arrayBuffer);

    // Use Date.now() to create a unique filename based on the current timestamp
    const timestamp = Date.now(); // Get current timestamp
    const storageRef = ref(storage, `Link-O-Matic/${timestamp}.png`); // Use timestamp in the filename

    // Upload the image buffer to Firebase Storage with the appropriate content type
    await uploadBytes(storageRef, buffer, { contentType: 'image/png' });

    // Retrieve the public download URL of the uploaded image file
    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl); // Log the download URL for debugging purposes

    // Return the download URL to the frontend
    return NextResponse.json({ result: downloadUrl });
  } catch (error) {
    console.error('Error generating image:', error); // Log any errors that occur
    return NextResponse.json({ error: 'Failed to generate image', details: error.message }); // Return error response
  }
}

