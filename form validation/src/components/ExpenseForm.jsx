import React, { useState } from "react";
import Input from "./Input";
import Selectoption from "./Selectoption";

export default function ExpenseForm({ setExpenses }) {
  // state for adding new expense
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email:""
  });

  // making validation a object so that we can add mpre than one validation to each input field
  const validationConfig = {
    title: [
      { required: true, message: "please enter title" },
      { minLength: 5, message: "title should be atleast 5 character long" },
    ],
    category: [{ required: true, message: "please select a category" }],
    amount: [{ required: true, message: "please enter an amount" }],
    email: [{ required: true, message: "please enter an email address" },{pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"please enter a valid email"}],
  };

  // state for uvalidation and error message for each field
  const [errors, setErrors] = useState({});

  // function to vallidate
  const validation = (formdata) => {
    const errorsData = {};
   // using if statement each time is not consider as good practice to check the validatio so we use validationconfig objet to apply validation, we wanna check the formData fileds and formData is a object so we can not loop through directly so we firslty access its keys and values, by doing this we get the array of key and value pair
// console.log(Object.entries(formdata)) // now we can use forEach loop
Object.entries(formdata).forEach(([key,value]) =>{
  // console.log(key,value)
  // console.log(validationConfig[key]) // give the array of validation
  // now as we got array we again loop in to to get the all validation list on eachh field
  //here we are using forEach method this loop does not stop at the mid so we need to use some it is also kind of loop which also go through all the rules but if we apply return true then this loop will stop there 
  validationConfig[key].some((rule)=>{
    // console.log(rule)
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

  })
})

// as we are using the above code we do not required the new one
    // if (!expense.title) {
    //   errorsData.title = "Title is required";
    // }

    // if (!expense.category) {
    //   errorsData.category = "category is required";
    // }

    // if (!expense.amount) {
    //   errorsData.amount = "amount is required";
    // }

    setErrors(errorsData);
    return errorsData;
  };

  //to handel submit event
  const handelSubmit = (e) => {
    e.preventDefault(); // to prevent the reload
    const validateResult = validation(expense);
    // console.log(Object.keys(validateResult)) // this will give us the array of key from validateREsult and we can use length property in it
    if (Object.keys(validateResult).length) return;

    console.log(errors); // here this will give us empty object as it will get updated at the same moment, that is even if we are calling validation function but it will not show any error, we have to return as well from validate function
    console.log(validateResult);

    // if(!expense.title) return // to make sure expense title is filled properly but we can not do it like this as we also wanna show errr msg

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]); // update the expense function based on previous state
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  // handel the function onchnage for all three filed together to make code optiise
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    setErrors({}); // to make error unvisible so that when user type in any field error become un visible
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

<Input
        id="email"
        name="email"
        value={expense.email}
        onChange={handleChange}
        label="Email"
        error={errors.email}
      />

      <button className="add-btn">Add</button>
    </form>
  );
}
