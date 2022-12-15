import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Hosting from '../components/Hosting'
import { live, discover } from '../data'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Explore />
        <Banner />
        <Cards {...live} />
        <Cards {...discover} />
        <Hosting />
      </main>

      <Footer />
    </>
  )
}
