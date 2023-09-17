import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'
import GlobalStyles from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyles />
    </QueryClientProvider>
  )
}
