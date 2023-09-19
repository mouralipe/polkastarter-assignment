// import { useState } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
// import SwiperCore from 'swiper'
import { SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  // Thumbs
} from 'swiper/modules'

import { getGameScreenshots } from '@/services/games'
import { Feedback } from '@/components/Feedback'

import {
  ScreenshotsContainer,
  MainSwiper,
  // ThumbsSwiper,
  // ThumbSwiperSlide,
} from './styles'

interface ScreenshotsComponentProps {
  gameId?: string
}

export function ScreenshotsComponent({ gameId }: ScreenshotsComponentProps) {
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()

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

  // function calcThumbsPerView() {
  //   if (!screenshots?.results) {
  //     return 1
  //   }

  //   if (screenshots.results.length <= 4) {
  //     return screenshots.results.length
  //   }

  //   return window?.matchMedia('(min-width: 1024px)')?.matches
  //     ? screenshots.results.length
  //     : 4
  // }

  // const thumbsPerView = calcThumbsPerView()

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
      <MainSwiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          Autoplay,
          // Thumbs
        ]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        navigation
        // navigation={window?.matchMedia('(max-width: 720px)').matches}
        // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
      >
        {screenshots?.results?.map((screenshot) => (
          <SwiperSlide key={screenshot.id}>
            <Image
              src={screenshot?.image || imagePlaceholder}
              alt={`Screenshot ${screenshot.id}`}
              width={1300}
              height={1300}
              priority
            />
          </SwiperSlide>
        ))}
      </MainSwiper>

      {/* <ThumbsSwiper
        modules={[Thumbs, Navigation]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        navigation
        slidesPerView={thumbsPerView}
        imagesNumber={thumbsPerView}
        slideActiveClass="swiper-slide-thumb-active"
      >
        {screenshots?.results?.map((screenshot, index) => (
          <ThumbSwiperSlide key={index}>
            <Image
              src={screenshot?.image || imagePlaceholder}
              alt={`Screenshot ${index}`}
              width={150}
              height={100}
            />
          </ThumbSwiperSlide>
        ))}
      </ThumbsSwiper> */}
    </ScreenshotsContainer>
  )
}
