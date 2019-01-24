import React from 'react'

const Card = (props) => {
  return (
  <div className="container">
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle()}</h5>
        <p className="card-text">{props.cardDesc()}</p>
        <h4 className="card-title">{props.cardTags()}</h4>
        <button type="button" className="btn btn-primary">Generate New Concept</button>
      </div>
    </div>
  </div>
  )
}

export default Card