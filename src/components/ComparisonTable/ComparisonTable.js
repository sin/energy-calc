import React from 'react'
import { Table } from '../'
import { LABELS } from '../../simulator/constants'
import { formatNumber, sum } from '../../simulator/utils'
import './ComparisonTable.css'

function Header({ labels, sumValues }) {
  return (
    <tr>
      <th>{'\u00A0'}</th>
      {labels.map((label, index) => (
        <th key={index}>{label}</th>
      ))}
      {sumValues ? <th>Razem</th> : null}
    </tr>
  )
}

function Row({ label = '', values, format, sumValues }) {
  const formatFn = formatNumber(format)
  const total = sumValues && values.reduce(sum)

  return (
    <tr>
      <td>{label}</td>
      {values.map(formatFn).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
      {total ? <td>{formatFn(total)}</td> : null}
    </tr>
  )
}

export function ComparisonTable({ current, proposed, sumValues, format = {} }) {
  const diff = current.map((currentValue, index) => proposed[index] - currentValue)

  return (
    <Table className="ComparisonTable">
      <thead>
        <Header labels={LABELS} sumValues={sumValues}></Header>
      </thead>
      <tbody>
        <Row label="Aktualnie" values={current} format={format} sumValues={sumValues}></Row>
        <Row label="Twoja propozycja" values={proposed} format={format} sumValues={sumValues}></Row>
        <Row label="Różnica" values={diff} format={format} sumValues={sumValues}></Row>
      </tbody>
    </Table>
  )
}
