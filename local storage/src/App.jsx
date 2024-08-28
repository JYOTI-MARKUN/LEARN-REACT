import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import EXpenseData from './EXpenseData'
import { useLocalStorage } from '../hooks/useLOcalStorage'

function App() {
  const [expense, setExpense] = useLocalStorage("expense",{
    title: "",
    category: "",
    amount: "",

  });

  const [expenses, setExpenses] = useLocalStorage("expenses",EXpenseData)
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId","")

  // THE Below code is just to explain the localstroarge hook that we have created now we can use this hook in all places
  // const [localStorageData ,setLocalStorageData] = useLocalStorage('myNum',[1,2,3])
  // console.log(localStorageData)


  return (
    <main>
      <h1>Track your Expense</h1>
       {/* here when we set a state we can pass a array as well as a callback function when the state is based on the previous state and we have not written any code that handles the function
      <h1 onClick={()=>{
        // setLocalStorageData((prevState)=>[4,5,6])
        setLocalStorageData((prevState)=>[...prevState,4,5,6]) // this will through an error that prevState is not iterable
      }}
     >Track Your Expense</h1> */}

    {/* <h1 onClick={()=>{
      // when we set localStorageData like this then all time this [4,5,6] will be store in localStorage which we do not want we want whe our local storage is empty then it will take data from it 
      setLocalStorageData([4,5,6])
    }} >Track Your Expense</h1> */}
    {/* <h2>{localStorageData.join(", ")}</h2> */}
    <div className="expense-tracker">
   <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
  <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingRowId={setEditingRowId}/>
    
    </div>
  </main>
  )
}

export default App
