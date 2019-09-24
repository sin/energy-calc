import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import './InfoIcon.css'

export function InfoIcon({ onClick }) {
  return (
    <button className="InfoIcon" onClick={onClick}>
      <FaInfoCircle />
    </button>
  )
}
