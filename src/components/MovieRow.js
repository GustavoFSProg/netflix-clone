import React, { useState } from 'react'
import './movieRow.css'
import { NavigateBefore, NavigateNext } from '@material-ui/icons'

function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(-400)

  function handleleftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2)

    if (x > 0) {
      x = 0
    }

    setScrollX(x)

    return scrollX
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150

    const win = window.innerWidth - listW
    if (win > x) {
      x = win - 60
    }

    setScrollX(x)
  }

  return (
    <div className="movieRow">
      {' '}
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleleftArrow}>
        <NavigateBefore style={{ fontSize: '50' }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNext style={{ fontSize: '50' }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => {
              return (
                <div key={key} className="movieRow--item">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_name}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default MovieRow
