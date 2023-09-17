import { styled } from 'styled-components'

export const ScreenshotsContainer = styled.div`
  width: 100%;
  max-width: 1300px;

  img {
    height: auto;
    object-fit: cover;
    height: 15rem;
    max-width: 100%;

    @media(min-width: 720px) {
      height: 30rem;
    }

    @media(min-width: 1024px) {
      height: 40rem;
    }
  }
`
