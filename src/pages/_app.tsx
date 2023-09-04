import { globalStyles } from '@/styles/global'
import { Metadata } from 'next'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

export const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book-wise',
  description: 'App book',
}

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
