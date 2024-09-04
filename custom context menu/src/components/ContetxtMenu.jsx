import React from "react";

// here menuPosition is an object that we get through expenseTable onContextMenu event
export default function ContetxtMenu({ menuPosition, setmenuPosition, setExpenses,rowId }) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{...menuPosition}}>
      <div
        onClick={() => {
          console.log("editing")
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
