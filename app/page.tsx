import { MessageList } from "@/components/message-list"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

// Mock data for messages
const mockMessages = [
  {
    id: "1",
    sender: "Alex Johnson",
    timestamp: new Date("2025-05-10T14:30:00"),
    preview: "Hey, did you get a chance to look at the proposal I sent last week? Would love your feedback.",
    read: false,
  },
  {
    id: "2",
    sender: "Sam Taylor",
    timestamp: new Date("2025-05-09T09:15:00"),
    preview: "Are we still on for coffee this weekend? Let me know what time works for you.",
    read: false,
  },
  {
    id: "3",
    sender: "Jamie Smith",
    timestamp: new Date("2025-05-08T16:45:00"),
    preview:
      "I found this article about that topic we discussed. Thought you might find it interesting: https://example.com/article",
    read: false,
  },
  {
    id: "4",
    sender: "Morgan Lee",
    timestamp: new Date("2025-05-07T11:20:00"),
    preview: "Can you send me the notes from yesterday's meeting? I had to leave early and missed the last part.",
    read: false,
  },
  {
    id: "5",
    sender: "Casey Wilson",
    timestamp: new Date("2025-05-06T20:05:00"),
    preview: "Happy birthday! Hope you had an amazing day. Let's celebrate when you're free!",
    read: false,
  },
  {
    id: "6",
    sender: "Jordan Parker",
    timestamp: new Date("2025-05-05T13:40:00"),
    preview: "Did you see the email from HR about the new policy? What do you think about it?",
    read: false,
  },
  {
    id: "7",
    sender: "Taylor Reed",
    timestamp: new Date("2025-05-04T08:55:00"),
    preview: "I'm planning a trip to the coast next month. Would you be interested in joining?",
    read: false,
  },
]

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 p-5 md:p-6 bg-gradient-to-br from-background to-background/95">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 animate-fadeIn">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Missed Messages</h1>
              <p className="text-sm text-muted-foreground">
                Messages you haven't responded to yet. Generate AI-powered replies with a single click.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3"></div>
            </div>
            <MessageList messages={mockMessages} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
