import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'

import { queryClient } from '@/lib/react-query'
import GlobalStyles from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Highest Rated Games of 2023</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <GlobalStyles />
      </QueryClientProvider>
    </>
  )
}
