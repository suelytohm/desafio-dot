import React from 'react'

import { useCart } from '../../context/useCart'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ButtonRemoveMovie } from '../ButtonRemoveMovie'
import { formatMoney } from '../../utils/format'
import { Button } from '../Button'
import './TableMovies.css'

export const TableMovies = ({ formId }) => {
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
                <span>{formatMoney(movie.price)}</span>
                <ButtonRemoveMovie movie={movie} className="button-remove" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <h3>Total: </h3>
        <span>{formatMoney(totalPrice)}</span>
      </div>
      <div className="button-finish">
        <Button form={formId} type="submit">
          Finalizar
        </Button>
      </div>
    </div>
  )
}
