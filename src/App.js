import React, { Component } from 'react'
import Card from './card'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data'

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: data
    }
  }

  cardTitle = () => {
    const cardTitle = this.state.data.methods.map(methods => methods.name)
    return cardTitle
  }

  cardDesc = () => {
    const cardDesc = this.state.data.methods.map(methods => methods.description)
    return cardDesc
  }

  cardTags = () => {
    const cardTags = this.state.data.methods.map(methods => methods.tags)
    return cardTags
  }

  render() {
    return (
      <div className="App">
        <h1>JS Flash!</h1>
        <Card
          cardTitle = {this.cardTitle}
          cardDesc = {this.cardDesc}
          cardTags = {this.cardTags}
        />
      </div>
    )
  }
}

export default App;
