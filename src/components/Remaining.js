import React, {useContext} from 'react'
import {AppContext} from "../context/AppContext"
const Remaining = () => {
  const {budget, expenses} = useContext(AppContext)
  const spent = expenses.reduce((total, expense)=>{
    return total += expense.cost
  }, 0)
  return (
    <div className="alert alert-success p-4">Remaining: {budget - spent} €</div>
  )
}

export default Remaining
