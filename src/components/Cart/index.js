import React from 'react'
import { useCart } from '../../context/useCart'
import { FaTrashAlt } from 'react-icons/fa'
import { formatMoney } from '../../utils/format'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'

import './Cart.css'

export const Cart = () => {
  const { movies, visible, totalPrice, removeMovie, removeAllMovies } =
    useCart()
  const [parent] = useAutoAnimate()
  const navigate = useNavigate()
  return (
    <div className={`cart ${!visible ? 'hide' : ''}`}>
      <div className="header">
        <h3 className="header-title">Meu Carrinho</h3>
        <button onClick={removeAllMovies}>Esvaziar</button>
      </div>
      {movies.length === 0 && <p>Carrinho vazio</p>}
      <ul ref={parent}>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.image} alt="" />
            <span className="movie-title">{movie.title}</span>
            <span className="movie-amount">{movie.amount}</span>
            <span className="movie-price">{formatMoney(movie.price)}</span>
            <button
              className="button-remove"
              onClick={() => removeMovie(movie)}>
              <FaTrashAlt size={20} />
            </button>
          </li>
        ))}
      </ul>
      <div className="footer">
        <p>Total: {formatMoney(totalPrice)}</p>
        <button onClick={() => navigate('/checkout')}>Finalizar Compra</button>
      </div>
    </div>
  )
}
