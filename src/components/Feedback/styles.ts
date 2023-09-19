import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  width: 100%;
  height: 100%;
  min-height: 30rem;

  > svg {
    animation: ${spinAnimation} 2s linear infinite;
  }
`
