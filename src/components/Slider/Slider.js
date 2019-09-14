import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import './Slider.css'

export default function Slider(props) {
  return (
    <div className="slider">
      <p>{`${props.name}: ${props.value}`}</p>
      <InputRange
        maxValue={25000}
        minValue={0}
        step={500}
        value={props.value}
        onChange={props.update}
      />
    </div>
  )
}
