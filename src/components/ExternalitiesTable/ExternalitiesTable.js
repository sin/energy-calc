import React from 'react'
import { Table } from '../'
import { formatNumber } from '../../simulator/utils'
import './ExternalitiesTable.css'

export function ExternalitiesTable({ current, proposed }) {
  const currentCO2kWh = current.totalCO2 / current.totalEnergy
  const proposedCO2kWh = proposed.totalCO2 / proposed.totalEnergy

  const data = [
    {
      label: 'Powierzchnia upraw (tysiące kilometrów kwadratowych)',
      values: ['-', '-', '-']
    },
    {
      label: 'Turbiny wiatrowe (tysiące średniej wielkości wiatraków)',
      values: ['-', '-', '-']
    },
    {
      label: 'Panele słoneczne (kilometry kwadratowe paneli słonecznych)',
      values: ['-', '-', '-']
    },
    {
      label: 'Dwutlenek węgla (miliony ton dwutlenku węgla rocznie)',
      values: [current.totalCO2, proposed.totalCO2, proposed.totalCO2 - current.totalCO2].map(
        formatNumber({ commaPos: 3, fractionDigits: 0 })
      )
    },
    {
      label: 'Dwutlenek węgla (gCO₂/kWh)',
      values: [currentCO2kWh, proposedCO2kWh, proposedCO2kWh - currentCO2kWh].map(
        formatNumber({ fractionDigits: 0 })
      )
    },
    {
      label: 'Odpady jądrowe (tony zużytego paliwa jądrowego rocznie)',
      values: [current.nuclear, proposed.nuclear, proposed.nuclear - current.nuclear].map(
        formatNumber({ fractionDigits: 0 })
      )
    }
  ]

  return (
    <Table className="ExternalitiesTable">
      <thead>
        <tr>
          <th>{''}</th>
          <th>{'Aktualnie'}</th>
          <th>{'Proponowane'}</th>
          <th>{'Różnica'}</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ label, values }, index) => (
          <tr key={index}>
            <td>{label}</td>
            {values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
