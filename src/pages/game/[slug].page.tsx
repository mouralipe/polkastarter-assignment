import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { getGameDetails } from '@/services/games'
import { Feedback } from '@/components/Feedback'

import { Details } from '@/components/Details'
import { Additions } from '@/components/Additions'
import { ScreenshotsComponent } from '@/components/ScreenshotsComponent'

import { Container } from './styles'

export default function Game() {
  const router = useRouter()

  const { slug } = router.query

  const {
    data: gameInfo,
    isLoading,
    isError,
  } = useQuery(
    ['game', slug],
    () => {
      return getGameDetails(slug as string)
    },
    {
      enabled: !!slug,
    },
  )

  if (isLoading || isError) {
    return (
      <Feedback
        isLoading={isLoading}
        isError={isError}
        errorMessage="Error in loading game details"
      />
    )
  }

  return (
    <>
      <Head>
        <title>{gameInfo.name}</title>
      </Head>

      <Container>
        <ScreenshotsComponent gameId={gameInfo?.id} />

        <section>
          <h1>{gameInfo.name}</h1>

          <Details gameInfo={gameInfo} />

          <Additions gameId={gameInfo?.id} />
        </section>
      </Container>
    </>
  )
}
