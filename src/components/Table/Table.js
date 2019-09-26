import React from 'react'
import './Table.css'

export function Table({ className, children }) {
  return <table className={className ? `Table ${className}` : 'Table'}>{children}</table>
}
