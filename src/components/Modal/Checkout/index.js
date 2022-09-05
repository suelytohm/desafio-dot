import { useNavigate } from 'react-router-dom'
import { Button } from '../../Button'
import { useModal } from '../../../context/useModal'
import { useCart } from '../../../context/useCart'

import './ModalCheckout.css'

import { Modal } from '..'

export const ModalCheckout = () => {
  const { data, clearData } = useModal()
  const { removeAllMovies } = useCart()

  const navigate = useNavigate()

  const handleGoToStore = () => {
    navigate('/')
    clearData()
    removeAllMovies()
  }

  return (
    <Modal>
      <div className="modal">
        <h2>Obrigado {data.name}</h2>
        <span>Sua compra foi finalizada com sucesso!</span>

        <Button onClick={handleGoToStore}>Ir para loja</Button>
      </div>
    </Modal>
  )
}
