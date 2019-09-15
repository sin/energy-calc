import React, { Component } from 'react'
import Slider from '../Slider/Slider'
import InfoBox from '../InfoBox/InfoBox'
import { getEnergyData } from '../../simulator/'
import './App.css'

const formatNum = num => num.toFixed(1).replace('.', ',')
const formatGW = num => formatNum(num / 1e3)
const formatWaste = num => formatNum(num / 1e3)
const formatCO2 = num => formatNum(num / 1e6)

const INSTALLED_POWERS = {
  nuclear: 9000,
  hydro: 16000,
  wind: 7500,
  solar: 500,
  gas: 500,
  oil: 1000,
  chp: 4500,
  coal: 0,
  demand: 26700
}

const defaultState = {
  installedPowers: { ...INSTALLED_POWERS },
  ...getEnergyData(INSTALLED_POWERS)
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  update(name, value) {
    const installedPowers = {
      ...this.state.installedPowers,
      [name]: value
    }

    this.setState({ installedPowers, ...getEnergyData(installedPowers) })
  }

  render() {
    const { installedPowers, powerInstalled, powerAvailable, powerRatio, fuelTable } = this.state
    const { nuclear, hydro, solar, wind, chp, gas, coal, oil, demand } = installedPowers

    const CO2 = formatCO2(fuelTable.reduce((a, b) => a + b[3], 0))
    const nuclearW = fuelTable[0][2]
    const nuclearWaste = formatWaste(nuclearW)
    const waste = formatWaste(fuelTable.reduce((a, b) => a + b[2], 0) - nuclearW)
    const hasDeficit = demand - powerAvailable > 0

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
                <InfoBox name="Moc zainstalowana" value={formatGW(powerInstalled)} unit={'GW'} />
                <InfoBox
                  name="Moc dostępna"
                  value={formatGW(powerAvailable)}
                  unit={'GW'}
                  type={hasDeficit ? 'warning' : ''}
                />
                <InfoBox name="Ratio" value={formatNum(powerRatio)} />
              </div>
              <div className="column">
                <InfoBox name="Emisje CO2" value={CO2} unit={'mln ton'} />
                <InfoBox name="Odpady jądrowe" value={nuclearWaste} unit={'tys. ton'} />
                <InfoBox name="Odpady stałe" value={waste} unit={'tys. ton'} />
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
          </div>
        </div>
      </div>
    )
  }
}

export default App
