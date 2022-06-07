import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SnipcartProvider } from 'use-snipcart'
// const SnipcartProvider = require('use-snipcart')


import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <SnipcartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnipcartProvider>
  </>
}

export default MyApp
