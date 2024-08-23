import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import EXpenseData from './EXpenseData'

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",

  });

  const [expenses, setExpenses] = useState(EXpenseData)
  const [editingRowId, setEditingRowId] = useState("")


  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
   <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
  <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingRowId={setEditingRowId}/>
    
    </div>
  </main>
  )
}

export default App
