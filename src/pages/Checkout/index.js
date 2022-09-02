import { FormCheckout } from '../../components/FormCheckout'
import { Layout } from '../../components/Layout'
import { TableMovies } from '../../components/TableMovies'
import { useCart } from '../../context/useCart'
import { Link } from 'react-router-dom'
import './Checkout.css'

export const Checkout = () => {
  const { movies } = useCart()

  return (
    <Layout>
      <div className="checkout-page">
        {movies.length === 0 ? (
          <div>
            <h1>Carrinho Vazio</h1>
            <Link to="/">Escolha um Filme</Link>
          </div>
        ) : (
          <div>
            <h1>Finalizar Compra</h1>
            <FormCheckout />
            <TableMovies />
          </div>
        )}
      </div>
    </Layout>
  )
}
