import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

const h2= <h2>Hellow React!</h2>
 
// define card function
function Card(props){   
   
   const {title,brand,price,thumbnail} = props
//   console.log(key);
    return <div className='card-container'>
    <img src={thumbnail} alt="iPhone img" />
     <div className="card-content">
     <h3>{title}</h3>
    <p>{brand}</p>
    <p><b>${price}</b></p>
     </div>
</div>
}

function Card2(){
    return <h2>Hellow Rendor</h2>
}

// getting root element to render react element into html
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hh")

//getting data from api

// fetch('https://dummyjson.com/products')
// .then((res)=>res.json())
// .then((data)=>{     
//     // render data from api to our site
//     root.render(<div className="container">{data.products.map((product)=>{   
//         // calling card function here (as map give data when we return something from it)    
//         return Card(
//         {   
//             key: product.id,
//             title: product.title,
//             price: product.price,
//             thumbnail: product.thumbnail,
//             brand: product.brand,
//         })
//     })}</div>);
// })

// const h1 = <h1>Hellow !!!!!!!!</h1> // react element using JSX

// console.log(h1);



// root.render({
//     $$typeof : Symbol.for('react.element'),
//     type:"div", // can be string,tag and function (remeber do not call function)
//     ref: null,
//     props:{
//       thumbnail:'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
//       title:'Mascara',
//       brand:'Essence',
//       price:'12',
//       key:1
//     }

// })

// the below code is less then the above one
// console.log((React.createElement(Card,{
//     thumbnail:'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
//     title:'Mascara',
//     brand:'Essence',
//     price:'12',
//     key:1
// })))

// root.render(React.createElement(Card,{
//           thumbnail:'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
//           title:'Mascara',
//           brand:'Essence',
//           price:'12',
//           key:1
//     }))

root.render(
<Card title="Mascara" thumbnail="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" brand="Essence" price="12"/>
)