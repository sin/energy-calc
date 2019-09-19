import React from 'react'
import Table from '../Table/Table'
import { LABELS } from '../../simulator/constants'
import { round, identity } from '../../simulator/utils'
import './ComparisonTable.css'

function Header({ values, formatFn = identity, totalLabel }) {
  return (
    <tr>
      <th>{'\u00A0'}</th>
      {values.map(formatFn).map((value, index) => (
        <th key={index}>{value}</th>
      ))}
      {totalLabel ? <th>{totalLabel}</th> : null}
    </tr>
  )
}

function Row({ title = '', values, format = identity, total = null }) {
  return (
    <tr>
      <td>{title}</td>
      {values.map(format).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
      {total !== null ? <td>{format(total)}</td> : null}
    </tr>
  )
}

export default function ComparisonTable({
  current,
  proposed,
  totalLabel = '',
  totalFn,
  format = round
}) {
  const diff = current.map((currentValue, index) => proposed[index] - currentValue)
  const [totalCurrent, totalProposed, totalDiff] = totalFn
    ? [totalFn(current), totalFn(proposed), totalFn(diff)]
    : []

  return (
    <Table className="ComparisonTable">
      <thead>
        <Header values={LABELS} isHeader={true} totalLabel={totalLabel}></Header>
      </thead>
      <tbody>
        <Row values={current} title="Aktualnie" format={format} total={totalCurrent}></Row>
        <Row values={proposed} title="Proponowane" format={format} total={totalProposed}></Row>
        <Row values={diff} title="Różnica" format={format} total={totalDiff}></Row>
      </tbody>
    </Table>
  )
}
