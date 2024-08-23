import React, { useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import ContetxtMenu from "./ContetxtMenu";

export default function ExpenseTable({
  expenses,
  setExpenses,
  setExpense,
  setEditingRowId,
}) {
  const [result, setQuery] = useFilter(expenses, (data) => data.category);
  // console.log(result)

  const totalAmount = result.reduce(
    (accu, current) => accu + parseInt(current.amount),
    0
  );
  const [menuContext, setMenuContext] = useState({});
  const [rowId, setRowId] = useState("");
//  state for sorting when we pass sfunction as the initial state then this functions reurn value will be the starting value of the state, so here we will return a callbackfunction from a callback function so that the initial state of this will be a callback function
const [sortCallback,setSortCallbackSort] = useState(()=>()=>{})

console.log(sortCallback);

  return (
    <>
      <ContetxtMenu
        menuPosition={menuContext}
        setmenuPosition={setMenuContext}
        setExpenses={setExpenses}
        rowId={rowId}
        setExpense={setExpense}
        expenses={expenses}
        setEditingRowId={setEditingRowId}
      />
      {/* // setting menupostion back to empty as we want to hide contextmenu when user click on the table */}
      <table
        className="expense-table"
        onClick={(e) => {
          console.log("table clicked")
          // now below we are trying to optimize as this below code will rerender the page every time so we apply a condition in to that rerender only whenmenuPosition.left is present
          if (menuContext.left) {
            setMenuContext({});
          }
        }}
      >
        <thead>
          <tr>
          <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                           
                  onClick={() => {         
                 
                    setSortCallbackSort(()=>(a, b) => a.title.localeCompare(b.title));
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
              

                  onClick={() => {         
                 
                    setSortCallbackSort(()=>(a, b) => b.title.localeCompare(a.title));
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select
                onChange={(e) => {
                  setQuery(e.target.value.toLowerCase());
                }}
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  // the below code will sort the amount in ascending order but it is sorting old values so it should not rerender but but as we have applied onlick on table and updating the state and we know when we update the state then our page rerender so to avoid that we use e.stopPropagation
                  // onClick={(e)=>{
                  //   e.stopPropagation()
                  //   // here as we know sort does not make new array so we make our self by destructring so react will get to know there is difference between new and old value so it will rerender it
                  //   setExpenses((prevState)=>[...prevState.sort((a,b)=>a.amount-b.amount)])}}

                  // onClick={() => {
                   
                  //   // as we optimize the table click value so now we do not need to apply stopPropagation
                  //   // e.stopPropagation()

                  //   setExpenses((prevState) => [
                  //     ...prevState.sort((a, b) => a.amount - b.amount),
                  //   ]);
                  // }}

                  
                  onClick={() => {         
                 
                    setSortCallbackSort(()=>(a, b) => a.amount - b.amount);
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  
                  // onClick={() => {                   
                  //   // as we optimize the table click value so now we do not need to apply stopPropagation
                  //   // e.stopPropagation()
                  //   setExpenses((prevState) => [
                  //     ...prevState.sort((a, b) => b.amount - a.amount),
                  //   ]);
                  // }}

                  onClick={() => {         
                 
                    setSortCallbackSort(()=>(a, b) => b.amount - a.amount);
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {result.sort(sortCallback).map(({ id, title, category, amount }) => (
            <tr
              key={id}
              onContextMenu={(e) => {
                e.preventDefault();
                setMenuContext({ left: e.clientX + 4, top: e.clientY + 4 });
                setRowId(id);
              }}
            >
              <td>{title}</td>
              <td>{category}</td>
              <td>₹{amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th className="clear-sort" onClick={()=>setSortCallbackSort(()=>{})}>Clear Sort</th>
            <th>₹{totalAmount}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
