import { styled } from 'styled-components'

export const AdditionsContainer = styled.div`
  > h3 {
    font-size: 1.25rem;
    color: var(--blue-200);
  }
`

export const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  margin-top: 1.25rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
