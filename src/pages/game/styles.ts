import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 5rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 1.25rem;

    > h1 {
      font-size: 2rem;
      text-align: center;
      font-family: Anton, sans-serif;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
  }

  @media (min-width: 720px) {
    > section {
      > h1 {
        font-size: 3rem;
      }
    }
  }
`
