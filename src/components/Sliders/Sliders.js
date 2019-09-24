import React from 'react'
import { Slider } from '../'
import './Sliders.css'

export function Sliders({ installed, update, openModal }) {
  const { nuclear, hydro, solar, wind, chp, gas, coal, oil } = installed
  return (
    <div className="row">
      <div className="column">
        <Slider name="nuclear" title="Atom" value={nuclear} update={update} openModal={openModal} />
        <Slider name="hydro" title="Hydro" value={hydro} update={update} openModal={openModal} />
        <Slider name="solar" title="Słońce" value={solar} update={update} openModal={openModal} />
        <Slider name="wind" title="Wiatr" value={wind} update={update} openModal={openModal} />
      </div>
      <div className="column">
        <Slider name="chp" title="Kogeneracja" value={chp} update={update} openModal={openModal} />
        <Slider name="gas" title="Gaz" value={gas} update={update} openModal={openModal} />
        <Slider name="coal" title="Węgiel" value={coal} update={update} openModal={openModal} />
        <Slider name="oil" title="Ropa" value={oil} update={update} openModal={openModal} />
      </div>
    </div>
  )
}
