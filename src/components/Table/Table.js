import React from 'react'
import './Table.css'

export default function Table({ className, children }) {
  return <table className={className ? `Table ${className}` : 'Table'}>{children}</table>
}
