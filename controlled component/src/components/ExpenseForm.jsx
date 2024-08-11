import React, { useState } from 'react'

export default function ExpenseForm({setExpenses}) {
const [title,setTitle] = useState("")
const [category,setCategory] = useState("")
const [amount,setAmount] = useState("")
const [expense,setExpense] = useState({
  title:"",
  category:"",
  amount:"",
})

const handelSubmit = (e)=>{
e.preventDefault()
console.log(expense)
// const expense = {id:crypto.randomUUID,title,category,amount}
setExpenses((prevState)=>[...prevState,{...expense,id:crypto.randomUUID()}])
// e.target.reset()
// setAmount("")
// setCategory("")
// setTitle("")

setExpense({
  title:"",
  category:"",
  amount:"",
})

}

  return (
    <form className="expense-form " onSubmit={handelSubmit}>

    <div className="input-container">
      <label htmlFor="title">Title</label>
      {/* <input id="title" name='title' value={setExpenses.title} onChange={(e)=>setTitle(e.target.value)} /> */}
      <input id="title" name='title' value={expense.title} onChange={(e)=>setExpense((prevState)=>({...prevState,title:e.target.value}))} />
    </div>
    <div className="input-container">
      <label htmlFor="category">Category</label>
      {/* <select id='category' name='category' value={expenses.category} onChange={(e)=>setCategory(e.target.value)} > */}
      <select id='category' name='category' value={expense.category} onChange={(e)=>setExpense((prevState)=>({...prevState,category:e.target.value}))} >
            <option value="" hidden>Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
    </div>
    <div className="input-container">      
      <label htmlFor="amount">Amount</label>
      {/* <input id="amount" name='amount' value={expenses.amount} onChange={(e)=>setAmount(e.target.value)}/> */}
      <input id="amount" name='amount' value={expense.amount} onChange={(e)=>setExpense((prevState)=>({...prevState,amount:e.target.value}))}/>
    </div>
    <button className="add-btn">Add</button>
  </form>
  )
}
