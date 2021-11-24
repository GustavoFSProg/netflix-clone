import React from 'react'
import './fetureMovie.css'

function FeatureMovie({ item }) {
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
        <div className="featured--horizontal"></div>
      </div>
    </section>
  )
}

export default FeatureMovie
