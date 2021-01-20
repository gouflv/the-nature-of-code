import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Nature of Code</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
