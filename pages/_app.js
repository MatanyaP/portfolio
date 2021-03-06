import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { prefix } from '../utils/prefix'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Matan Peretz Portfolio</title>
        <link rel="icon" href={`${prefix}/fav.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>

      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
