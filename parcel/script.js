import {user} from "./data.js"  // we know we can imprt like this when we try to import react in the same way we get an error

import React from 'react'
import ReactDOM from 'react-dom/client'
console.log(React);

const h1 = <h1>Hellow React With Parcel</h1>
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1);
console.log("hi");
