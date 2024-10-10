'use client'
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { UserButton, useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import {useEffect} from 'react'

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
   hello
   <UserButton/>
   </>
  );
}
