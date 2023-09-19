import Image from 'next/image'
import { useRouter } from 'next/router'

import { motion } from '@/styles/animations'

import { CardInformation, Container, ImageContainer } from './styles'

type GameCardProps = GameData

export function GameCard(game: GameCardProps) {
  const { push } = useRouter()

  const imagePlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'

  return (
    <Container
      onClick={() => push(`/game/${game.slug}`)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={motion}
    >
      <ImageContainer>
        <Image
          src={game?.background_image || imagePlaceholder}
          alt={game?.name}
          width={400}
          height={200}
        />
      </ImageContainer>

      <CardInformation>
        <h2>{game.name}</h2>

        <section>
          <p>
            <span>Platforms:</span>{' '}
            {game.platforms
              .map((platform) => platform.platform.name)
              .join(', ')}
          </p>

          <p>
            <span>Genres:</span>{' '}
            {game.genres.map((genre) => genre.name).join(', ')}
          </p>
        </section>
      </CardInformation>
    </Container>
  )
}
