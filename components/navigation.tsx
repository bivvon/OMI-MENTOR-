"use client"

import { Home, MessageSquare, Bell, Archive, User } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { AskOmiModal } from "./ask-omi-modal"

export default function Navigation() {
  const pathname = usePathname()
  const [isAskOmiOpen, setIsAskOmiOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 border-t border-secondary bg-background/80 backdrop-blur-lg">
        <nav className="flex justify-around items-center h-16 px-4">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center ${
              isActive("/") ? "text-accent active-glow" : "text-muted-foreground"
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="/mentorship"
            className={`flex flex-col items-center justify-center ${
              isActive("/mentorship") ? "text-accent active-glow" : "text-muted-foreground"
            }`}
          >
            <MessageSquare size={24} />
            <span className="text-xs mt-1">Mentorship</span>
          </Link>
          <div className="relative -mt-8">
            <div className="absolute -top-1 -left-1 w-16 h-16 rounded-full bg-accent/20 animate-pulse"></div>
            <button
              onClick={() => setIsAskOmiOpen(true)}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-background shadow-lg ai-glow hover-glow transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20"></div>
                <User size={24} />
              </div>
            </button>
          </div>
          <Link
            href="/notifications"
            className={`flex flex-col items-center justify-center ${
              isActive("/notifications") ? "text-accent active-glow" : "text-muted-foreground"
            }`}
          >
            <Bell size={24} />
            <span className="text-xs mt-1">Alerts</span>
          </Link>
          <Link
            href="/insights"
            className={`flex flex-col items-center justify-center ${
              isActive("/insights") ? "text-accent active-glow" : "text-muted-foreground"
            }`}
          >
            <Archive size={24} />
            <span className="text-xs mt-1">Insights</span>
          </Link>
        </nav>
      </div>
      <AskOmiModal isOpen={isAskOmiOpen} onClose={() => setIsAskOmiOpen(false)} />
    </>
  )
}

