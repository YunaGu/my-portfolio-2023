import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Header />
      <div className="grow flex flex-col"><Component {...pageProps} /></div>
      <Footer />
    </div>
    </>
  )
}
