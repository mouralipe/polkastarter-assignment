import { useState, useContext, createContext } from 'react'

interface GameAndPaginationProviderProps {
  children: React.ReactNode
}

interface GameAndPaginationContextProps {
  searchTerm: string
  newSearchTerm: string
  currentPage: number
  pageSize: number
  handleChangePageSize: (pageSize: number) => void
  handleChangeCurrentPage: (pageNumber: number) => void
  handleChangeSearchTerm: (value: string) => void
  handleChangeNewSearchTerm: (value: string) => void
}

const GameAndPaginationContext = createContext(
  {} as GameAndPaginationContextProps,
)

export function GameAndPaginationProvider({
  children,
}: GameAndPaginationProviderProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [newSearchTerm, setNewSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(16)

  function handleChangePageSize(pageSize: number) {
    setCurrentPage(1)
    setPageSize(pageSize)
  }

  function handleChangeCurrentPage(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  function handleChangeSearchTerm(value: string) {
    setSearchTerm(value)
  }

  function handleChangeNewSearchTerm(value: string) {
    setNewSearchTerm(value)
  }

  return (
    <GameAndPaginationContext.Provider
      value={{
        searchTerm,
        newSearchTerm,
        currentPage,
        pageSize,
        handleChangePageSize,
        handleChangeCurrentPage,
        handleChangeSearchTerm,
        handleChangeNewSearchTerm,
      }}
    >
      {children}
    </GameAndPaginationContext.Provider>
  )
}

export const useGameAndPagination = () => useContext(GameAndPaginationContext)
