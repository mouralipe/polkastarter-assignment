import { Spinner } from '@phosphor-icons/react'

import { Container } from './styles'

interface FeedbackProps {
  isLoading?: boolean
  isError: boolean
  errorMessage: string
}

export function Feedback({ isLoading, isError, errorMessage }: FeedbackProps) {
  return (
    <Container>
      {isLoading && <Spinner size={50} />}

      {isError && <h1>{errorMessage}</h1>}
    </Container>
  )
}
