'use client'
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { UserButton, useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import {useEffect} from 'react'

//new code
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Video } from 'lucide-react'

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#1A2337] p-6 rounded-lg shadow-lg border border-gray-800">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#8A89FF]">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default function Home() {

  const {user}=useUser();

  useEffect(()=>{
    user&&isNewUser();
  },[user]);

  const isNewUser=async()=>{
    const result=await db.select().from(Users).where(eq(Users.email,user?.primaryEmailAddress?.emailAddress));

    if(!result[0]){
      await db.insert(Users).values({
        name:user.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        imageUl:user?.imageUrl
      })
    }
  }

  return (
   <>
   {/* hello
   <UserButton/> */}

   {/* //new code  */}
     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-144px)]">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#8A89FF] to-[#A5A4FF] text-transparent bg-clip-text">
        Transform Web Pages into Captivating Videos
      </h1>
      <p className="text-xl md:text-2xl text-center mb-8 text-gray-400 ">
        Turn any website into an engaging animated video with just one click
      </p>
      <Link href="/dashboard/create-new">
        <Button size="lg" className="bg-[#8A89FF] hover:bg-[#7170FF] text-white">
          Convert to Video <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <FeatureCard 
          icon={<Cpu className="h-12 w-12 text-blue-400" />}
          title="AI-Powered Conversion"
          description="Our advanced AI algorithms analyze web content and create stunning video representations."
        />
        <FeatureCard 
          icon={<Zap className="h-12 w-12 text-blue-400" />}
          title="Lightning Fast"
          description="Get your AI-generated video in minutes, not hours, thanks to our optimized processing."
        />
        <FeatureCard 
          icon={<Video className="h-12 w-12 text-blue-400" />}
          title="Custom Animations"
          description="AI-driven animations that bring your web content to life in unique and engaging ways."
        />
      </div>
    </div>

   </>
  );
}
