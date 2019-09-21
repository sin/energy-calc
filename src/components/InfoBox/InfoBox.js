import React from 'react'
import InfoIcon from '../InfoIcon/InfoIcon'
import './InfoBox.css'

export default function InfoBox({ name, value, unit, type = '' }) {
  return (
    <div className="InfoBox">
      <span className="InfoBox__name">
        {name}
        <InfoIcon />
      </span>
      <span className={`InfoBox__value ${type}`}>{value}</span>
      <span className="InfoBox__unit">{unit}</span>
    </div>
  )
}
