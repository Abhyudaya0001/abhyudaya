import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Recommendation } from "@/lib/types"
import { Film, Tv } from "lucide-react"

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-black/50">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              {recommendation.type === "Movie" ? (
                <Film className="h-4 w-4 text-red-500" />
              ) : (
                <Tv className="h-4 w-4 text-red-500" />
              )}
              {recommendation.title} ({recommendation.release_year})
            </CardTitle>
            <CardDescription className="text-xs text-gray-400 mt-1">
              {recommendation.type} • {recommendation.duration}
            </CardDescription>
          </div>
          {recommendation.rating && (
            <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-800">
              ⭐ {recommendation.rating}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="mb-2 flex flex-wrap gap-1">
          {recommendation.genres.split(", ").map((genre, i) => (
            <Badge key={i} variant="secondary" className="bg-red-900/30 text-red-400 border-red-800">
              {genre}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-gray-300">{recommendation.description}</p>
      </CardContent>
    </Card>
  )
}

