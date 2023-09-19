import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Container = styled(motion.button)`
  display: flex;
  flex-direction: column;
  text-align: left;

  min-width: 17rem;
  height: 27rem;

  background-color: var(--blue-800);
  color: var(--white);
  border: 1px solid var(--blue-200);
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translate(0, -0.5rem);
    filter: brightness(0.9);
  }
`

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  flex: 1;
  width: 100%;
  padding: 1.25rem;

  > h2 {
    align-self: center;
    text-align: center;
    font-family: Anton, sans-serif;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    max-height: 5.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > p {
      color: var(--blue-200);
      font-weight: 600;

      > span {
        color: var(--gray-50);
        font-weight: 400;
      }
    }
  }
`

export const ImageContainer = styled.div`
  margin: 0 auto;
  height: 12.5rem;
  width: 100%;

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: 3px 3px 0 0;
  }
`
