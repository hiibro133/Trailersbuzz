import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Row from '../components/Row'
import { Movie } from '../typings'
import requests from '../utils/requests'
import { useEffect } from 'react'
import BannerAds from '../components/bannerAds'
import MuiltAds from '../components/multixAds'
import  AdComponent from '../components/a-ads'
import AdComponent2 from '../components/a-ads2'
import BannerAdsa from '../components/BannerAds-a'



interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  const showModal = useRecoilValue(modalState)



  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${showModal && '!h-screen overflow-hidden'
        }`}
    >

      <Head>
        <title>Home - Trailerbuzz</title>
        <link rel="icon" href="/t-logo-copy.png" />
         {/* Open Graph Meta Tags for Sharing */}
        <meta property="og:title" content="TrailerBuzz - Your Ultimate Destination for Movie Trailers" />
        <meta property="og:description" content="Welcome to TrailerBuzz, your go-to source for the latest and most exciting movie trailers! Immerse yourself in the world of cinema and get a sneak peek into upcoming releases, blockbusters, and hidden gems. Whether you're a film enthusiast or simply looking for your next movie night pick, TrailerBuzz has you covered.

Discover a curated collection of high-quality trailers spanning various genres, from action-packed adventures to heartwarming dramas and spine-chilling horrors. Our user-friendly interface makes it easy to explore and find trailers for movies you didn't even know you were waiting for.

Stay in the loop with the hottest Hollywood releases, follow your favorite actors and directors, and get a taste of the cinematic magic before it hits the big screen. TrailerBuzz is where anticipation meets entertainment, providing you with an immersive experience that celebrates the art of storytelling through captivating trailers.

Join our community of movie lovers, share your thoughts, and let the excitement begin. TrailerBuzz - Because every great movie starts with an unforgettable trailer.

" />
        <meta property="og:image" content="https://lavender-wrong-barracuda-449.mypinata.cloud/ipfs/QmZsBorfCjUF2vXTAgVMoeCrJsB7k9JQ3McEcH1DnpE6Tv?_gl=1*w0cfnu*_ga*MTExOTY5ODQ3OS4xNzAyMDE3OTk5*_ga_5RMPXG14TE*MTcwMjAxNzk5OC4xLjEuMTcwMjAxOTY1Ni42MC4wLjA." />
        <meta property="og:url" content="https://trailersbuzz-ramsais-projects.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags (optional) */}
        <meta name="twitter:card" content="Welcome to TrailerBuzz, your go-to source for the latest and most exciting movie trailers! Immerse yourself in the world of cinema and get a sneak peek into upcoming releases, blockbusters, and hidden gems. Whether you're a film enthusiast or simply looking for your next movie night pick, TrailerBuzz has you covered.

Discover a curated collection of high-quality trailers spanning various genres, from action-packed adventures to heartwarming dramas and spine-chilling horrors. Our user-friendly interface makes it easy to explore and find trailers for movies you didn't even know you were waiting for.

Stay in the loop with the hottest Hollywood releases, follow your favorite actors and directors, and get a taste of the cinematic magic before it hits the big screen. TrailerBuzz is where anticipation meets entertainment, providing you with an immersive experience that celebrates the art of storytelling through captivating trailers.

Join our community of movie lovers, share your thoughts, and let the excitement begin. TrailerBuzz - Because every great movie starts with an unforgettable trailer.

" />
        <meta name="twitter:title" content="TrailerBuzz - Your Ultimate Destination for Movie Trailers" />
        <meta name="twitter:description" content="Welcome to TrailerBuzz, your go-to source for the latest and most exciting movie trailers! Immerse yourself in the world of cinema and get a sneak peek into upcoming releases, blockbusters, and hidden gems. Whether you're a film enthusiast or simply looking for your next movie night pick, TrailerBuzz has you covered.

Discover a curated collection of high-quality trailers spanning various genres, from action-packed adventures to heartwarming dramas and spine-chilling horrors. Our user-friendly interface makes it easy to explore and find trailers for movies you didn't even know you were waiting for.

Stay in the loop with the hottest Hollywood releases, follow your favorite actors and directors, and get a taste of the cinematic magic before it hits the big screen. TrailerBuzz is where anticipation meets entertainment, providing you with an immersive experience that celebrates the art of storytelling through captivating trailers.

Join our community of movie lovers, share your thoughts, and let the excitement begin. TrailerBuzz - Because every great movie starts with an unforgettable trailer.

" />
        <meta name="twitter:image" content="https://lavender-wrong-barracuda-449.mypinata.cloud/ipfs/QmZsBorfCjUF2vXTAgVMoeCrJsB7k9JQ3McEcH1DnpE6Tv?_gl=1*w0cfnu*_ga*MTExOTY5ODQ3OS4xNzAyMDE3OTk5*_ga_5RMPXG14TE*MTcwMjAxNzk5OC4xLjEuMTcwMjAxOTY1Ni42MC4wLjA." />

        {/* Other meta tags as needed */}
      </Head>


      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
       
          <Row title="Scary Movies" movies={horrorMovies} />
        
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
          <div>
             <div className=""> <AdComponent2/></div>
             <div className=""><BannerAdsa/></div>
          </div>
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results || null,
      trendingNow: trendingNow.results || null,
      topRated: topRated.results || null,
      actionMovies: actionMovies.results || null,
      comedyMovies: comedyMovies.results || null,
      horrorMovies: horrorMovies.results || null,
      romanceMovies: romanceMovies.results || null,
      documentaries: documentaries.results || null,
    },
  }
}
