import { styled } from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h3 {
      font-size: 1.25rem;
      text-transform: uppercase;
      color: var(--blue-200);
    }

    > div {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    > p {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`
