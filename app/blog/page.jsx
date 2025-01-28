import Link from 'next/link'

function BlogPost({ title, excerpt, date, slug }) {
  return (
    <article className="bg-[#1A2337] p-6 rounded-lg shadow-lg border border-gray-800">
      <h2 className="text-2xl font-semibold mb-2 text-[#8A89FF]">
        <Link href={`/blog/${slug}`} className="hover:text-[#A5A4FF]">
          {title}
        </Link>
      </h2>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span>{date}</span>
        <Link href={`/blog/${slug}`} className="text-[#8A89FF] hover:text-[#A5A4FF]">
          Read more
        </Link>
      </div>
    </article>
  )
}

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">AI Video Conversion Blog</h1>
      <div className="space-y-8">
        <BlogPost
          title="The Future of AI in Video Creation"
          excerpt="Explore how artificial intelligence is revolutionizing the way we create and consume video content."
          date="June 15, 2024"
          slug="future-of-ai-video-creation"
        />
        <BlogPost
          title="5 Ways AI Can Enhance Your Content Strategy"
          excerpt="Discover innovative ways to leverage AI-powered video conversion in your content marketing efforts."
          date="June 10, 2024"
          slug="ai-enhance-content-strategy"
        />
        <BlogPost
          title="Understanding AI Video Analytics"
          excerpt="Learn how to interpret and act on the insights provided by AI-driven video performance analytics."
          date="June 5, 2024"
          slug="understanding-ai-video-analytics"
        />
        <BlogPost
          title="The Role of Natural Language Processing in Video Creation"
          excerpt="Dive into how NLP is enabling more accurate and context-aware video content generation from web pages."
          date="May 30, 2024"
          slug="nlp-in-video-creation"
        />
      </div>
    </div>
  )
}

