import React from 'react'
import CloseIcon from '../CloseIcon/CloseIcon'
import ModalContent from '../../texts/'
import './Modal.css'

export default function Modal({ close, content }) {
  const ContentComponent = ModalContent[content]
  const onClick = event => {
    if (event.target === event.currentTarget) close()
    event.stopPropagation()
  }

  return (
    <div className="Modal" onClick={onClick}>
      <div className="Modal__modal">
        <div className="Modal__scrollable">
          <div className="Modal__content">
            <ContentComponent />
          </div>
        </div>
        <div className="Modal__close">
          <CloseIcon onClick={close} />
        </div>
      </div>
    </div>
  )
}
