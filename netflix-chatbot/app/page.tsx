import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Netflix Recommendation Bot
        </h1>
        <p className="text-center mb-8 text-gray-400">
          Ask me for movie and show recommendations like "comedy movies after 2018" or "thriller TV shows"
        </p>
        <ChatInterface />
      </div>
    </main>
  )
}

