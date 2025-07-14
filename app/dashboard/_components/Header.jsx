"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { Zap } from 'lucide-react'

function Header() {
  return (
    <nav className="relative z-50 p-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <Link href="/" className="text-2xl font-bold text-white">LinkOMatic</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-6"
          >
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/premium" className="text-gray-300 hover:text-white transition-colors">
              Premium
            </Link>
            <Link href="/dashboard/create-new" >
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              Get Started
            </Button>
            </Link>
            <UserButton/>
          </motion.div>
        </div>
      </nav>
  )
}

export default Header
