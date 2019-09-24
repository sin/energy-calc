import React from 'react'
import './Butons.css'

export function Buttons({ isResults, toggleResults, reset }) {
  return (
    <div className="Buttons">
      <button className="Buttons__toggle-results" onClick={toggleResults}>
        {isResults ? 'ukryj' : 'pokaż'}
        {' szczegółowe dane'}
      </button>
      <button className="Buttons__reset" onClick={reset}>
        Reset
      </button>
    </div>
  )
}
