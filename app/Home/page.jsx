// 'use client';
// import { useState } from 'react';

// export default function WebScraper() {
//   const [url, setUrl] = useState('');
//   const [data, setData] = useState('');

//   const getDownload = async () => {
//     // Fetch the URL data by sending the user-entered URL
//     const res = await fetch(`http://localhost:3000/api/getDownloads?url=${encodeURIComponent(url)}`);
    
//     if (!res.ok) {
//       const errorData = await res.json();
//       console.error("Error fetching data:", errorData.error);
//       return;
//     }

//     const { text } = await res.json();
//     setData(text);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter website URL"
//         className="border p-2"
//       />
//       <button onClick={getDownload} className="bg-blue-500 text-white p-2 ml-2">
//         Scrape
//       </button>
//       <div className="mt-4">
//         <h2>Scraped Content:</h2>
//         <pre>{data}</pre>
//       </div>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';

export default function WebScraper() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status
  const [error, setError] = useState(''); // State to manage errors

  const getDownload = async () => {
    setIsLoading(true); // Set loading state
    setError(''); // Reset any previous error

    try {
      // Fetch the URL data by sending the user-entered URL
      const res = await fetch(`http://localhost:3000/api/getDownloads?url=${encodeURIComponent(url)}`);
      
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
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Web Scraper and Summarizer</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        className="border p-2 w-full"
      />
      <button onClick={getDownload} className="bg-blue-500 text-white p-2 mt-2">
        Scrape
      </button>

      {isLoading && <p className="mt-4">Loading...</p>} {/* Loading indicator */}

      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Error message */}

      <div className="mt-4">
        <h2>Summarized Content:</h2>
        <pre className="border p-4 whitespace-pre-wrap">{data}</pre> {/* Display summarized data */}
      </div>
    </div>
  );
}
