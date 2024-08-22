import React from "react";

// here menuPosition is an object that we get through expenseTable onContextMenu event
export default function ContetxtMenu({ menuPosition, setmenuPosition, setExpenses,rowId,setExpense ,expenses,setEditingRowId}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{...menuPosition}}>
      <div
        onClick={() => {
          // as we required the edit row in the form whne we click on the edit button, so we will not hardcode the value
        
          //here the below code will give us id also so when we edit this it will through error as it will match for the id and will not atch this so we will destructre this to get only the required field, we can now edit it but when we click on add button it will add new row
          const {title,category,amount} = expenses.find((expense)=>expense.id===rowId)  
          setEditingRowId(rowId)      
        setExpense({title,category,amount})  
          setmenuPosition({})
         
        }}
      >
        Edit
      </div>
      <div onClick={() => {console.log("deleting")
        setmenuPosition({})
        setExpenses((prevState)=>prevState.filter(expense=>expense.id!==rowId))
      }}>Delete</div>
    </div>
  );
}
