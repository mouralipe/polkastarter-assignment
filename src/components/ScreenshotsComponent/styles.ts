import { styled } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ScreenshotsContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MainSwiper = styled(Swiper)`
  width: 100%;

  img {
    height: auto;
    object-fit: cover;
    height: 15rem;
    max-width: 100%;

    @media (min-width: 720px) {
      height: 30rem;
    }

    @media (min-width: 1024px) {
      height: 35rem;
    }
  }
`
interface ThumbsSwiperProps {
  imagesNumber?: number
}

export const ThumbsSwiper = styled(Swiper)<ThumbsSwiperProps>`
  display: none;
  width: 150px;
  margin: 0;

  img {
    object-fit: cover;
    height: 6.1rem;
    max-width: 100%;
    cursor: pointer;
  }

  .swiper-slide-thumb-active {
    border: 2px solid var(--blue-200);
    opacity: 1;
  }

  @media (min-width: 720px) {
    display: block;
    width: ${(props) => (props?.imagesNumber || 1) * 150}px;
  }
`

export const ThumbSwiperSlide = styled(SwiperSlide)`
  border: 2px solid transparent;
  opacity: 0.4;
  transition: opacity 0.2s ease-in-out;
`
