import { FormCheckout } from '../../components/FormCheckout'
import { Layout } from '../../components/Layout'
import { TableMovies } from '../../components/TableMovies'
import { useCart } from '../../context/useCart'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Link } from 'react-router-dom'
import './Checkout.css'

export const Checkout = () => {
  const { movies } = useCart()
  const [parent] = useAutoAnimate()

  return (
    <Layout>
      <div className="checkout-page">
        {movies.length === 0 ? (
          <div>
            <h1>Carrinho Vazio</h1>
            <Link to="/">Escolha um Filme</Link>
          </div>
        ) : (
          <>
            <h1>Finalizar Compra</h1>
            <div className="checkout" ref={parent}>
              <FormCheckout id="checkout-form" />
              <TableMovies formId="checkout-form" />
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
