import React, { Component } from 'react'
import * as store from '../../store'
import Slider from '../Slider/Slider'
import InfoBox from '../InfoBox/InfoBox'
import { getData } from '../../simulator'
import './App.css'

const formatNum = num => num.toFixed(1).replace('.', ',')
const formatGW = num => formatNum(num / 1e3)
const formatWaste = num => formatNum(num / 1e3)
const formatCO2 = num => formatNum(num / 1e6)

const installed = store.load()
const defaultState = {
  installed,
  ...getData(installed)
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
    this.setState({ installed, ...getData(installed) })
  }

  reset() {
    const installed = store.reset()
    this.setState({ installed, ...getData(installed) })
  }

  render() {
    const { installed, total, available, ratio, fuels } = this.state
    const { nuclear, hydro, solar, wind, chp, gas, coal, oil, demand } = installed

    const CO2 = formatCO2(Object.values(fuels).reduce((sum, { co2 }) => sum + co2, 0))
    const nuclearW = fuels.nuclear.waste
    const nuclearWaste = formatWaste(nuclearW)
    const waste = formatWaste(Object.values(fuels).reduce((sum, { waste }) => sum + waste, 0))
    const hasDeficit = demand - available > 0

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
                <InfoBox name="Moc zainstalowana" value={formatGW(total)} unit={'GW'} />
                <InfoBox
                  name="Moc dostępna"
                  value={formatGW(available)}
                  unit={'GW'}
                  type={hasDeficit ? 'warning' : ''}
                />
                <InfoBox name="Ratio" value={formatNum(ratio)} />
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
            <div className="Reset">
              <button onClick={this.reset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
