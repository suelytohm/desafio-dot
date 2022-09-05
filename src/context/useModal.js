import { createContext, useContext, useState } from 'react'

const initialState = {
  open: false,
  data: {},
  clearData: () => {},
  handleOpen: () => {},
  handleClose: () => {},
}

const ModalContext = createContext(initialState)

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(initialState.open)
  const [data, setData] = useState(initialState.data)

  const handleOpen = value => {
    setData(_data => ({ ...data, ...value }))
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const clearData = () => {
    setData({})
    setOpen(false)
  }
  return (
    <ModalContext.Provider
      value={{
        open,
        data,
        clearData,
        handleOpen,
        handleClose,
      }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  return {
    open: context.open,
    data: context.data,
    clearData: context.clearData,
    handleOpen: context.handleOpen,
    handleClose: context.handleClose,
  }
}
