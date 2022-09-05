import { useNavigate } from 'react-router-dom'
import { Button } from '../../Button'
import { useModal } from '../../../context/useModal'

import './ModalCheckout.css'

import { Modal } from '..'

export const ModalCheckout = () => {
  const { data, clearData } = useModal()
  const navigate = useNavigate()

  const handleGoToStore = () => {
    navigate('/')
    clearData()
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
