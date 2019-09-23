import React, { Component } from 'react'
import * as store from '../../store'
import Slider from '../Slider/Slider'
import InfoBox from '../InfoBox/InfoBox'
import ComparisonTable from '../ComparisonTable/ComparisonTable'
import Modal from '../Modal/Modal'
import { getData } from '../../simulator'
import { INSTALLED_TODAY } from '../../simulator/constants'
import { formatNumber, sum } from '../../simulator/utils'
import './App.css'
import ExternalitiesTable from '../ExternalitiesTable/ExternalitiesTable'

const installed = store.load()
const defaultState = {
  installed,
  isModal: false,
  modalContent: null,
  isDetails: false,
  today: getData(INSTALLED_TODAY),
  results: getData(installed)
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
    this.reset = this.reset.bind(this)
    this.update = this.update.bind(this)
    this.toggleDetails = this.toggleDetails.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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

  openModal(name) {
    this.setState(currentState => ({ ...currentState, isModal: true, modalContent: name }))
  }

  closeModal() {
    this.setState(currentState => ({ ...currentState, isModal: false, modalContent: null }))
  }

  render() {
    const { state, update, openModal } = this
    const { installed, results, today, isDetails, isModal, modalContent } = state
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
                  name="installed"
                  title="Moc zainstalowana"
                  value={formatNumber({ commaPos: 3, fractionDigits: 1, minFractionDigits: 1 })(
                    results.totalInstalled
                  )}
                  unit={'GW'}
                  openModal={openModal}
                />
                <InfoBox
                  name="available"
                  title="Moc dostępna"
                  value={formatNumber({ commaPos: 3, fractionDigits: 1, minFractionDigits: 1 })(
                    results.totalAvailable
                  )}
                  unit={'GW'}
                  type={hasDeficit ? 'warning' : ''}
                  openModal={openModal}
                />
                <InfoBox
                  name="ratio"
                  title="Ratio"
                  value={formatNumber({ fractionDigits: 1 })(results.ratio)}
                />
              </div>
              <div className="column">
                <InfoBox
                  name="emissions"
                  title="Emisje CO₂"
                  value={formatNumber()(results.totalCO2)}
                  unit={'kt'}
                  openModal={openModal}
                />
                <InfoBox
                  name="nuclearWaste"
                  title="Odpady jądrowe"
                  value={formatNumber({ fractionDigits: 1 })(results.nuclear)}
                  unit={'kt'}
                  openModal={openModal}
                />
                <InfoBox
                  name="solidWaste"
                  title="Odpady stałe"
                  value={formatNumber()(results.totalWaste)}
                  unit={'kt'}
                  openModal={openModal}
                />
              </div>
            </div>
          </div>
          <div className="Sliders column">
            <div className="row">
              <div className="column">
                <Slider
                  name="nuclear"
                  title="Atom"
                  value={nuclear}
                  update={update}
                  openModal={openModal}
                />
                <Slider
                  name="hydro"
                  title="Hydro"
                  value={hydro}
                  update={update}
                  openModal={openModal}
                />
                <Slider
                  name="solar"
                  title="Słońce"
                  value={solar}
                  update={update}
                  openModal={openModal}
                />
                <Slider
                  name="wind"
                  title="Wiatr"
                  value={wind}
                  update={update}
                  openModal={openModal}
                />
              </div>
              <div className="column">
                <Slider
                  name="chp"
                  title="Kogeneracja"
                  value={chp}
                  update={update}
                  openModal={openModal}
                />
                <Slider name="gas" title="Gaz" value={gas} update={update} openModal={openModal} />
                <Slider
                  name="coal"
                  title="Węgiel"
                  value={coal}
                  update={update}
                  openModal={openModal}
                />
                <Slider name="oil" title="Ropa" value={oil} update={update} openModal={openModal} />
              </div>
            </div>
            <div className="Buttons">
              <button onClick={this.toggleDetails} className="DetailsToggle">
                {isDetails ? 'ukryj' : 'pokaż'}
                {' dane szczegółowe'}
              </button>
              <button onClick={this.reset} className="ResetButton">
                Reset
              </button>
            </div>
          </div>
        </div>
        {isDetails ? (
          <div className="Details">
            <h3>
              {'Emisje CO'}
              <sub>2</sub>
              {' (kt / rok)'}
            </h3>
            <ComparisonTable
              current={today.co2}
              proposed={results.co2}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber()}
            />
            <h3>{'Wyprodukowana energia (TWh / rok)'}</h3>
            <ComparisonTable
              current={today.energy}
              proposed={results.energy}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ fractionDigits: 1 })}
            />
            <h3>{'Moc zainstalowana (GW)'}</h3>
            <ComparisonTable
              current={today.installed}
              proposed={results.installed}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ commaPos: 3, fractionDigits: 1 })}
            />
            <h3>{'Moc dostępna (GW)'}</h3>
            <ComparisonTable
              current={today.available}
              proposed={results.available}
              totalLabel={'Łącznie'}
              totalFn={arr => arr.reduce(sum)}
              format={formatNumber({ commaPos: 3, fractionDigits: 1 })}
            />
            <h3>{'Wpływ na środowisko'}</h3>
            <ExternalitiesTable current={today} proposed={results} />
          </div>
        ) : null}
        {isModal && <Modal content={modalContent} close={this.closeModal} />}
      </div>
    )
  }
}

export default App
