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
  
  render() {
    return (
      <div className="App">
        <h1>JS Flash!</h1>
        <Card/>
      </div>
    )
  }
}

export default App;
