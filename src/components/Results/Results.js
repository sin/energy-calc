import React from 'react'
import { InfoBox } from '../'
import './Results.css'

export function Results({ results, isDeficit, openModal }) {
  return (
    <div className="row">
      <div className="column">
        <InfoBox
          name="installed"
          title="Moc zainstalowana"
          value={results.totalInstalled}
          format={{ commaPos: 3, fractionDigits: 1, minFractionDigits: 1 }}
          unit={'GW'}
          openModal={openModal}
        />
        <InfoBox
          name="available"
          title="Moc dostępna"
          value={results.totalAvailable}
          format={{ commaPos: 3, fractionDigits: 1, minFractionDigits: 1 }}
          unit={'GW'}
          type={isDeficit ? 'warning' : ''}
          openModal={openModal}
        />
        <InfoBox name="ratio" title="Ratio" value={results.ratio} format={{ fractionDigits: 1 }} />
      </div>
      <div className="column">
        <InfoBox
          name="emissions"
          title="Emisje CO₂"
          value={results.totalCO2}
          unit={'kt'}
          openModal={openModal}
        />
        <InfoBox
          name="nuclearWaste"
          title="Odpady jądrowe"
          value={results.nuclear}
          format={{ fractionDigits: 1 }}
          unit={'kt'}
          openModal={openModal}
        />
        <InfoBox
          name="solidWaste"
          title="Odpady stałe"
          value={results.totalWaste}
          unit={'kt'}
          openModal={openModal}
        />
      </div>
    </div>
  )
}
