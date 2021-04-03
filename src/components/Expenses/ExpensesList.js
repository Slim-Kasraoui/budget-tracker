import React, {useContext} from "react"
import {AppContext} from "../../context/AppContext"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = () => {
  const {expenses} = useContext(AppContext)
  return (
    <ul className="list-group mt-3 mb-3">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  )
}

export default ExpensesList
