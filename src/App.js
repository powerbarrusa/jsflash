import React, { Component } from 'react'
import Card from './components/card'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import data from './data'

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
      hasCard: false,
      name: "",
      description: "",
      example: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000")
    .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata)
        this.setState({
          data: JSONdata
        })
      })
    }

  getRandom (max) {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }

  generateCard = () => {
    const randomIndex = this.getRandom(this.state.data.length)
      const randomCard = this.state.data[randomIndex]
      this.setState({
        hasCard: true,
        name: randomCard.name,
        description: randomCard.description,
        example: randomCard.example
      })
    }

  render() {
    return (
      <div className="App">
        <h1>JS Flash!</h1>
        {this.state.hasCard ?
        <Card
          name = {this.state.name}
          description = {this.state.description}
          example = {this.state.example}
        /> : ""}
        <form>
          <label>
            Your Answer:
            <input type="text" answer="answer" />
          </label>
          <input type="submit" value="Submit" className="btn btn-secondary" />
        </form>
        <button type="button" onClick={this.generateCard} className="btn btn-primary">Generate New Concept</button>
      </div>
    )
  }
}

export default App;
