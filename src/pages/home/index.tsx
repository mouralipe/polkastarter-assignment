import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useQuery } from '@tanstack/react-query'
import { MagnifyingGlass, CaretRight, CaretLeft } from '@phosphor-icons/react'

import { getGamesAndPagination } from '@/services/games'
import { GameCard } from '@/components/GameCard'
import { Select } from '@/components/Select'
import { Feedback } from '@/components/Feedback'

import {
  Container,
  GamesContainer,
  Pagination,
  PaginationContainer,
  SearchBarContainer,
} from './styles'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [newSearchTerm, setNewSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(16)

  const {
    data: gamesAndPagination,
    isLoading,
    isError,
  } = useQuery(['games', currentPage, newSearchTerm, pageSize], () => {
    return getGamesAndPagination(pageSize, currentPage, searchTerm)
  })

  const totalPages = gamesAndPagination?.count
    ? Math.ceil(gamesAndPagination?.count / pageSize)
    : 0

  function handleChangePageSize(value: string) {
    setCurrentPage(1)
    setPageSize(Number(value))
  }

  useEffect(() => {
    // Debounce for search
    if (searchTerm !== newSearchTerm) {
      const timerId = setTimeout(() => {
        setNewSearchTerm(searchTerm)
        setCurrentPage(1)
      }, 750)

      return () => clearTimeout(timerId)
    }
  }, [searchTerm, newSearchTerm])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <h1>Highest Rated Games of 2023</h1>

        <SearchBarContainer>
          <input
            type="text"
            placeholder="Search a game by name..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            maxLength={50}
          />

          <MagnifyingGlass size={30} />
        </SearchBarContainer>

        {(isLoading || isError) && (
          <Feedback
            isLoading={isLoading}
            isError={isError}
            errorMessage="Error in loading games"
          />
        )}

        {gamesAndPagination?.results &&
          gamesAndPagination.results.length === 0 && (
            <Feedback
              isError
              errorMessage={`We're sorry. We were not able to find a match for "${newSearchTerm}".`}
            />
          )}

        <GamesContainer>
          {gamesAndPagination?.results?.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              slug={game.slug}
              background_image={game.background_image}
              genres={game.genres}
              platforms={game.platforms}
            />
          ))}
        </GamesContainer>

        <PaginationContainer>
          <Select
            defaultValue={String(pageSize)}
            onValueChange={(value) => handleChangePageSize(value)}
            placeholder={`Show ${pageSize} results`}
            items={[
              { label: 'Show 8 results', value: '8' },
              { label: 'Show 16 results', value: '16' },
              { label: 'Show 32 results', value: '32' },
            ]}
          />

          <Pagination>
            {totalPages > 0 && (
              <p>
                <span>{currentPage}</span> / {totalPages}
              </p>
            )}

            <div>
              <button
                onClick={() => setCurrentPage((state) => state - 1)}
                disabled={currentPage === 1 || totalPages === 0}
              >
                <CaretLeft size={20} />
              </button>

              <button
                onClick={() => setCurrentPage((state) => state + 1)}
                disabled={
                  currentPage === gamesAndPagination?.count ||
                  currentPage === totalPages ||
                  totalPages === 0
                }
              >
                <CaretRight size={20} />
              </button>
            </div>
          </Pagination>
        </PaginationContainer>
      </Container>
    </>
  )
}
