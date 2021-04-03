import { createContext, useReducer } from "react"

export const AppContext = createContext()

const initialState = {
  budget: 0,
  expenses: [],
}

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_DB":
      console.log(action.payload);
      return {
        state,
        budget: action.payload.budget.amount,
        expenses: action.payload.expenses
      }
      case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload
			}
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      }
    default:
      return state
  }
}

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
