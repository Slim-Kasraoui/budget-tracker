import React, { useState, useEffect, useContext } from "react"
import ViewBudget from "./BudgetView"
import EditBudget from "./EditBudget"
import { AppContext } from "../../context/AppContext"

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext)
  const [isEditing, setIsEditing] = useState(false)
  console.log(budget)
  const handleEditClick = () => {
    setIsEditing(true)
  }
  
  
  const handleSaveClick = async (value) => {
    const res = await fetch("http://localhost:5000/budget", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: value }),
    })
    const data = await res.json()
    
    dispatch({
      type: "SET_BUDGET",
      payload: data.amount,
    })
    console.log(data)
    setIsEditing(false)
    
  }

  
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  )
}

export default Budget
