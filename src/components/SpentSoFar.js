import React, {useContext} from 'react'
import {AppContext} from "../context/AppContext"

const SpentSoFar = () => {
  const {expenses} = useContext(AppContext)
  const spent = expenses.reduce((total, expense)=>{
    console.log(expense);
    return total += expense.cost
  }, 0)

  return (
    <div className="alert alert-primary p-4">
      Spent so far: {spent} €
    </div>
  )
}

export default SpentSoFar

