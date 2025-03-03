"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mic, Send } from "lucide-react"

interface AskOmiModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AskOmiModal({ isOpen, onClose }: AskOmiModalProps) {
  const [input, setInput] = useState("")
  const [conversation, setConversation] = useState<{ role: "user" | "ai"; content: string }[]>([])

  const handleSend = () => {
    if (input.trim()) {
      setConversation([...conversation, { role: "user", content: input }])
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          { role: "ai", content: "I'm processing your request. How can I assist you further?" },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background text-foreground">
        <DialogHeader>
          <DialogTitle className="text-foreground">Ask Omi</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "ai" && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Omi" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user" ? "bg-accent text-background" : "bg-secondary text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-secondary">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-accent hover:bg-accent/20">
                <Mic className="h-4 w-4 text-accent" />
              </Button>
              <Input
                placeholder="Ask Omi anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border-accent focus-visible:ring-accent bg-secondary text-foreground"
              />
              <Button size="icon" className="rounded-full bg-accent hover:bg-accent/90" onClick={handleSend}>
                <Send className="h-4 w-4 text-background" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

