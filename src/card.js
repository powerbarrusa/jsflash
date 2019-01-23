import React from 'react'

const Card = () => {
  return (
  <div className="container">
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" className="btn btn-primary">Submit Answer</button>
      </div>
    </div>
  </div>
  )
}

export default Card