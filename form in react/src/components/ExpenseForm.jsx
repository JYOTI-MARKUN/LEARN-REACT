import React from 'react'

export default function ExpenseForm({setExpenses}) {
const handelSubmit = (e)=>{
e.preventDefault()
// console.log(getFormData(e.target))
setExpenses((prevState)=>[...prevState,{...getFormData(e.target),id:crypto.randomUUID()}])
e.target.reset()
}

const getFormData=(form)=>{
const formdata = new FormData(form)
const data ={}
for(const [key,value] of formdata.entries()){
  console.log(key,value)
  data[key]=value
}
return data
}

  return (
    <form className="expense-form " onSubmit={handelSubmit}>

    <div className="input-container">
      <label htmlFor="title">Title</label>
      <input id="title" name='title' />
    </div>
    <div className="input-container">
      <label htmlFor="category">Category</label>
      <select id='category' name='category' >
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
      <input id="amount" name='amount'/>
    </div>
    <button className="add-btn">Add</button>
  </form>
  )
}
