import { StaticImageData } from "next/image"
import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CardPostProps {
  title: string
  description: string
  imageSrc: StaticImageData
}

const CardPost: React.FC<CardPostProps> = ({ title, description, imageSrc }) => {
  const [likes, setLikes] = useState(0)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<string[]>([])

  const handleLike = () => setLikes((prev) => prev + 1)

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments((prev) => [...prev, comment])
      setComment("")
    }
  }

  return (
    <div className="bg-gray-300 w-full p-4 rounded-lg shadow-md">
      <h2 className="Title text-xl font-bold">{title}</h2>
      <h4 className="Description text-gray-700">{description}</h4>
      <Image src={imageSrc} alt={title} className="w-full max-h-[50vh] rounded-md my-2" />

      {/* Like Button */}
      <div className="flex items-center gap-2 mt-2">
        <Button onClick={handleLike} variant="outline">
          👍 Like ({likes})
        </Button>
      </div>

      {/* Comment Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <div className="flex gap-2 mt-2">
          <Input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <Button onClick={handleAddComment}>Send</Button>
        </div>
        <ul className="mt-2">
          {comments.map((c, index) => (
            <li key={index} className="border-b py-1 text-gray-800">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardPost
