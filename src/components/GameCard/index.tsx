import Image from 'next/image'
import { useRouter } from 'next/router'

import { CardInformation, Container, ImageContainer } from './styles'

type GameCardProps = GameData

export function GameCard(game: GameCardProps) {
  const { push } = useRouter()

  const imagePlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'

  const motion = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 80,
        delay: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

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
          objectFit="cover"
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
