/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './fetureMovie.css'

function FeatureMovie({ item }) {
  // console.log(item)

  let firstDate = new Date(item.first_air_date)
  let genres = []

  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }
  console.log(item.overview)

  // let description = item.overview | ' '
  // if (description.length > 200) {
  //   description = description.substring(0, 200) + '...'
  // }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ' '}
            </div>
            <div className="featured-descriptions">{item.overview} </div>
            <div className="featured-buttons">
              <a href={`/watch/${item.id}`} className="featured-watch-button">
                ▶ Assistir
              </a>
              <a href={`/list/add/${item.id}`} className="featured-mylist-button">
                + Minha Lista
              </a>
            </div>
            <div className="featured-genres">{genres.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureMovie
