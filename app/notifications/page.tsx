"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Check, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Omi Tip",
      message: "Ask Richard about his first 10k sales. He has insights!",
      time: "Just now",
      read: false,
      type: "tip",
    },
    {
      id: 2,
      title: "Meeting Prep",
      message: "Your meeting with Sarah is in 30 minutes. Here are some talking points.",
      time: "30 min ago",
      read: false,
      type: "meeting",
    },
    {
      id: 3,
      title: "Conversation Insight",
      message: "You've been interrupting more than usual today. Try active listening.",
      time: "2 hours ago",
      read: true,
      type: "insight",
    },
    {
      id: 4,
      title: "Growth Opportunity",
      message: "I noticed a pattern in your leadership style. Want to discuss?",
      time: "Yesterday",
      read: true,
      type: "growth",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  return (
    <main className="flex flex-col h-full pb-16 overflow-y-auto">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-semibold">Notifications</h1>
          <Button variant="ghost" size="sm">
            Mark all read
          </Button>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Floating notification example */}
        <div className="relative mb-8">
          <div className="absolute -top-1 -left-1 w-full h-full rounded-lg bg-neuralpurple/10 animate-pulse"></div>
          <Card className="glassmorphic border-neuralpurple/20 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 border-2 border-omiblue ai-glow">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Omi" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">🧠 Omi Tip</h3>
                    <span className="text-xs text-muted-foreground">Now</span>
                  </div>
                  <p className="text-sm mt-1">
                    Your team seems stressed about the deadline. Consider checking in individually.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="h-8 px-3 text-xs bg-omiblue hover:bg-omiblue/90">
                      Follow Advice
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                      Ask for Details
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <X size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`overflow-hidden ${notification.read ? "bg-card" : "gradient-bg"}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.read
                        ? "bg-secondary"
                        : notification.type === "tip"
                          ? "bg-energeticamber/20"
                          : notification.type === "insight"
                            ? "bg-vibrantmint/20"
                            : notification.type === "meeting"
                              ? "bg-omiblue/20"
                              : "bg-neuralpurple/20"
                    }`}
                  >
                    <Bell
                      size={18}
                      className={
                        notification.read
                          ? "text-muted-foreground"
                          : notification.type === "tip"
                            ? "text-energeticamber"
                            : notification.type === "insight"
                              ? "text-vibrantmint"
                              : notification.type === "meeting"
                                ? "text-omiblue"
                                : "text-neuralpurple"
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{notification.title}</h3>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm mt-1">{notification.message}</p>
                    <div className="flex justify-between items-center mt-3">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        View Details
                      </Button>
                      {!notification.read && (
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <X size={14} />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

