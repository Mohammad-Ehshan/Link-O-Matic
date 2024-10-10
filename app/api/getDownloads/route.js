// import { JSDOM } from "jsdom";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get("url"); // Get the URL from the query parameters

//   if (!url) {
//     return new Response(JSON.stringify({ error: "URL is required" }), {
//       status: 400,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   try {
//     const res = await fetch(url);
//     const html = await res.text();
    
//     // You can process the HTML here if needed
//     // console.log("Fetched HTML:", html);

//     return new Response(JSON.stringify({ html }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching the URL:", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }

// import { JSDOM } from "jsdom";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get("url"); // Get the URL from the query parameters

//   if (!url) {
//     return new Response(JSON.stringify({ error: "URL is required" }), {
//       status: 400,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   try {
//     const res = await fetch(url);
//     const html = await res.text();
    
//     // Use JSDOM to parse the HTML and extract the text content
//     const dom = new JSDOM(html);

//         // Remove all script elements
//         const scriptElements = dom.window.document.querySelectorAll("script");
//         scriptElements.forEach(script => script.remove());
    
//         // Remove all style elements (optional)
//         const styleElements = dom.window.document.querySelectorAll("style");
//         styleElements.forEach(style => style.remove());
        

//     let textContent = dom.window.document.body.textContent.trim(); // Extracts the plain text
    
//     // 1. Collapse multiple newlines into two newlines to preserve paragraph separation
//     textContent = textContent.replace(/\n\s*\n+/g, '\n\n');
    
//     // 2. Remove excessive spaces but preserve newlines between paragraphs
//     textContent = textContent.replace(/[ \t]+/g, ' '); // Replace multiple spaces or tabs with a single space

//     console.log(textContent)
    
//     return new Response(JSON.stringify({ text: textContent }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching the URL:", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }


// import { JSDOM } from "jsdom";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get("url"); // Get the URL from the query parameters

//   if (!url) {
//     return new Response(JSON.stringify({ error: "URL is required" }), {
//       status: 400,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   try {
//     const res = await fetch(url);

//     // Check if the response is OK
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
//     }

//     const html = await res.text();
//     const dom = new JSDOM(html);

//     // Remove all script and style elements
//     const scriptElements = dom.window.document.querySelectorAll("script");
//     scriptElements.forEach(script => script.remove());
    
//     const styleElements = dom.window.document.querySelectorAll("style");
//     styleElements.forEach(style => style.remove());

//     // Select the main content area
//     let mainContentSet = new Set(); // Use a Set to avoid duplicate entries

//     // Attempt to get the main content from common tags
//     const contentSelectors = [
//       "article", // Common for articles
//       "main", // Often holds primary content
//       ".content", // Custom class (change as needed)
//       "#content", // Custom ID (change as needed)
//       "h1, h2, h3, p", // Headings and paragraphs
//     ];

//     contentSelectors.forEach(selector => {
//       const elements = dom.window.document.querySelectorAll(selector);
//       elements.forEach(el => {
//         const text = el.textContent.trim();
//         if (text) { // Check if the element has text content
//           mainContentSet.add(text); // Add to set to avoid duplicates
//         }
//       });
//     });

//     // Convert Set back to string and clean up the extracted text content
//     let mainContent = Array.from(mainContentSet).join("\n\n")
//       .replace(/\n\s*\n+/g, '\n\n') // Collapse multiple newlines into two
//       .replace(/[ \t]+/g, ' ') // Remove excessive spaces
//       .trim(); // Trim leading and trailing whitespace

//     // If no main content found, consider fallback
//     if (!mainContent) {
//       return new Response(JSON.stringify({ error: "No meaningful content found." }), {
//         status: 404,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     // Log or handle the content further if needed
//     console.log(mainContent);

//     return new Response(JSON.stringify({ text: mainContent }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching the URL:", error.message);
//     return new Response(JSON.stringify({ error: `Error fetching the URL: ${error.message}` }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }


// import { JSDOM } from "jsdom";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get("url"); // Get the URL from query parameters

//   if (!url) {
//     return new Response(JSON.stringify({ error: "URL is required" }), {
//       status: 400,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   try {
//     // Validate the URL
//     let validUrl;
//     try {
//       validUrl = new URL(url);
//     } catch (err) {
//       return new Response(JSON.stringify({ error: "Invalid URL format" }), {
//         status: 400,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     const res = await fetch(validUrl);

