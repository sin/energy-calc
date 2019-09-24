import React from 'react'
import './Header.css'

export function Header() {
  return (
    <div className="row">
      <div className="Header__title column">
        <h1>
          Kalkulator
          <br />
          Miksu
          <br />
          <span className="Header__colored">Energetycznego</span>
        </h1>
      </div>
      <div className="Header__lead column">
        <p>
          Tutaj masz możliwość decydowania o produkcji energii elektrycznej w Polsce. Wyzwanie
          polega na posiadaniu wystarczającej mocy, gdy zapotrzebowanie jest najwysze, przy jak
          najmniejszych konsekwencjach środowiskowych. Ty budujesz - ty decydujesz!
        </p>
      </div>
    </div>
  )
}
