import type { Recommendation } from "./types"

// This is a sample of the Netflix dataset
// In a real application, you would load this from a database or API
const netflixData: Recommendation[] = [
  {
    id: "1",
    title: "The Queen's Gambit",
    type: "TV Show",
    description:
      "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    release_year: 2020,
    genres: "Drama",
    duration: "1 Season",
    rating: 8.6,
  },
  {
    id: "2",
    title: "Stranger Things",
    type: "TV Show",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    release_year: 2016,
    genres: "Sci-Fi, Horror, Drama",
    duration: "4 Seasons",
    rating: 8.7,
  },
  {
    id: "3",
    title: "The Irishman",
    type: "Movie",
    description:
      "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
    release_year: 2019,
    genres: "Crime, Drama",
    duration: "3h 29m",
    rating: 7.8,
  },
  {
    id: "4",
    title: "Marriage Story",
    type: "Movie",
    description:
      "A stage director and his actor wife struggle through a grueling, coast-to-coast divorce that pushes them to their personal and creative extremes.",
    release_year: 2019,
    genres: "Drama, Comedy",
    duration: "2h 17m",
    rating: 7.9,
  },
  {
    id: "5",
    title: "The Witcher",
    type: "TV Show",
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    release_year: 2019,
    genres: "Fantasy, Action, Adventure",
    duration: "2 Seasons",
    rating: 8.2,
  },
  {
    id: "6",
    title: "The Half of It",
    type: "Movie",
    description: "A shy, introverted student helps the school jock woo a girl whom, secretly, they both want.",
    release_year: 2020,
    genres: "Comedy, Drama, Romance",
    duration: "1h 45m",
    rating: 6.9,
  },
  {
    id: "7",
    title: "Extraction",
    type: "Movie",
    description:
      "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    release_year: 2020,
    genres: "Action, Thriller",
    duration: "1h 56m",
    rating: 6.7,
  },
  {
    id: "8",
    title: "The Umbrella Academy",
    type: "TV Show",
    description:
      "A dysfunctional family of adopted sibling superheroes reunites to solve the mystery of their father's death and the threat of an impending apocalypse.",
    release_year: 2019,
    genres: "Action, Adventure, Comedy",
    duration: "3 Seasons",
    rating: 8.0,
  },
  {
    id: "9",
    title: "The Old Guard",
    type: "Movie",
    description:
      "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
    release_year: 2020,
    genres: "Action, Fantasy",
    duration: "2h 5m",
    rating: 6.7,
  },
  {
    id: "10",
    title: "Dark",
    type: "TV Show",
    description:
      "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    release_year: 2017,
    genres: "Sci-Fi, Thriller, Mystery",
    duration: "3 Seasons",
    rating: 8.7,
  },
  {
    id: "11",
    title: "Enola Holmes",
    type: "Movie",
    description:
      "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
    release_year: 2020,
    genres: "Adventure, Mystery, Drama",
    duration: "2h 3m",
    rating: 6.6,
  },
  {
    id: "12",
    title: "The Crown",
    type: "TV Show",
    description:
      "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    release_year: 2016,
    genres: "Drama, History",
    duration: "4 Seasons",
    rating: 8.7,
  },
  {
    id: "13",
    title: "The Social Dilemma",
    type: "Movie",
    description:
      "This documentary-drama hybrid explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
    release_year: 2020,
    genres: "Documentary, Drama",
    duration: "1h 34m",
    rating: 7.6,
  },
  {
    id: "14",
    title: "Money Heist",
    type: "TV Show",
    description:
      "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    release_year: 2017,
    genres: "Crime, Drama, Thriller",
    duration: "5 Seasons",
    rating: 8.3,
  },
  {
    id: "15",
    title: "Project Power",
    type: "Movie",
    description:
      "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
    release_year: 2020,
    genres: "Action, Sci-Fi, Crime",
    duration: "1h 53m",
    rating: 6.0,
  },
  {
    id: "16",
    title: "The Midnight Sky",
    type: "Movie",
    description:
      "A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.",
    release_year: 2020,
    genres: "Sci-Fi, Drama",
    duration: "2h 2m",
    rating: 5.6,
  },
  {
    id: "17",
    title: "Ozark",
    type: "TV Show",
    description:
      "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
    release_year: 2017,
    genres: "Crime, Drama, Thriller",
    duration: "4 Seasons",
    rating: 8.4,
  },
  {
    id: "18",
    title: "The Trial of the Chicago 7",
    type: "Movie",
    description:
      "What was intended to be a peaceful protest at the 1968 Democratic National Convention turned into a violent clash with police and the National Guard.",
    release_year: 2020,
    genres: "Drama, History, Thriller",
    duration: "2h 9m",
    rating: 7.8,
  },
  {
    id: "19",
    title: "Bridgerton",
    type: "TV Show",
    description:
      "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
    release_year: 2020,
    genres: "Drama, Romance",
    duration: "1 Season",
    rating: 7.3,
  },
  {
    id: "20",
    title: "Hillbilly Elegy",
    type: "Movie",
    description:
      "An urgent phone call pulls a Yale Law student back to his Ohio hometown, where he reflects on three generations of family history and his own future.",
    release_year: 2020,
    genres: "Drama",
    duration: "1h 56m",
    rating: 6.7,
  },
  {
    id: "21",
    title: "Lupin",
    type: "TV Show",
    description:
      "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    release_year: 2021,
    genres: "Crime, Mystery, Action",
    duration: "2 Seasons",
    rating: 7.5,
  },
  {
    id: "22",
    title: "Army of the Dead",
    type: "Movie",
    description:
      "After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble by venturing into the quarantine zone for the greatest heist ever.",
    release_year: 2021,
    genres: "Action, Horror, Sci-Fi",
    duration: "2h 28m",
    rating: 5.8,
  },
  {
    id: "23",
    title: "Sweet Tooth",
    type: "TV Show",
    description:
      "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
    release_year: 2021,
    genres: "Adventure, Drama, Fantasy",
    duration: "1 Season",
    rating: 7.9,
  },
  {
    id: "24",
    title: "The Mitchells vs. the Machines",
    type: "Movie",
    description:
      "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope.",
    release_year: 2021,
    genres: "Animation, Adventure, Comedy",
    duration: "1h 53m",
    rating: 7.7,
  },
  {
    id: "25",
    title: "Shadow and Bone",
    type: "TV Show",
    description:
      "Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.",
    release_year: 2021,
    genres: "Fantasy, Adventure, Drama",
    duration: "1 Season",
    rating: 7.6,
  },
]

export default netflixData

