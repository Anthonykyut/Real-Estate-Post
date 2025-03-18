"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DialogDemo } from "@/components/DialogDemo"
import CardContainer from "@/components/CardContainer"
import Profile from "@/components/Profile"


export default function HomePage() {
  const [open, setOpen] = useState(false)

  return (
    
    <div className="flex justify-center gap-10 p-10 overflow-hidden h-screen w-screen">
        <div>
            <Profile/>
        </div>
        <div className="Body justify-center items-center flex ">

        <CardContainer></CardContainer>

        </div>
        
        <div className="w-[18vw]">
            <Button onClick={() => setOpen(true)}>Add Post</Button>
            <DialogDemo open={open} setOpen={setOpen} />
        </div>

    </div>
  

  )
}
