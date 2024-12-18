import { api } from '@/lib/axios'

export async function getGamesAndPagination(
  pageSize: number,
  page: number,
  search: string,
) {
  const { data } = await api.get<GamesAndPaginationData>(
    `/games?dates=2023-01-01,2023-12-31&metacritic=70,100&ordering=-metacritic&page=${page}&page_size=${pageSize}&search=${search}&search_exact=true`,
  )
  return data
}

export async function getGameDetails(slug: string) {
  const { data } = await api.get<GameDetailsData>(`/games/${slug}`)
  return data
}

export async function getGameScreenshots(id?: string) {
  if (!id)
    return {
      count: 0,
      results: [],
    }

  const { data } = await api.get<GameScreenshotsData>(
    `/games/${id}/screenshots?page=1&page_size=6`,
  )
  return data
}

export async function getGameAdditions(id?: string) {
  if (!id)
    return {
      count: 0,
      results: [],
    }

  const { data } = await api.get<GameAdditionsData>(`/games/${id}/additions`)
  return data
}
