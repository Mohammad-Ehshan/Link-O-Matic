// // 'use client';
// // import { useState } from 'react';

// // export default function WebScraper() {
// //   const [url, setUrl] = useState('');
// //   const [data, setData] = useState('');

// //   const getDownload = async () => {
// //     // Fetch the URL data by sending the user-entered URL
// //     const res = await fetch(`http://localhost:3000/api/getDownloads?url=${encodeURIComponent(url)}`);
    
// //     if (!res.ok) {
// //       const errorData = await res.json();
// //       console.error("Error fetching data:", errorData.error);
// //       return;
// //     }

// //     const { text } = await res.json();
// //     setData(text);
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={url}
// //         onChange={(e) => setUrl(e.target.value)}
// //         placeholder="Enter website URL"
// //         className="border p-2"
// //       />
// //       <button onClick={getDownload} className="bg-blue-500 text-white p-2 ml-2">
// //         Scrape
// //       </button>
// //       <div className="mt-4">
// //         <h2>Scraped Content:</h2>
// //         <pre>{data}</pre>
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';
// import { useState } from 'react';

// export default function WebScraper() {
//   const [url, setUrl] = useState('');
//   const [data, setData] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State to manage loading status
//   const [error, setError] = useState(''); // State to manage errors

//   const getDownload = async () => {
//     setIsLoading(true); // Set loading state
//     setError(''); // Reset any previous error

//     try {
//       // Fetch the URL data by sending the user-entered URL
//       const res = await fetch(`http://localhost:3000/api/getDownloads?url=${encodeURIComponent(url)}`);
//       console.log(res)
      
//       if (!res.ok) {
//         const errorData = await res.json();
//         setError(`Error fetching data: ${errorData.error}`);
//         console.error("Error fetching data:", errorData.error);
//         return;
//       }

//       const { summary } = await res.json(); // Update to access summary instead of text
//       setData(summary); // Store the summarized data
//     } catch (err) {
//       setError(`Error: ${err.message}`);
//       console.error("Fetch error:", err);
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl mb-4">Web Scraper and Summarizer</h1>
//       <input
//         type="text"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter website URL"
//         className="border p-2 w-full"
//       />
//       <button onClick={getDownload} className="bg-blue-500 text-white p-2 mt-2">
//         Scrape
//       </button>

//       {isLoading && <p className="mt-4">Loading...</p>} {/* Loading indicator */}

//       {error && <p className="text-red-500 mt-4">{error}</p>} {/* Error message */}

//       <div className="mt-4">
//         <h2>Summarized Content:</h2>
//         <pre className="border p-4 whitespace-pre-wrap">{data}</pre> {/* Display summarized data */}
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
    setData(''); // Clear previous data

    try {
      // Fetch the URL data by sending the user-entered URL
      const res = await fetch(`http://localhost:3000/api/get-summary?url=${encodeURIComponent(url)}`);
      
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

  // Function to reset the URL and data
  const handleReset = () => {
    setUrl('');
    setData('');
    setError('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Web Scraper & Summarizer</h1>
      
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        className="border p-2 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <div className="flex justify-between">
        <button
          onClick={getDownload}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-lg w-full mr-2"
          disabled={!url || isLoading}
        >
          {isLoading ? 'Scraping...' : 'Scrape'}
        </button>
        
        <button
          onClick={handleReset}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold p-2 rounded-lg w-full"
        >
          Reset
        </button>
      </div>

      {isLoading && (
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div> {/* Loading spinner */}
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Error message */}

      {data && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">Summarized Content:</h2>
          <pre className="border p-4 bg-gray-50 rounded-lg whitespace-pre-wrap">{data}</pre> {/* Display summarized data */}
        </div>
      )}
    </div>
  );
}
