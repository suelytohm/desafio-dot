import React, { useMemo } from 'react'
import './CardMovie.css'
import { formatMoney } from '../../utils/format'
import { resolveImage } from '../../utils/image'

import { genres } from '../../assets/genres'

import { AiFillHeart } from 'react-icons/ai'
import { useFavorites } from '../../context/useFavorites'

const CardMovie = ({
  id,
  name,
  rating,
  genreId,
  value,
  imgBanner,
  releaseDate,
  onAdd,
}) => {
  const { toggleMovie, isMovieFavorite } = useFavorites()

  const genreName = useMemo(() => {
    return genres.find(genre => genre.id === genreId)?.name || 'Sem gênero'
  }, [genreId])

  const dateFormat = useMemo(() => {
    if (!releaseDate) return

    const theDate = new Date(releaseDate)
    const day = new Intl.DateTimeFormat('pt-BR', { day: 'numeric' }).format(
      theDate,
    )
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(
      theDate,
    )
    const year = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(
      theDate,
    )

    return `${day} de ${
      month.charAt(0).toUpperCase() + month.slice(1)
    }, ${year}`
  }, [releaseDate])

  return (
    <div className="card">
      <div className="banner">
        <div className="heart">
          <AiFillHeart
            onClick={() =>
              toggleMovie({ id, title: name, poster_path: imgBanner })
            }
            color={isMovieFavorite(id) ? 'red' : '#4B5C6B'}
            size={30}
          />
        </div>
        <img
          className="img-banner"
          src={resolveImage(imgBanner)}
          alt="banner do filme"
        />
        <span className="release-date">{dateFormat}</span>
      </div>
      <div className="title">
        <h3>
          <strong>{name} </strong>
        </h3>
      </div>
      <div className="container">
        <img
          className="img-rating"
          src="https://static.vecteezy.com/system/resources/previews/001/189/063/non_2x/star-rounded-png.png"
          alt="rating"
        />
        <span>
          <strong>{rating}</strong>
        </span>
        <span>{genreName}</span>
      </div>
      <div className="price">
        <p>{formatMoney(value)}</p>
      </div>
      <div className="add-item">
        <button onClick={onAdd}>Adicionar</button>
      </div>
    </div>
  )
}

export default CardMovie
