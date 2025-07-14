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
