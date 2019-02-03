import React, { Component } from 'react'
import Card from './components/card'
import AddCard from './components/editfields'
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
      example: "",
      correctAnswer: false,
      newCard: false
    }
  }

  componentDidMount() {
    fetch("https://salty-tor-37309.herokuapp.com")
    .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata)
        this.setState({
          data: JSONdata
        })
      })
    }

  updates = (id, command, prop, value) => {
    let message = {
      messageIds: [id],
      command: command
    }
      fetch("http://localhost:3000/", {
        method: "PATCH",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
    }

  deleteCard = () => {
    const removal = this.state.data.filter(card => card.name !== this.state.name)
    window.alert("removed card!")
    console.log(this.state.name)
    this.setState({
      data: removal
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
        example: randomCard.example,
        correctAnswer: false
      })
    }
    
  myAnswer = (event) => {
    event.preventDefault()
    if (event.target[0].value === this.state.name){
      this.setState({
        correctAnswer: true
      })
    }
  }

  addCard = () => {
    return this.state.newCard ? <AddCard/> : null
  }

  cardEditMode = () => {
    this.setState({newCard: !this.state.newCard})
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
          deleteCard={this.deleteCard}
        /> : ""}
        <form onSubmit={this.myAnswer}>
          <label>
            Your Answer:
            <input type="text" answer="answer" />
          </label>
          <input type="submit" value={this.state.correctAnswer ? "You got it!": "Submit"} className={this.state.correctAnswer ? "btn btn-success" : "btn btn-secondary"} />
        </form>
        <button type="button" onClick={this.generateCard} className="btn btn-primary" id="randomCard">Generate New Concept</button>
        <p><button className="btn btn-warning" type="button" id="addCard" onClick={this.cardEditMode}>Add New Card</button></p>
        {this.addCard()}
      </div>
    )
  }
}

export default App;
