import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { IoIosCart } from 'react-icons/io'
import { useCart } from '../../context/useCart'
import { useFavorites } from '../../context/useFavorites'
import { formatMoney } from '../../utils/format'

import './Favorites.css'

export const Favorites = () => {
  const { movies, visible, removeMovie, removeAllMovies } = useFavorites()
  const { addMovie: addMovieToCart } = useCart()

  return (
    <div className={`favorites ${!visible ? 'hide' : ''}`}>
      <div className="header">
        <h3 className="header-title">Meus Favoritos</h3>
        <button onClick={removeAllMovies}>
          {movies.length > 0 ? 'Esvaziar' : 'Fechar'}
        </button>
      </div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.image} alt="" />
            <span className="movie-title">{movie.title}</span>
            <span className="movie-amount">{movie.amount}</span>
            <span className="movie-price">{formatMoney(movie.price)}</span>

            <button
              className="button-cart"
              onClick={() =>
                addMovieToCart({ ...movie, poster_path: movie.originalImage })
              }>
              <IoIosCart size={25} color="#1AAE9F" />
            </button>

            <button
              className="button-remove"
              onClick={() => removeMovie(movie)}>
              <FaTrashAlt size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
