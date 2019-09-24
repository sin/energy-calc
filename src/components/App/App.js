import React, { Component, Fragment } from 'react'
import { Buttons, DetailedResults, Footer, Header, Modal, Results, Sliders } from '../'

import * as store from '../../store'
import { getData } from '../../simulator'
import { INSTALLED_TODAY } from '../../simulator/constants'

import './App.css'

const installed = store.load()
const defaultState = {
  installed,
  isModal: false,
  modalContent: null,
  isDetails: false,
  today: getData(INSTALLED_TODAY),
  results: getData(installed)
}

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
    this.reset = this.reset.bind(this)
    this.update = this.update.bind(this)
    this.toggleResults = this.toggleResults.bind(this)
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

  toggleResults() {
    this.setState(currentState => ({ ...currentState, isResults: !currentState.isResults }))
  }

  openModal(name) {
    this.setState(currentState => ({ ...currentState, isModal: true, modalContent: name }))
  }

  closeModal() {
    this.setState(currentState => ({ ...currentState, isModal: false, modalContent: null }))
  }

  render() {
    const { state, update, toggleResults, reset, openModal, closeModal } = this
    const { installed, today, results, isResults, isModal, modalContent } = state
    const { demand } = installed
    const isDeficit = demand - results.totalAvailable > 0

    return (
      <Fragment>
        <div className="App">
          <Header />
          <div className="row">
            <div className="column">
              <Results results={results} isDeficit={isDeficit} openModal={openModal} />
            </div>
            <div className="Sliders column">
              <Sliders installed={installed} update={update} openModal={openModal} />
              <Buttons isResults={isResults} reset={reset} toggleResults={toggleResults} />
            </div>
          </div>
          {isResults ? <DetailedResults results={results} today={today} /> : null}
          <Footer />
        </div>
        {isModal && <Modal content={modalContent} close={closeModal} />}
      </Fragment>
    )
  }
}
