"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { RecommendationCard } from "@/components/recommendation-card"
import type { Recommendation } from "@/lib/types"
import { useMediaQuery } from "@/hooks/use-media-query"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  recommendations?: Recommendation[]
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        'Hi there! I can recommend Netflix movies and shows based on your preferences. Try asking for something like "comedy movies after 2018" or "thriller TV shows".',
      role: "assistant",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to get recommendations")
      }

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.recommendations.length
          ? `Here are some recommendations based on "${input}":`
          : `I couldn't find any matches for "${input}". Try being more specific or try different keywords.`,
        role: "assistant",
        recommendations: data.recommendations,
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error fetching recommendations:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error while searching for recommendations. Please try again.",
        role: "assistant",
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div
      className={`flex flex-col ${isMobile ? "h-[85vh]" : "h-[70vh]"} border rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm`}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <ChatMessage message={message} />
            {message.recommendations && message.recommendations.length > 0 && (
              <div className="grid grid-cols-1 gap-3 mt-3">
                {message.recommendations.map((rec) => (
                  <RecommendationCard key={rec.id} recommendation={rec} />
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Ask for a recommendation..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}

