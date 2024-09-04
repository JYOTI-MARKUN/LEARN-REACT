import React, { useState } from "react";
import Input from "./Input";
import Selectoption from "./Selectoption";

export default function ExpenseForm({ setExpenses }) {

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",

  });


  const validationConfig = {
    title: [
      { required: true, message: "please enter title" },
      { minLength: 5, message: "title should be atleast 5 character long" },
    ],
    category: [{ required: true, message: "please select a category" }],
    amount: [{ required: true, message: "please enter an amount" },{validAmount:/^-?\d+$/,message:"Please enter a valid amount"}],

  };


  const [errors, setErrors] = useState({});

  const validation = (formdata) => {
    const errorsData = {};

Object.entries(formdata).forEach(([key,value]) =>{
 
  validationConfig[key].some((rule)=>{

    if(rule.required && !value){
      errorsData[key] = rule.message
      return true
    }
    if(rule.minLength && value.length < 5){
      errorsData[key] = rule.message
      return true
    }

    if(rule.pattern && !(rule.pattern.test(value)) ){
      errorsData[key] = rule.message
      return true
    }

    if(rule.validAmount && !(rule.validAmount.test(value)) ){
      errorsData[key] = rule.message
      return true
    }

  })
})


    setErrors(errorsData);
    return errorsData;
  };


  const handelSubmit = (e) => {
    e.preventDefault()
    const validateResult = validation(expense);
       if (Object.keys(validateResult).length) return;

    console.log(errors);
    console.log(validateResult);

    
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]); 
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };


  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form " onSubmit={handelSubmit}>
      <Input
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        label="Title"
        error={errors.title}
      />

      <Selectoption
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        label="Category"
        defaultOption="Select Category"
        options={["grocery", "clothes", "bills", "education", "medicine"]}
        error={errors.category}
      />

      <Input
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        label="Amount"
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
