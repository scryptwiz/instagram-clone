import Head from 'next/head'
import Image from 'next/image'
import Feeds from '../components/Feeds'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-100">
      <Head>
        <title>Instagram - Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feeds />
      <Footer />
    </div>
  )
}

export default Home
