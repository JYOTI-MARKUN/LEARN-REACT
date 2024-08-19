import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import EXpenseData from './EXpenseData'

function App() {
  const [expenses, setExpenses] = useState(EXpenseData)

  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
   <ExpenseForm setExpenses={setExpenses}/>
  <ExpenseTable expenses={expenses}/>
    
    </div>
  </main>
  )
}

export default App
