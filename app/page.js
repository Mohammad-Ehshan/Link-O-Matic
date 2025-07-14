"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Users  as UsersIcon,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserButton,useUser } from "@clerk/nextjs"
import { db } from "@/configs/db"
import { Users } from "@/configs/schema"
import { eq } from "drizzle-orm"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const useCases = [
  {
    title: "Students",
    description: "Transform research articles into engaging video summaries",
    icon: "🎓",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "YouTubers",
    description: "Create content from trending articles and news",
    icon: "📹",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Marketers",
    description: "Turn blog posts into compelling video ads",
    icon: "📈",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Educators",
    description: "Convert educational content into visual lessons",
    icon: "👨‍🏫",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Content Creators",
    description: "Repurpose written content into video format",
    icon: "✨",
    gradient: "from-orange-500 to-yellow-500",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "LinkOMatic transformed my content creation workflow. I can now turn any article into a professional video in minutes!",
  },
  {
    name: "Mike Rodriguez",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "The AI-generated videos are incredibly high quality. Our engagement rates have increased by 300%.",
  },
  {
    name: "Dr. Emily Watson",
    role: "Educator",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Perfect for creating educational content. My students love the visual explanations of complex topics.",
  },
]

const steps = [
  {
    number: "01",
    title: "Paste URL",
    description: "Simply paste any article or blog URL",
    icon: "🔗",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI summarizes and creates a script using Gemini",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Content Generation",
    description: "Generate audio narration and custom images",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Video Creation",
    description: "Remotion combines everything into a cinematic video",
    icon: "🎬",
  },
]

export default function HomePage() {
  const [url, setUrl] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { user } = useUser()
   const [dots, setDots] = useState([])

  useEffect(() => {
    user && isNewUser()
  }, [user])

  useEffect(() => {
    const generated = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setDots(generated)
  }, [])

  const isNewUser = async () => {
    const result = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))

    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl, 
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
       <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {dots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: dot.left,
                top: dot.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: dot.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: dot.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Video Generation
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Turn any URL into a{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cinematic AI Video
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform articles, blogs, and web content into professional videos with AI-generated scripts, voiceovers,
              and visuals.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <Input
                  placeholder="Paste any URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm"
                />
              </div>
              <Link href="/dashboard/create-new">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Generate Video
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-8 text-sm text-gray-400"
            >
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-2 text-green-400" />
                No signup required
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Generate in 2 minutes
              </div>
              <div className="flex items-center">
                <UsersIcon className="w-4 h-4 mr-2 text-blue-400" />
                10k+ videos created
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Youtube Video  */}
       <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            See LinkOMatic in Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Watch how we transform any URL into stunning AI-generated videos
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              Try It Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI pipeline transforms any URL into a professional video in just four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-sm text-cyan-400 font-semibold mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Everyone</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From students to marketers, LinkOMatic empowers creators across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${useCase.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Creators</span>
            </h2>
          </motion.div>

          <div className="relative">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl text-white mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="text-white hover:bg-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already transforming their content with LinkOMatic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/create-new">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Start Creating Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/premium">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  View Premium Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
