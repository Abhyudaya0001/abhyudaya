import { type NextRequest, NextResponse } from "next/server"
import { getRecommendations } from "@/lib/recommendation-engine"

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query) {
      return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
    }

    const recommendations = await getRecommendations(query)

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("Error in recommendation API:", error)
    return NextResponse.json({ error: "Failed to process recommendation request" }, { status: 500 })
  }
}

