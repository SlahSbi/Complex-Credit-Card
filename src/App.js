import React, { Component } from 'react'
import './App.css';
import Card from './card';
import Form from './form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardHolder: '',
      validThru: '',
      cardNumber: '',
      cardNumberError: '',
      validThruError: '',
      cardHolderError: ''

    }
  }
  searchCardNumber(x) {
    this.setState({ cardNumber: x })
  }
  searchValidThru(x) {

    this.setState({ validThru: x })
  }
  searchCardHolder(x) {
    this.setState({ cardHolder: x })
  }


  render() {
    return (
      <div className="app-container">
        <Card c={this.state.cardHolder} b={this.state.validThru} a={this.state.cardNumber} />
        <Form rempCardNumber={(x) => this.searchCardNumber(x)} rempValidThru={(x) => this.searchValidThru(x)} rempCardHolder={(x) => this.searchCardHolder(x)} />
      </div>
    );
  }
}

export default App;
