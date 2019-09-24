import React from 'react'
import { InfoIcon } from '../'
import { formatNumber } from '../../simulator/utils'
import './InfoBox.css'

export function InfoBox({ name, title, value, format = {}, unit, type = '', openModal }) {
  const formattedValue = formatNumber(format)(value)

  return (
    <div className="InfoBox">
      <span className="InfoBox__name">
        {title}
        {openModal && <InfoIcon onClick={() => openModal(name)} />}
      </span>
      <span className={`InfoBox__value ${type}`}>{formattedValue}</span>
      <span className="InfoBox__unit">{unit}</span>
    </div>
  )
}
