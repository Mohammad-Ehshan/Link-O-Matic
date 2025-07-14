"use client"

import { motion } from "framer-motion"
import { Check, Crown, Zap, Star, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"


const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for getting started",
    features: [
      "5 videos per month",
      "Standard quality (720p)",
      "Basic image styles",
      "Standard processing speed",
      "Community support",
    ],
    limitations: ["Watermark on videos", "Limited customization", "No priority support"],
    popular: false,
    cta: "Current Plan",
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    description: "For content creators and professionals",
    features: [
      "50 videos per month",
      "HD quality (1080p)",
      "All image styles",
      "3x faster processing",
      "Priority support",
      "No watermark",
      "Custom branding",
      "Advanced editing tools",
      "Bulk generation",
    ],
    limitations: [],
    popular: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    description: "For teams and businesses",
    features: [
      "Unlimited videos",
      "4K quality",
      "Custom image styles",
      "5x faster processing",
      "Dedicated support",
      "White-label solution",
      "API access",
      "Team collaboration",
      "Advanced analytics",
      "Custom integrations",
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
  },
]

const testimonials = [
  {
    name: "Alex Thompson",
    role: "YouTuber",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "LinkOMatic Pro has revolutionized my content creation. The HD quality and faster processing are game-changers.",
    plan: "Pro",
  },
  {
    name: "Maria Garcia",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The Enterprise plan gives us everything we need for our marketing campaigns. The API integration is fantastic.",
    plan: "Enterprise",
  },
  {
    name: "David Kim",
    role: "Educator",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Pro features help me create better educational content for my students. Worth every penny.",
    plan: "Pro",
  },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Generate videos up to 5x faster with our premium infrastructure",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Crown,
    title: "Premium Quality",
    description: "Export in 4K resolution with professional-grade audio",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Advanced AI Models",
    description: "Access to the latest AI models for better content generation",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Star,
    title: "Priority Support",
    description: "24/7 dedicated support with response times under 1 hour",
    gradient: "from-green-400 to-emerald-500",
  },
]

export default function PremiumPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Unlock Premium Features
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Unlock{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Cinematic Pro
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Take your video creation to the next level with premium features, faster processing, and unlimited
            possibilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-cyan-500 data-[state=checked]:to-blue-600"
            />
            <span className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}>
              Yearly
              <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">Save 17%</Badge>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? "scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-500/60 to-pink-500/50 border-purple-500/30"
                    : "bg-white/5 border-white/10"
                } backdrop-blur-sm hover:bg-white/10 transition-all duration-300`}
              >
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-white">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                      {plan.price.monthly > 0 && (
                        <span className="text-lg text-gray-400 font-normal">/{isYearly ? "year" : "month"}</span>
                      )}
                    </div>
                    {isYearly && plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-400">
                        ${(plan.price.yearly / 12).toFixed(0)}/month billed annually
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full h-12 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                        : plan.name === "Free"
                          ? "bg-gray-600 hover:bg-gray-700"
                          : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    }`}
                    disabled={plan.name === "Free"}
                  >
                    {plan.cta}
                    {plan.name !== "Free" && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Premium{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock advanced capabilities that take your video creation to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Premium Users
              </span>
            </h2>
            <p className="text-xl text-gray-300">See what our premium subscribers are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</blockquote>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                          <div className="text-gray-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
                        {testimonial.plan}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/50 to-pink-500/50 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Premium?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who have upgraded their video creation workflow with LinkOMatic Pro
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Upgrade to Pro
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Contact Sales
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-800">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-black" />
                  30-day money back guarantee
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-black" />
                  Cancel anytime
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-black" />
                  Instant activation
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
