import React from 'react'
import InfoIcon from '../InfoIcon/InfoIcon'
import './InfoBox.css'

export default function InfoBox({ name, title, value, unit, type = '', openModal }) {
  return (
    <div className="InfoBox">
      <span className="InfoBox__name">
        {title}
        {openModal && <InfoIcon onClick={() => openModal(name)} />}
      </span>
      <span className={`InfoBox__value ${type}`}>{value}</span>
      <span className="InfoBox__unit">{unit}</span>
    </div>
  )
}
