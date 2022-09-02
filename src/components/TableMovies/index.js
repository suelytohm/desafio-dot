import React from 'react'

import { useCart } from '../../context/useCart'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { ButtonRemoveMovie } from '../ButtonRemoveMovie'
import { formatMoney } from '../../utils/format'

import './TableMovies.css'
export const TableMovies = () => {
  const { movies, totalPrice } = useCart()
  const [parent] = useAutoAnimate()

  return (
    <div className="table-movie">
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Qtd</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody ref={parent}>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>
                <img src={movie.image} alt="" />
              </td>
              <td>{movie.title}</td>
              <td>{movie.amount}</td>
              <td>
                {movie.price} <ButtonRemoveMovie movie={movie} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <h3>Total: </h3>
        <span>{formatMoney(totalPrice)}</span>
      </div>
    </div>
  )
}
