import { globalStyles } from '@/styles/global'
import { Metadata } from 'next'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book-wise',
  description: 'App book',
}

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  )
}
