import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1300px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 5rem;

  > h1 {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--blue-200);
  }

  @media (min-width: 720px) {
    > h1 {
      font-size: 3.5rem;
    }
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--gray-200);

  > input {
    outline: none;
    width: 100%;
    background: transparent;
    border: 0;
    padding: 0.5rem 0;
    font-size: 1.25rem;
    color: var(--white);

    &::placeholder {
      color: var(--gray-200);
    }
  }

  @media (min-width: 720px) {
    > input {
      font-size: 1.5rem;
    }
  }
`

export const GamesContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  margin-top: 2.5rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const PaginationContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  width: 100%;
  margin-top: 2.5rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  order: 1;

  > p {
    font-size: 1.25rem;
    color: var(--gray-100);

    > span {
      color: var(--blue-200);
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;

    > button {
      line-height: 0;
      padding: 0.5rem;
      border-radius: 4px;
      border: 0;
      background-color: var(--blue-900);
      color: var(--blue-200);
      transition: background-color 0.3s;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: var(--blue-200);
        color: var(--blue-900);
      }
    }
  }

  @media (min-width: 720px) {
    order: 3;
  }
`
