import React from 'react'
import { useCart } from '../../context/useCart'
import { formatMoney } from '../../utils/format'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'

import './Cart.css'
import { ButtonRemoveMovie } from '../ButtonRemoveMovie'
import { Button } from '../Button'

export const Cart = () => {
  const { movies, visible, totalPrice, removeAllMovies, toggleVisibility } =
    useCart()
  const [parent] = useAutoAnimate()
  const navigate = useNavigate()

  const goToCheckout = () => {
    toggleVisibility()
    navigate('/checkout')
  }

  return (
    <div className={`cart ${!visible ? 'hide' : ''}`}>
      <div className="header">
        <h3 className="header-title">Meu Carrinho</h3>
        <button onClick={removeAllMovies}>
          {movies.length > 0 ? 'Esvaziar' : 'Fechar'}
        </button>
      </div>
      {movies.length === 0 && <p>Carrinho vazio</p>}
      <ul ref={parent}>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.image} alt="" />
            <span className="movie-title">{movie.title}</span>
            <span className="movie-amount">{movie.amount}</span>
            <span className="movie-price">{formatMoney(movie.price)}</span>
            <ButtonRemoveMovie className="button-remove" movie={movie} />
          </li>
        ))}
      </ul>
      <div className="footer">
        <p>
          Total: <span>{formatMoney(totalPrice)}</span>
        </p>
        <Button onClick={goToCheckout}>Finalizar Compra</Button>
      </div>
    </div>
  )
}
