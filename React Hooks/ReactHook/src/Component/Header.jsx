import React from "react"
function Header(){
    console.log("header Rerender")
    return(
        <>
        <h1>Header</h1>
        </>
    )
}
// here wrap the header component with React.memo method
export default React.memo(Header)