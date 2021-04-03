import React, {useContext} from "react"
import {AppContext} from "../../context/AppContext"
import { TiDelete } from "react-icons/ti"

const ExpenseItem = ({id, name, cost }) => {
  const {dispatch} = useContext(AppContext)

  const handleDelete = async ()=>{
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: 'DELETE'
    })
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">{cost} €</span>
        <TiDelete style={{ cursor: "pointer" }} size="1.5em" onClick={handleDelete}></TiDelete>
      </div>
    </li>
  )
}

export default ExpenseItem
