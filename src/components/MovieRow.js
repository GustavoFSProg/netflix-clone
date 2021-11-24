import React from 'react'

function MovieRow({ title, items }) {
  return (
    <div>
      {' '}
      <h2>{title}</h2>
      <div>
        {items.results.length > 0 &&
          items.results.map((item, key) => {
            return (
              <img
                key={key}
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt="movieslist"
              />
            )
          })}
      </div>
    </div>
  )
}

export default MovieRow
