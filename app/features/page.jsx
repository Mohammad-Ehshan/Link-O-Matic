import { CheckCircle } from 'lucide-react'

function FeatureCard({ title, description }) {
  return (
    <div className="bg-[#1A2337] p-6 rounded-lg shadow-lg border border-gray-800">
      <h3 className="text-xl font-semibold mb-2 text-[#8A89FF] flex items-center">
        <CheckCircle className="h-5 w-5 mr-2 text-[#8A89FF]" />
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">Premium AI Features</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          title="Advanced AI Analysis"
          description="Our premium AI dives deeper into your web content, understanding context and sentiment for more accurate video representation."
        />
        <FeatureCard
          title="Custom Branding"
          description="Incorporate your logo, color scheme, and brand voice into the AI-generated videos for a consistent brand experience."
        />
        <FeatureCard
          title="Multi-language Support"
          description="AI-powered translation and localization of your videos for global audience reach."
        />
        <FeatureCard
          title="Interactive Elements"
          description="Add AI-suggested interactive elements to your videos, increasing engagement and conversion rates."
        />
        <FeatureCard
          title="SEO Optimization"
          description="AI-driven SEO suggestions for your video titles, descriptions, and tags to improve discoverability."
        />
        <FeatureCard
          title="Analytics Dashboard"
          description="Gain insights into video performance with our AI-powered analytics, helping you refine your video strategy."
        />
      </div>
    </div>
  )
}

