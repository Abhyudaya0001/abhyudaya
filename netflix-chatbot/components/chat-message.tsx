import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  content: string
  role: "user" | "assistant"
}

export function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={`flex items-start gap-3 ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
      {message.role === "assistant" && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot" />
          <AvatarFallback className="bg-red-600 text-white">NB</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          message.role === "assistant" ? "bg-gray-800 text-white" : "bg-red-600 text-white ml-auto"
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>

      {message.role === "user" && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback className="bg-gray-500">U</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

