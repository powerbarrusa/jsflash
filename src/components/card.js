import React from 'react'

const Card = (props) => {
  return (
  <div className="container">
    <div className="card">
      <h5 className="card-header">Guess The Method!</h5>
      <p className="card-text">{`Method Description: ${props.description}`}</p>
      <h4 className="card-title">{`Method Example: ${props.example}`}</h4>
        <div>
          <button type="button" className="btn btn-danger d-flex justify-content-start" onClick={props.deleteCard} >Delete Card</button>
        </div>
    </div>
  </div>
  )
}

export default Card