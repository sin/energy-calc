import React from 'react'
import './InfoBox.css'

export default function InfoBox({ name, value, unit, type = '' }) {
  return (
    <div className="InfoBox">
      <span className="InfoBox__name">{name}</span>
      <span className={`InfoBox__value ${type}`}>{value}</span>
      <span className="InfoBox__unit">{unit}</span>
    </div>
  )
}
