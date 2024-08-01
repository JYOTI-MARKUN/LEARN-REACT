import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

const h2= <h2>Hellow React!</h2>


function card(key,title,thumbnail,brand,price){
    // console.log(key)
    return <div className='card-container'>
    <img src={thumbnail} alt="iPhone img" />
     <div className="card-content">
     <h3>{title}</h3>
    <p>{brand}</p>
    <p><b>${price}</b></p>
     </div>
</div>
}
// console.log(card())
// const container = [card(1),card(2),card(3),card(4),card(5),card(6),card(7),card(8),card(9),card(10)];

const root = ReactDOM.createRoot(document.getElementById("root"));


console.log("hh")

fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{    
    // console.log(data)
    // const container2 = data.products.map((product)=>{
    //     console.log(product)
    //     return card(product.id,product.title,product.thumbnail,product.price)
    // })
    // console.log(container2)
    root.render(<div className="container">{data.products.map((product)=>{
        // console.log(product)
        return card(product.id,product.title,product.thumbnail,product.brand,product.price)
    })}</div>);
})