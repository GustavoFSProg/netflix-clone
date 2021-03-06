import { useEffect, useState } from 'react'
import './App.css'
import MovieRow from './components/MovieRow'
import { getHomeList, getMovieInfo } from './tmdb'
import FeatureMovie from './components/FeatureMovie'
import Header from './components/Header'
import Loading from './assets/loading.gif'
import Thmdb from './assets/themviedb.svg'

function App() {
  const [movieList, setMovielist] = useState([])
  const [featureData, setFeatureData] = useState([])
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    function ScrollListener() {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', ScrollListener)

    return () => {
      window.addEventListener('scroll', ScrollListener)
    }
  }, [])

  return (
    <div className="App">
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por Gustavo Sohne
        <br />
        Direitos de imagems pela Netflix
        <br />
        Dados pegos do site Themoviedb.org
        <img src={Thmdb} alt="logothmvdb" width="80" style={{ marginLeft: '13px' }} />
      </footer>
      {movieList <= 0 && (
        <div className="loading">
          <img src={Loading} alt="Carregando" width="170" />
        </div>
      )}
    </div>
  )
}

export default App
