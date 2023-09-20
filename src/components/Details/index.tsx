import { queryClient } from '@/lib/react-query'
import { formatDateDefault } from '@/utils/date'

import { DetailsContainer } from './styles'

interface DetailsProps {
  gameInfo?: GameDetailsData
}

export function Details({ gameInfo }: DetailsProps) {
  const gamesCache: GamesAndPaginationData | undefined =
    queryClient.getQueryData(['gamesAndPagination'], {
      exact: false,
    })

  const metacritic =
    gameInfo?.metacritic ||
    gamesCache?.results?.find((game) => game?.id === gameInfo?.id)?.metacritic

  return (
    <DetailsContainer>
      {gameInfo?.description && (
        <div>
          <h3>Description</h3>
          <div dangerouslySetInnerHTML={{ __html: gameInfo.description }} />
        </div>
      )}

      {gameInfo?.released && (
        <div>
          <h3>Release Date</h3>
          <p>{formatDateDefault(gameInfo?.released)}</p>
        </div>
      )}

      {metacritic && (
        <div>
          <h3>Metacritic Rating</h3>
          <p>{metacritic}</p>
        </div>
      )}
    </DetailsContainer>
  )
}
