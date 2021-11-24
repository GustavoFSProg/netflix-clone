import { useEffect, useState } from 'react'
import './App.css'
import MovieRow from './components/MovieRow'
import { getHomeList, getMovieInfo } from './tmdb'
import FeatureMovie from './components/FeatureMovie'

function App() {
  const [movieList, setMovielist] = useState([])
  const [featureData, setFeatureData] = useState([])

  useEffect(() => {
    async function loadAll() {
      const List = await getHomeList()

      setMovielist(List)

      let originals = List.filter((i) => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * originals[0].items.results.length - 1)
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await getMovieInfo(chosen.id, 'tv')

      setFeatureData(chosenInfo)

      console.log(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <div className="App">
      {featureData && <FeatureMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
