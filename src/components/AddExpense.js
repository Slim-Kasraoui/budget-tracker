import React, { useState, useContext } from "react"
import {AppContext} from "../context/AppContext"
import {v4 as uuidv4} from 'uuid'

const AddExpense = () => {
  const {dispatch} = useContext(AppContext)

  const [name, setName] = useState("")
  const [cost, setCost] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const expense = {
      id : uuidv4(),
      name,
      cost : parseInt(cost)
    }
    dispatch({
      type: 'ADD_EXPENSE',
      payload : expense
    })
    
    await fetch('http://localhost:5000/expenses', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(expense)
      
    })
  }
      
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter expense name..."
          onChange={(event)=> setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cost">cost</label>
        <input
          required
          className="form-control"
          type="number"
          id="cost"
          placeholder="0"
          onChange={(event)=> setCost(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  )
}

export default AddExpense
