import { ModalPortal } from '../ModalPortal'
import { Navigate, Link } from 'react-router-dom'
import { Button } from '../Button'
import { useModal } from '../../context/useModal'

import './Modal.css'

export const Modal = ({ children }) => {
  const { open } = useModal()

  if (!open) return null

  return <ModalPortal>{children}</ModalPortal>
}
