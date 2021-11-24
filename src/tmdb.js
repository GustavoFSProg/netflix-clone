/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
const API_KEY = '4db716600b63359ad50a36e125a3f1be'
const API_BASE = 'https://api.themoviedb.org/3'

async function basicFetch(endpoint) {
  const req = await fetch(`${API_BASE}${endpoint}`)

  const json = await req.json()

  return json
}

async function getHomeList() {
  return [
    {
      slug: 'originals',
      title: 'Orginais  do NetFlix',
      items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
    },

    {
      slug: 'trending',
      title: 'Recomendados para vocẽ',
      items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`),
    },

    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'documentary',
      title: 'Documentario',
      items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`),
    },
  ]
}
async function getMovieInfo(movieId, type) {
  let info = {}

  if (movieId) {
    switch (type) {
      case 'movie':
        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break

      case 'tv':
        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)

        break

      default:
        info = null
        break
    }
  }

  return info
}

export { getHomeList, getMovieInfo }
