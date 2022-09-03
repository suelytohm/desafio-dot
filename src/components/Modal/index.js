import Modal from 'react-modal'

Modal.setAppElement('#yourAppElement')

export const Modalindex = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  )
}
