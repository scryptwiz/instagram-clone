import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Instagram - Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
