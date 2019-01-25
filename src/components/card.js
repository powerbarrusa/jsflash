import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
  <div className="container">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`Method Name: ${props.name}`}</h5>
        <p className="card-text">{`Method Description: ${props.description}`}</p>
        <h4 className="card-title">{`Method Example: ${props.example}`}</h4>
      </div>
    </div>
  </div>
  )
}

export default Card