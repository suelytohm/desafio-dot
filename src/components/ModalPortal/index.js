import { createPortal } from 'react-dom'
import { useLayoutEffect, useState } from 'react'

export const ModalPortal = ({ children, wrapperId = 'modal-portal-root' }) => {
  const [wrapperElement, setWrapperElement] = useState(null)

  const createWrapperToAppendInBody = wrapperId => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', wrapperId)
    document.body.appendChild(wrapper)

    return wrapper
  }

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let isCreated = false
    if (!element) {
      element = createWrapperToAppendInBody(wrapperId)
      isCreated = true
    }

    setWrapperElement(element)
    return () => {
      if (isCreated && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}
