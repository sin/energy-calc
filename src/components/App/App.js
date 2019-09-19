import React, { Component } from 'react'
import * as store from '../../store'
import Slider from '../Slider/Slider'
import InfoBox from '../InfoBox/InfoBox'
import ComparisonTable from '../ComparisonTable/ComparisonTable'
import { getData } from '../../simulator'
import { INSTALLED_TODAY } from '../../simulator/constants'
import { formatNumber, sum } from '../../simulator/utils'
import './App.css'
import ExternalitiesTable from '../ExternalitiesTable/ExternalitiesTable'

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
    this.toggleDetails = this.toggleDetails.bind(this)
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

  toggleDetails() {
    this.setState(currentState => ({ ...currentState, isDetails: !currentState.isDetails }))
  }

  render() {
    const { installed, results, today } = this.state
    const { nuclear, hydro, solar, wind, chp, gas, coal, oil, demand } = installed
    const hasDeficit = demand - results.totalAvailable > 0

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
                  value={formatNumber({ commaPos: 3 })(results.totalInstalled)}
                  unit={'GW'}
                />
                <InfoBox
                  name="Moc dostępna"
                  value={formatNumber({ commaPos: 3 })(results.totalAvailable)}
                  unit={'GW'}
                  type={hasDeficit ? 'warning' : ''}
                />
                <InfoBox name="Ratio" value={formatNumber(0)(results.ratio)} />
              </div>
              <div className="column">
                <InfoBox
                  name="Emisje CO2"
                  value={formatNumber({ commaPos: 3 })(results.totalCO2)}
                  unit={'mln ton'}
                />
                <InfoBox
                  name="Odpady jądrowe"
                  value={formatNumber()(results.nuclear)}
                  unit={'tys. ton'}
                />
                <InfoBox
                  name="Odpady stałe"
                  value={formatNumber()(results.totalWaste)}
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
              <button onClick={this.toggleDetails} className="DetailsToggle">
                {this.state.isDetails ? 'ukryj' : 'pokaż'}
                {' dane szczegółowe'}
              </button>
              <button onClick={this.reset} className="ResetButton">
                Reset
              </button>
            </div>
          </div>
        </div>
        {this.state.isDetails ? (
          <div className="Details">
            <h3>{'Moc zainstalowana (GW)'}</h3>
            <ComparisonTable
              current={today.installed}
              proposed={results.installed}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ commaPos: 3, fractionDigits: 0 })}
            />
            <h3>{'Moc dostępna (GW)'}</h3>
            <ComparisonTable
              current={today.available}
              proposed={results.available}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ commaPos: 3, fractionDigits: 0 })}
            />
            <h3>{'Wyprodukowana energia (TWh / rok)'}</h3>
            <ComparisonTable
              current={today.energy}
              proposed={results.energy}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ fractionDigits: 0 })}
            />
            <h3>
              {'Emisje CO'}
              <sub>2</sub>
              {' (mln ton / rok)'}
            </h3>
            <ComparisonTable
              current={today.co2}
              proposed={results.co2}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ commaPos: 3, fractionDigits: 0 })}
            />
            <h3>{'Wpływ na środowisko'}</h3>
            <ExternalitiesTable current={today} proposed={results} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
