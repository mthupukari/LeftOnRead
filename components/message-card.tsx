"use client"

import type { Message } from "./message-list"
import { formatDistanceToNow } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Sparkles } from "lucide-react"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface MessageCardProps {
  message: Message
}

export function MessageCard({ message }: MessageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleGenerateReply = () => {
    // This would connect to an AI service in the future
    console.log(`Generating reply for message: ${message.id}`)
    alert("Reply generation would be implemented here with AI integration")
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 border-muted/20 ${
        isHovered ? "shadow-lg shadow-purple-500/5 border-purple-500/30" : "shadow-md shadow-black/10"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left transition-transform duration-300"
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
      />
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="font-semibold text-primary text-base truncate">{message.sender}</h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">{formatDistanceToNow(message.timestamp, { addSuffix: true })}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">{message.preview}</p>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  onClick={handleGenerateReply}
                  className={`flex-shrink-0 h-9 w-9 rounded-full transition-all duration-300 bg-gradient-to-r ${
                    isHovered
                      ? "from-purple-600 to-blue-600 shadow-lg shadow-purple-500/10"
                      : "from-purple-700 to-blue-700"
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Generate AI Reply</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
