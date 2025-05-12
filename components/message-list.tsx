import { MessageCard } from "./message-card"
import { Card, CardContent } from "@/components/ui/card"

export interface Message {
  id: string
  sender: string
  timestamp: Date
  preview: string
  read: boolean
}

interface MessageListProps {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <Card className="border-muted/20 shadow-lg shadow-black/10">
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground">No missed messages. You're all caught up!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {messages.map((message, index) => (
        <div key={message.id} className="animate-slideUp" style={{ animationDelay: `${index * 0.05}s` }}>
          <MessageCard message={message} />
        </div>
      ))}
    </div>
  )
}
