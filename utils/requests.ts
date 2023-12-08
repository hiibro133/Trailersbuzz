const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=aae9c22818c0e3b490aff1b719368476&with_networks=213`, //`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=aae9c22818c0e3b490aff1b719368476&language=en-US`,//`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=aae9c22818c0e3b490aff1b719368476&language=en-US`,//`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=aae9c22818c0e3b490aff1b719368476&with_genres=28`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=aae9c22818c0e3b490aff1b719368476&with_genres=35`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=aae9c22818c0e3b490aff1b719368476&with_genres=27`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=aae9c22818c0e3b490aff1b719368476&with_genres=10749`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=aae9c22818c0e3b490aff1b719368476&with_networks=99`, //`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  //fechTest: `https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/manga_stories-69-2.json`//`https://bronze-working-blackbird-425.mypinata.cloud/ipfs/QmdGoDYKg6ftibtKFRpZ58ka7k2xfDfY7HtoYLNQN7jrwK?_gl=1*dwaeaf*_ga*OTUwNTM1MDY4LjE2OTk1OTU0MjQ.*_ga_5RMPXG14TE*MTcwMTA2ODMxMy4xMC4xLjE3MDEwNjgzMzcuMzYuMC4w`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api3.json`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api2.json`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api.json`//'https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/test_1.json'//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api-moives3.json`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api-moives2.json`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api-moives.json`
}

export default requests

//NEXT_PUBLIC_API_KEY="aae9c22818c0e3b490aff1b719368476"
//const BASE_URL = 'https://api.themoviedb.org/3'
