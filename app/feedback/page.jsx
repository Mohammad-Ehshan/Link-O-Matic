'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from 'lucide-react'

function Testimonial({ name, rating, comment }) {
  return (
    <div className="bg-[#1A2337] p-4 rounded-lg border border-gray-800">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-[#8A89FF] mr-2">{name}</span>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 text-[#8A89FF]" />
          ))}
        </div>
      </div>
      <p className="text-gray-400">{comment}</p>
    </div>
  )
}

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ rating, feedback })
    alert('Thank you for your feedback!')
    setRating(0)
    setFeedback('')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">User Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-blue-300 mb-2">
            Rate your experience
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  rating >= star ? 'text-yellow-400' : 'text-blue-600'
                }`}
              >
                <StarIcon className="h-8 w-8" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-blue-300 mb-2">
            Your feedback
          </label>
          <Textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            placeholder="Tell us about your experience..."
            className="w-full bg-[#1A2337] border-gray-800 text-white placeholder-gray-500 focus:border-[#8A89FF]"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-[#8A89FF] hover:bg-[#7170FF] text-white"
        >
          Submit Feedback
        </Button>
      </form>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">What Users Are Saying</h2>
        <div className="space-y-6">
          <Testimonial
            name="Alex Johnson"
            rating={5}
            comment="The AI-generated videos are incredible! It's like magic how it transforms my blog posts into engaging content."
          />
          <Testimonial
            name="Sarah Lee"
            rating={4}
            comment="Great tool for content creators. The AI suggestions for interactive elements really boosted my engagement rates."
          />
          <Testimonial
            name="Mike Brown"
            rating={5}
            comment="The multi-language support is a game-changer. I can now reach a global audience with my content."
          />
        </div>
      </div>
    </div>
  )
}

