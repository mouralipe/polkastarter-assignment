import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

import { getGameScreenshots } from '@/services/games'
import { Feedback } from '@/components/Feedback'

import { ScreenshotsContainer } from './styles'

interface ScreenshotsComponentProps {
  gameId?: string
}

export function ScreenshotsComponent({ gameId }: ScreenshotsComponentProps) {
  const imagePlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'

  const {
    data: screenshots,
    isLoading,
    isError,
  } = useQuery(
    ['screenshots', gameId],
    () => {
      return getGameScreenshots(gameId)
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
        errorMessage="Error in loading game screenshots"
      />
    )
  }

  if (!screenshots?.results || screenshots?.results.length === 0) {
    return null
  }

  return (
    <ScreenshotsContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        {screenshots?.results?.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <Image
              src={screenshot?.image || imagePlaceholder}
              alt={`Screenshot ${index}`}
              width={1300}
              height={1300}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ScreenshotsContainer>
  )
}
