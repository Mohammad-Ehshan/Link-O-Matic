/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMENI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

 export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "const prompt = `Generate a script for a 30 second video. Use the information from the URL https://en.wikipedia.org/wiki/Virat_Kohli. Use the user-provided prompt: \"sports video\". Include realistic image prompts for each scene and provide the result in JSON format with imagePrompt and contentText fields only.`;\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"imagePrompt\": \"A dramatic close-up of Virat Kohli's face, focused and determined, with the Indian national cricket team jersey visible\",\n    \"contentText\": \"Virat Kohli, one of the greatest batsmen of all time.\"\n  },\n  {\n    \"imagePrompt\": \"A montage of quick cuts showing Kohli hitting powerful shots during a cricket match, with the crowd cheering wildly\",\n    \"contentText\": \"His aggressive style and relentless pursuit of excellence have made him a legend.\"\n  },\n  {\n    \"imagePrompt\": \"A shot of Kohli celebrating a victory with his teammates, lifting the trophy high in the air\",\n    \"contentText\": \"Leading the Indian team to numerous triumphs...\"\n  },\n  {\n    \"imagePrompt\": \"A close-up shot of Kohli's face, showing determination and focus as he prepares for a crucial match\",\n    \"contentText\": \"Kohli continues to inspire millions with his passion for the game.\"\n  }\n]\n```"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "const prompt = `Generate a script for a 60 second video. Use the information from the URL None. Use the user-provided prompt: \"Story making on the topic elephants and rat\". Include animation image prompts for each scene and provide the result in JSON format with imagePrompt and contentText fields only.`;\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"imagePrompt\": \"A lush green jungle scene with a large, majestic elephant standing in the foreground, looking thoughtful\",\n    \"contentText\": \"In a vibrant jungle, lived a wise old elephant named Elara.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up shot of a tiny rat, with big curious eyes, scurrying through the jungle floor\",\n    \"contentText\": \"One day, she met a little rat named Pip, who was always getting into trouble.\"\n  },\n  {\n    \"imagePrompt\": \"Elara gently using her trunk to pick up Pip, who is looking up at her in awe\",\n    \"contentText\": \"Elara, being kind, decided to teach Pip a lesson.\"\n  },\n  {\n    \"imagePrompt\": \"Pip, now dressed in a miniature safari outfit, riding on Elara's back as they explore the jungle\",\n    \"contentText\": \"She took him on an adventure, showing him the wonders of the jungle.\"\n  },\n  {\n    \"imagePrompt\": \"A playful scene with Elara and Pip having fun, with Elara using her trunk to playfully spray water on Pip\",\n    \"contentText\": \"Pip, now a little braver, was having the time of his life!\"\n  },\n  {\n    \"imagePrompt\": \"Elara and Pip standing side-by-side, looking at a majestic sunset over the jungle\",\n    \"contentText\": \"Elara taught Pip to appreciate the beauty of the jungle and the importance of being cautious.\"\n  },\n  {\n    \"imagePrompt\": \"A heartwarming scene of Pip, now a little wiser, scurrying away in the jungle, waving goodbye to Elara\",\n    \"contentText\": \"And Pip, forever changed by his experience, went on to live a happy and adventurous life in the jungle.\"\n  }\n]\n```"},
        ],
      },
    ],
  });

