import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'


function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>
    <AlertDialogContent className="bg-black border-gray-100">
       <AlertDialogTitle className="text-white">Loading</AlertDialogTitle>
       <div className="flex flex-col items-center my-10 justify-center" >
        <Image src={'/loading.gif'} alt="loading" width='200' height='200'></Image>
        <h2 className="text-white">Caution:Do not Refresh! Generating Video</h2>
       </div>
    </AlertDialogContent>
  </AlertDialog>  
  )
}

export default CustomLoading
