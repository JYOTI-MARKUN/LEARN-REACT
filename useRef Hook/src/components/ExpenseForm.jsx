import React, { useEffect, useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  // const [expense, setExpense] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  // });

  const titleRef = useRef(0);
  const categoryRef = useRef(0);
  const amountRef = useRef(0);

  useEffect(() => {
    // console.log(myRef.current)
    // myRef.current.style.backgroundColor = "red"
    console.log(titleRef);
    console.log(categoryRef);
    console.log(amountRef);
  },[]);
  // console.log("hello")

  // let myVar = 0;

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(expense);
    console.log()
    setExpenses((prevState) => [
      ...prevState,
      { 
        title:titleRef.current.value,
        category:categoryRef.current.value,
        amount:amountRef.current.value,
        id:crypto.randomUUID()
       },
    ]);
    // setExpense({
    //   title: "",
    //   category: "",
    //   amount: "",
    // });
  };

  return (
    <>
      {/* <button onClick={()=>{myRef.current = myRef.current+1}
}   ref={myRef}>Click</button> */}
      <form className="expense-form " onSubmit={handelSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>

          <input
            ref={titleRef}
            id="title"
            name="title"
            // value={expense.title}
            // onChange={(e) =>
            //   setExpense((prevState) => ({
            //     ...prevState,
            //     title: e.target.value,
            //   }))
            // }
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>

          <select
            ref={categoryRef}
            id="category"
            name="category"
            // value={expense.category}
            // onChange={(e) =>
            //   setExpense((prevState) => ({
            //     ...prevState,
            //     category: e.target.value,
            //   }))
            // }
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>

          <input
            ref={amountRef}
            id="amount"
            name="amount"
            // value={expense.amount}
            // onChange={(e) =>
            //   setExpense((prevState) => ({
            //     ...prevState,
            //     amount: e.target.value,
            //   }))
            // }
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}
