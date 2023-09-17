import { format, parseISO } from 'date-fns'

export function formatDateDefault(date?: string) {
  if (!date) return ''

  const parsedDate = parseISO(date)

  const dateFormatted = format(parsedDate, 'MMMM dd, yyyy') // E.g. Sep 17, 2021

  return dateFormatted
}
