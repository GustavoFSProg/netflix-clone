import { useEffect, useState } from 'react'
import './App.css'
import MovieRow from './components/MovieRow'
import getHomeList from './tmdb'

function App() {
  const [movieList, setMovielist] = useState([])

  useEffect(() => {
    async function loadAll() {
      const List = await getHomeList()

      setMovielist(List)
    }

    loadAll()
  }, [])

  console.log(movieList)
  return (
    <div className="App">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
