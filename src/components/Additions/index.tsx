import { useQuery } from '@tanstack/react-query'

import { getGameAdditions } from '@/services/games'
import { GameCard } from '@/components/GameCard'
import { Feedback } from '@/components/Feedback'

import { AdditionsContainer, GamesContainer } from './styles'

interface AdditionsProps {
  gameId?: string
}

export function Additions({ gameId }: AdditionsProps) {
  const {
    data: additions,
    isLoading,
    isError,
  } = useQuery(
    ['additions', gameId],
    () => {
      return getGameAdditions(gameId)
    },
    {
      enabled: !!gameId,
    },
  )

  if (isLoading || isError) {
    return (
      <Feedback
        isLoading={isLoading}
        isError={isError}
        errorMessage="Error in loading game DLC's"
      />
    )
  }

  if (!additions?.results || additions?.results.length === 0) {
    return null
  }

  return (
    <AdditionsContainer>
      <h3>{`DLC's`}</h3>

      <GamesContainer>
        {additions?.results?.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            slug={game.slug}
            background_image={game.background_image}
            genres={game.genres}
            platforms={game.platforms}
          />
        ))}
      </GamesContainer>
    </AdditionsContainer>
  )
}
