import React from 'react'
import InputRange from 'react-input-range'
import InfoIcon from '../InfoIcon/InfoIcon'

import 'react-input-range/lib/css/index.css'
import './Slider.css'

export default function Slider({ name, title, value, update, openModal }) {
  const onChange = value => update(name, value)
  return (
    <div className="Slider">
      <div className="Slider__label">
        <div className="Slider__name">
          {title}
          {openModal && <InfoIcon onClick={() => openModal(name)} />}
        </div>
        <div className="Slider__value">
          {value}
          <span className="Slider__unit">{' MW'}</span>
        </div>
      </div>
      <InputRange maxValue={35000} minValue={0} step={500} value={value} onChange={onChange} />
    </div>
  )
}
