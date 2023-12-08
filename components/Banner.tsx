import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import {
  PlusIcon,
  HandThumbUpIcon,
  SpeakerXMarkIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player/lazy'
import { SpeakerWaveIcon } from '@heroicons/react/24/solid'
import MuiModal from '@mui/material/Modal'
import { Element, Genre } from '../typings'
import dynamic from 'next/dynamic';
import ReadMore from './readmore'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState('')
  const [muted, setMuted] = useState(true)
    const dc = movie?.overview;


  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=aae9c22818c0e3b490aff1b719368476&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message))

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }

    }

    fetchMovie()
  }, [movie])


  {/* useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)]
    )
  }, [netflixOriginals]) */}

  useEffect(() => {
    if (netflixOriginals && netflixOriginals.length > 0) {
      setMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      );
    }
  }, [netflixOriginals]);

   const DynamicReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
  });


  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-3 left-0 -z-10 h-[9vh] w-screen pt-8">
        {/*  <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
          alt="{movie?.title || movie?.name || movie?.original_name}"
        /> */}
        <div className="pt-8"style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
        {trailer && (
         <DynamicReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing={!showModal} // Play only if the modal is not open
            muted={muted}
          />
        )}
          </div>

      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-1xl lg:text-2xl text-white-100" style={{ textDecoration: 'none' }} >
        <ReadMore text={dc} wordsLimit={5} />
      </div>

      <div className="flex space-x-3">
        {/*<button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>*/}
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
        <button className="modalButton" onClick={() => setMuted(!muted)}>
          {muted ? (
            <SpeakerXMarkIcon className="h-6 w-6" />
          ) : (
            <SpeakerWaveIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Banner
