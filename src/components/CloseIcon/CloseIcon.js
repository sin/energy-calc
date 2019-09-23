import React from 'react'
import { MdClose } from 'react-icons/md'
import './CloseIcon.css'

export default function InfoIcon({ onClick }) {
  return (
    <button className="CloseIcon" onClick={onClick}>
      <MdClose />
    </button>
  )
}
