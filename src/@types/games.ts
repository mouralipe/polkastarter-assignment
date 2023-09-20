/* eslint-disable */

interface GameData {
  id: string
  name: string
  slug: string
  background_image: string
  metacritic?: number
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
    id: string
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
