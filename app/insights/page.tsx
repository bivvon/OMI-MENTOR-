"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Archive, Calendar, ChevronDown, ChevronRight, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InsightsPage() {
  const insights = [
    {
      id: 1,
      title: "Leadership Style Analysis",
      date: "March 2, 2025",
      category: "Leadership",
      summary: "You've shown a democratic leadership style in team meetings. This has increased participation by 30%.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Communication Pattern",
      date: "March 1, 2025",
      category: "Communication",
      summary: "Your active listening has improved. You're asking more follow-up questions and interrupting less.",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Conflict Resolution",
      date: "February 28, 2025",
      category: "Interpersonal",
      summary: "You successfully mediated a disagreement between team members using the techniques we discussed.",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Presentation Feedback",
      date: "February 25, 2025",
      category: "Public Speaking",
      summary: "Your presentation pace was excellent. Consider adding more visual aids next time.",
      color: "bg-amber-500",
    },
  ]

  return (
    <main className="flex flex-col h-full pb-16 overflow-y-auto">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b">
        <div className="p-4">
          <h1 className="text-xl font-semibold">Insights Archive</h1>
          <p className="text-sm text-muted-foreground">Review your growth journey</p>

          <div className="flex gap-2 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search insights..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="leadership">Leadership</SelectItem>
                <SelectItem value="communication">Communication</SelectItem>
                <SelectItem value="interpersonal">Interpersonal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <h2 className="text-sm font-medium">March 2025</h2>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            <ChevronDown size={14} className="mr-1" /> Filter
          </Button>
        </div>

        <div className="space-y-4">
          {insights.map((insight) => (
            <Card key={insight.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div
                    className={`w-2 ${
                      insight.category === "Leadership"
                        ? "bg-omiblue"
                        : insight.category === "Communication"
                          ? "bg-vibrantmint"
                          : insight.category === "Interpersonal"
                            ? "bg-neuralpurple"
                            : "bg-energeticamber"
                    }`}
                  ></div>
                  <div className="p-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium">{insight.title}</h3>
                          <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">{insight.category}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{insight.date}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                    <p className="text-sm mt-2">{insight.summary}</p>

                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-background ai-glow">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Omi" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-muted-foreground">Conversation with OmiMentor</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 py-4">
          <Button variant="outline" size="sm" className="text-xs">
            <Archive size={14} className="mr-1" /> Load More
          </Button>
        </div>
      </div>
    </main>
  )
}

