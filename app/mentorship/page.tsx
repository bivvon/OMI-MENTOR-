"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function MentorshipPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      content: "I have a difficult conversation coming up with a team member who's been underperforming. Any advice?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "ai",
      content: "That's a challenging situation. Here are some tips for your conversation:",
      time: "10:31 AM",
    },
    {
      id: 3,
      sender: "ai",
      content:
        "1. Start with positive feedback\n2. Be specific about performance issues\n3. Listen actively to their perspective\n4. Collaborate on an improvement plan\n5. End with encouragement",
      time: "10:31 AM",
      isCard: true,
    },
    {
      id: 4,
      sender: "user",
      content: "That's helpful. How do I handle it if they get defensive?",
      time: "10:33 AM",
    },
    {
      id: 5,
      sender: "ai",
      content: "If they get defensive, try these approaches:",
      time: "10:34 AM",
      typing: true,
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [feedbackVisible, setFeedbackVisible] = useState(false)

  const handleSendFeedback = (isPositive: boolean) => {
    // Here you would typically send the feedback to your backend
    console.log(`Feedback sent: ${isPositive ? "positive" : "negative"}`)
    setFeedbackVisible(false)
  }

  return (
    <main className="flex flex-col h-full pb-16">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-secondary">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-accent ai-glow">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Omi" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold text-foreground">OmiMentor</h1>
              <p className="text-xs text-muted-foreground">Your AI mentor is listening</p>
            </div>
          </div>

          <Tabs defaultValue="deep-dive" className="mt-4">
            <TabsList className="grid grid-cols-3 w-full bg-secondary">
              <TabsTrigger
                value="quick-tips"
                className="data-[state=active]:bg-accent data-[state=active]:text-background"
              >
                Quick Tips
              </TabsTrigger>
              <TabsTrigger
                value="deep-dive"
                className="data-[state=active]:bg-accent data-[state=active]:text-background"
              >
                Deep Dive
              </TabsTrigger>
              <TabsTrigger
                value="simulation"
                className="data-[state=active]:bg-accent data-[state=active]:text-background"
              >
                Simulation
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8 mr-2 mt-1">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Omi" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
            )}

            <div
              className={`max-w-[80%] ${
                message.sender === "user"
                  ? "bg-accent text-background"
                  : message.isCard
                    ? "bg-secondary text-foreground"
                    : "bg-secondary text-foreground"
              } rounded-lg p-3`}
            >
              {message.typing ? (
                <p className="text-sm typing-animation">If they get defensive, try these approaches</p>
              ) : (
                <>
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  {message.sender === "ai" && !message.isCard && (
                    <div className="mt-2 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-muted-foreground hover:text-accent"
                        onClick={() => setFeedbackVisible(true)}
                      >
                        Was this helpful?
                      </Button>
                    </div>
                  )}
                </>
              )}
              <span className="text-xs opacity-70 mt-1 block text-right">{message.time}</span>
            </div>

            {message.sender === "user" && (
              <Avatar className="h-8 w-8 ml-2 mt-1">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>BV</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {feedbackVisible && (
          <div className="flex justify-center gap-2 mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSendFeedback(true)}
              className="border-accent hover:bg-accent/20 text-accent"
            >
              👍 Yes
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSendFeedback(false)}
              className="border-accent hover:bg-accent/20 text-accent"
            >
              👎 No
            </Button>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-secondary bg-background">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full border-accent hover:bg-accent/20">
            <Mic size={18} className="text-accent" />
          </Button>
          <Input
            placeholder="Type your message..."
            className="flex-1 border-accent focus-visible:ring-accent bg-secondary text-foreground"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button size="icon" className="rounded-full bg-accent hover:bg-accent/90">
            <Send size={18} className="text-background" />
          </Button>
        </div>
      </div>
    </main>
  )
}

