import React, { Component } from 'react'
import * as store from '../../store'
import Slider from '../Slider/Slider'
import InfoBox from '../InfoBox/InfoBox'

import { getData } from '../../simulator'
import { INSTALLED_TODAY } from '../../simulator/constants'
import { formatNumber } from '../../simulator/utils'
import './App.css'

const installed = store.load()
const defaultState = {
  installed,
  isDetails: false,
  today: getData(INSTALLED_TODAY),
  results: getData(installed)
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
    this.reset = this.reset.bind(this)
  }

  update(name, value) {
    const installed = {
      ...this.state.installed,
      [name]: value
    }

    store.save(installed)
    this.setState(currentState => ({ ...currentState, installed, results: getData(installed) }))
  }

  reset() {
    const installed = store.reset()
    this.setState(currentState => ({ ...currentState, installed, results: getData(installed) }))
  }

  render() {
    const { installed, results, today } = this.state
    const { nuclear, hydro, solar, wind, chp, gas, coal, oil, demand } = installed
    const hasDeficit = demand - results.available > 0
    return (
      <div className="App">
        <div className="row">
          <div className="column title">
            <h1>
              Kalkulator
              <br />
              Miksu
              <br />
              <span className="colored">Energetycznego</span>
            </h1>
          </div>
          <div className="column lead">
            <p>
              Tutaj masz możliwość decydowania o produkcji energii elektrycznej w Polsce. Wyzwanie
              polega na posiadaniu wystarczającej mocy, gdy popyt jest najwyszy, przy jak
              najmniejszych konsekwencjach środowiskowych. Ty budujesz - ty decydujesz!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="Results column">
            <div className="row">
              <div className="column">
                <InfoBox
                  name="Moc zainstalowana"
                  value={formatNumber(3)(results.totalInstalled)}
                  unit={'GW'}
                />
                <InfoBox
                  name="Moc dostępna"
                  value={formatNumber(3)(results.totalAvailable)}
                  unit={'GW'}
                  type={hasDeficit ? 'warning' : ''}
                />
                <InfoBox name="Ratio" value={formatNumber(0)(results.ratio)} />
              </div>
              <div className="column">
                <InfoBox
                  name="Emisje CO2"
                  value={formatNumber(3)(results.totalCO2)}
                  unit={'mln ton'}
                />
                <InfoBox
                  name="Odpady jądrowe"
                  value={formatNumber(0)(results.nuclear)}
                  unit={'tys. ton'}
                />
                <InfoBox
                  name="Odpady stałe"
                  value={formatNumber(0)(results.totalWaste)}
                  unit={'tys. ton'}
                />
              </div>
            </div>
          </div>
          <div className="Sliders column">
            <div className="row">
              <div className="column">
                <Slider
                  name="Atom"
                  value={nuclear}
                  update={value => this.update('nuclear', value)}
                />
                <Slider name="Hydro" value={hydro} update={value => this.update('hydro', value)} />
                <Slider name="Słońce" value={solar} update={value => this.update('solar', value)} />
                <Slider name="Wiatr" value={wind} update={value => this.update('wind', value)} />
              </div>
              <div className="column">
                <Slider
                  name="Kogeneracja"
                  value={chp}
                  update={value => this.update('chp', value)}
                />
                <Slider name="Gaz" value={gas} update={value => this.update('gas', value)} />
                <Slider name="Węgiel" value={coal} update={value => this.update('coal', value)} />
                <Slider name="Ropa" value={oil} update={value => this.update('oil', value)} />
              </div>
            </div>
            <div className="Buttons">
              <button onClick={this.reset} className="ResetButton">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
