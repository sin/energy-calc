import React from 'react'
import { MdClose } from 'react-icons/md'
import './CloseIcon.css'

export function CloseIcon({ onClick }) {
  return (
    <button className="CloseIcon" onClick={onClick}>
      <MdClose />
    </button>
  )
}
