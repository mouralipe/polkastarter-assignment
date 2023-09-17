interface GameData {
  id: string
  name: string
  slug: string
  background_image: string
  genres: {
    id: string
    name: string
  }[]
  platforms: {
    platform: {
      id: string
      name: string
    }
  }[]
}

interface GameDetailsData {
  id: string
  name: string
  description: string
  slug: string
  background_image: string
  released: string
  metacritic: number
}

interface GameScreenshotsData {
  count: number
  results: {
    image: string
  }[]
}

interface GameAdditionsData {
  count: number
  results: GameData[]
}

interface GamesAndPaginationData {
  results?: GameData[]
  previous?: string
  next?: string
  count: number
}
