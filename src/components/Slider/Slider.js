import React from 'react'
import InputRange from 'react-input-range'
import InfoIcon from '../InfoIcon/InfoIcon'

import 'react-input-range/lib/css/index.css'
import './Slider.css'

export default function Slider({ name, value, update }) {
  return (
    <div className="Slider">
      <div className="Slider__label">
        <div className="Slider__name">
          {name}
          <InfoIcon />
        </div>
        <div className="Slider__value">
          {value}
          <span className="Slider__unit">{' MW'}</span>
        </div>
      </div>
      <InputRange maxValue={35000} minValue={0} step={500} value={value} onChange={update} />
    </div>
  )
}
