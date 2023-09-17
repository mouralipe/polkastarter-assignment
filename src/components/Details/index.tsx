import { formatDateDefault } from '@/utils/date'

import { DetailsContainer } from './styles'

interface DetailsProps {
  gameInfo?: GameDetailsData
}

export function Details({ gameInfo }: DetailsProps) {
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

      {gameInfo?.metacritic && (
        <div>
          <h3>Metacritic Rating</h3>
          <p>{gameInfo?.metacritic}</p>
        </div>
      )}
    </DetailsContainer>
  )
}
