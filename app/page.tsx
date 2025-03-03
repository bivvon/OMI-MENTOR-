"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, ChevronRight, Lightbulb, Sparkles, TrendingUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ModeToggle } from "@/components/mode-toggle"
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  const [progress, setProgress] = useState(68)

  return (
    <main className="flex flex-col h-full pb-16 overflow-y-auto">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-secondary">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10 border-2 border-accent">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>BV</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Good Morning, Bivvon</h1>
              <p className="text-xs text-muted-foreground">Your AI mentor is ready</p>
            </div>
          </div>
          <ModeToggle />
        </div>
      </header>

      <div className="p-4 space-y-6">
        <Card className="gradient-bg overflow-hidden text-foreground">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <h2 className="text-lg font-medium">Today's Key Tasks</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Checkbox id="task1" className="mr-2 border-accent" />
                    <label htmlFor="task1" className="text-sm">
                      Practice active listening in team meeting
                    </label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox id="task2" className="mr-2 border-accent" />
                    <label htmlFor="task2" className="text-sm">
                      Review project timeline with Sarah
                    </label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox id="task3" className="mr-2 border-accent" />
                    <label htmlFor="task3" className="text-sm">
                      Prepare presentation for client meeting
                    </label>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse"></div>
                <Avatar className="h-12 w-12 border-2 border-accent ai-glow">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Omi" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Mentor Insights</h2>
            <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground hover:text-accent">
              View all <ChevronRight size={14} />
            </Button>
          </div>

          <Card className="overflow-hidden border-accent glassmorphic">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent" />
                <h3 className="text-sm font-medium text-foreground">Critical Insight</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Team morale seems low. Consider organizing a team-building activity this week.
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>1 hour ago</span>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-accent hover:text-accent/80">
                  Take Action
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-accent glassmorphic">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Brain size={16} className="text-accent" />
                <h3 className="text-sm font-medium text-foreground">Growth Opportunity</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your public speaking skills have improved. Ready for a bigger challenge?
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>Yesterday</span>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-accent hover:text-accent/80">
                  Explore Options
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Weekly Progress</h2>
          <Card className="border-accent glassmorphic">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground">Communication Skills</h3>
                  <p className="text-xs text-muted-foreground">+12% improvement</p>
                </div>
                <TrendingUp size={20} className="text-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Active Listening</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-1.5 bg-secondary" indicatorClassName="bg-accent" />

                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Clear Expression</span>
                  <span>72%</span>
                </div>
                <Progress value={72} className="h-1.5 bg-secondary" indicatorClassName="bg-accent" />

                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Empathy</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-1.5 bg-secondary" indicatorClassName="bg-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              className="h-auto py-4 flex items-center justify-between w-full border-accent hover:bg-accent/10 hover-glow"
            >
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-accent" />
                <span className="text-sm text-foreground">Ask Omi</span>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </Button>
            <div className="bg-secondary rounded-lg p-3">
              <h3 className="text-sm font-medium text-foreground mb-2">Quick Responses</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm" className="text-xs bg-accent/20 hover:bg-accent/30 text-accent">
                  How to improve team communication?
                </Button>
                <Button variant="secondary" size="sm" className="text-xs bg-accent/20 hover:bg-accent/30 text-accent">
                  Tips for time management
                </Button>
                <Button variant="secondary" size="sm" className="text-xs bg-accent/20 hover:bg-accent/30 text-accent">
                  Handling difficult conversations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

