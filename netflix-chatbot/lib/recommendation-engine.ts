import type { Recommendation } from "./types"
import netflixData from "./netflix-data"

// Keywords for different categories
const GENRE_KEYWORDS = [
  "action",
  "adventure",
  "animation",
  "anime",
  "comedy",
  "crime",
  "documentary",
  "drama",
  "fantasy",
  "horror",
  "mystery",
  "romance",
  "sci-fi",
  "thriller",
  "western",
]

const TYPE_KEYWORDS = {
  movie: ["movie", "film", "movies", "films"],
  show: ["show", "series", "tv", "shows", "tv show", "tv series"],
}

export async function getRecommendations(query: string): Promise<Recommendation[]> {
  // Convert query to lowercase for case-insensitive matching
  const lowercaseQuery = query.toLowerCase()

  // Extract keywords from the query
  const extractedGenres = GENRE_KEYWORDS.filter((genre) => lowercaseQuery.includes(genre))

  // Determine content type (movie or show)
  let contentType: string | null = null
  if (TYPE_KEYWORDS.movie.some((keyword) => lowercaseQuery.includes(keyword))) {
    contentType = "Movie"
  } else if (TYPE_KEYWORDS.show.some((keyword) => lowercaseQuery.includes(keyword))) {
    contentType = "TV Show"
  }

  // Extract year information
  const yearRegex = /(?:from|after|since)\s+(\d{4})|(\d{4})/i
  const yearMatch = lowercaseQuery.match(yearRegex)
  const yearFilter = yearMatch ? Number.parseInt(yearMatch[1] || yearMatch[2]) : null

  // Filter the dataset based on extracted criteria
  let filteredResults = netflixData.filter((item) => {
    // Filter by content type if specified
    if (contentType && item.type !== contentType) {
      return false
    }

    // Filter by year if specified
    if (yearFilter && item.release_year < yearFilter) {
      return false
    }

    // Filter by genre if specified
    if (extractedGenres.length > 0) {
      const itemGenres = item.genres.toLowerCase()
      return extractedGenres.some((genre) => itemGenres.includes(genre))
    }

    return true
  })

  // If no specific filters were applied but there's a query, do a general search
  if (filteredResults.length === netflixData.length && query.trim() !== "") {
    filteredResults = netflixData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercaseQuery) || item.description.toLowerCase().includes(lowercaseQuery),
    )
  }

  // Sort by release year (newest first) and limit to 10 results
  return filteredResults.sort((a, b) => b.release_year - a.release_year).slice(0, 10)
}

export function extractKeywords(query: string) {
  // More sophisticated NLP could be implemented here
  const words = query.toLowerCase().split(/\s+/)

  // Extract more complex patterns
  const keywords = {
    genres: [] as string[],
    actors: [] as string[],
    directors: [] as string[],
    yearFrom: null as number | null,
    yearTo: null as number | null,
    contentType: null as string | null,
  }

  // Process the query for more advanced patterns
  // This could be expanded with a proper NLP library

  return keywords
}

