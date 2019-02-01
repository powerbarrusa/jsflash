import React from 'react'

const AddCard = (props) => {
  return (
  <form>
    <h3>Add a card!</h3>
    <label>
      <h6>Method Name:</h6>
      <input type="text" name="name" />
      <h6>Method Description:</h6>
      <input type="text" description="description" />
      <h6>Method Example:</h6>
      <input type="text" example="example" />
    </label>
    <p><input className="btn btn-warning" type="submit" value="Submit" /></p>
  </form>
  )
}

export default AddCard