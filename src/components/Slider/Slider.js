import React from 'react'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'
import './Slider.css'

export default function Slider({ name, value, update }) {
  return (
    <div className="Slider">
      <div className="Slider__label">
        <div className="Slider__name">{name}</div>
        <div className="Slider__value">
          {value}
          <span className="Slider__unit">{' MW'}</span>
        </div>
      </div>
      <InputRange maxValue={25000} minValue={0} step={500} value={value} onChange={update} />
    </div>
  )
}
