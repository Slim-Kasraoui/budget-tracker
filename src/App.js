import React, { useEffect, useContext } from "react";
import {AppContext} from "./context/AppContext"

import "bootstrap/dist/css/bootstrap.min.css"

import AddExpense from "./components/AddExpense"
import Budget from "./components/Budget/Budget"
import ExpensesList from "./components/Expenses/ExpensesList"
import Remaining from "./components/Remaining"
import SpentSoFar from "./components/SpentSoFar"

function App() {
  const {budget,dispatch} = useContext(AppContext)
  
  useEffect(()=>{
    const getData = async()=>{
      const res = await fetch('http://localhost:5000/db')
      const data = await res.json()
      console.log({data});
      dispatch({
        type: 'GET_DB',
        payload : data
      })
    }
    getData()
  }, [])

  return (
    <div className="container">
      <h1 className="mt-3 d-flex justify-content-center">
        Fancy budget tracker
      </h1>
      <div className="row mt-3">
        <div className="col">
          <Budget/>
        </div>
        <div className="col">
          <Remaining />
        </div>
        <div className="col">
          <SpentSoFar />
        </div>
      </div>
      <h3>Expenses: </h3>
      <div className="row mt-3">
        <div className="col">
          <ExpensesList />
        </div>
      </div>
      <h3>Add expense: </h3>
      <div className="row mt-3">
        <div className="col">
          <AddExpense/>
        </div>
      </div>
    </div>
  )
}

export default App