//     // Check if the response is OK
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
//     }

//     const html = await res.text();
//     const dom = new JSDOM(html);

//     // Remove all script, style, and comments elements
//     const scriptElements = dom.window.document.querySelectorAll("script, style, noscript");
//     scriptElements.forEach(script => script.remove());

//     // Remove comments from HTML
//     dom.window.document.body.innerHTML = dom.window.document.body.innerHTML.replace(/<!--[\s\S]*?-->/g, '');

//     // Select the main content area
//     let mainContentSet = new Set(); // Use a Set to avoid duplicate entries

//     // Attempt to get the main content from common tags
//     const contentSelectors = [
//       "article",  // Articles
//       "main",     // Main section
//       ".content", // Custom class for content
//       "#content", // Custom ID for content
//       "h1, h2, h3, h4, p", // Headings and paragraphs
//       "section",  // Section elements
//       ".post",    // Blog posts
//       ".entry",   // Entries for blogs
//     ];

//     contentSelectors.forEach(selector => {
//       const elements = dom.window.document.querySelectorAll(selector);
//       elements.forEach(el => {
//         const text = el.textContent.trim();
//         if (text && text.length > 50) { // Ignore short or empty content
//           mainContentSet.add(text);
//         }
//       });
//     });

//     // Convert Set back to string and clean up the extracted text content
//     let mainContent = Array.from(mainContentSet).join("\n\n")
//       .replace(/\n\s*\n+/g, '\n\n') // Collapse multiple newlines
//       .replace(/[ \t]+/g, ' ') // Remove excessive spaces
//       .trim();

//     // If no main content found, consider fallback
//     if (!mainContent) {
//       return new Response(JSON.stringify({ error: "No meaningful content found." }), {
//         status: 404,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     // Log or handle the content further if needed
//     console.log(mainContent);

//     return new Response(JSON.stringify({ text: mainContent }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching the URL:", error.message);
//     return new Response(JSON.stringify({ error: `Error fetching the URL: ${error.message}` }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }


//hugging face
import { JSDOM } from "jsdom";
import axios from "axios"; // Import Axios for making API requests

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url"); // Get the URL from query parameters

  // Check if the URL is provided
  if (!url) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // Validate the URL
    let validUrl;
    try {
      validUrl = new URL(url);
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid URL format" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const res = await fetch(validUrl);

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
    }

    const html = await res.text();
    const dom = new JSDOM(html);

    // Remove all script, style, and comments elements
    const scriptElements = dom.window.document.querySelectorAll("script, style, noscript");
    scriptElements.forEach(script => script.remove());

    // Remove comments from HTML
    dom.window.document.body.innerHTML = dom.window.document.body.innerHTML.replace(/<!--[\s\S]*?-->/g, '');

    // Select the main content area
    let mainContentSet = new Set();

    // Common content selectors
    const contentSelectors = [
      "article",
      "main",
      ".content",
      "#content",
      "h1, h2, h3, h4, p",
      "section",
      ".post",
      ".entry",
    ];

    contentSelectors.forEach(selector => {
      const elements = dom.window.document.querySelectorAll(selector);
      elements.forEach(el => {
        const text = el.textContent.trim();
        if (text && text.length > 50) {
          mainContentSet.add(text);
        }
      });
    });

    let mainContent = Array.from(mainContentSet).join("\n\n")
      .replace(/\n\s*\n+/g, '\n\n')
      .replace(/[ \t]+/g, ' ')
      .trim();

    if (!mainContent) {
      return new Response(JSON.stringify({ error: "No meaningful content found." }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Step 4: Call the Hugging Face API with the extracted content
    const hfApiUrl = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"; // Summarization model
    const hfApiKey = process.env.NEXT_PUBLIC_HUGGING_FACE; // Your Hugging Face API key

    const summaryResponse = await axios.post(
      hfApiUrl,
      {
        inputs: mainContent, // Send the extracted content
      },
      {
        headers: {
          Authorization: `Bearer ${hfApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summarizedText = summaryResponse.data[0].summary_text;

    return new Response(JSON.stringify({ summary: summarizedText }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    console.error("Error fetching or summarizing the URL:", error.message);
    return new Response(JSON.stringify({ error: `Error: ${error.message}` }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
