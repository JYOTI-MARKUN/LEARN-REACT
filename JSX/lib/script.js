const user = "Jyoti Markun";
const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", user);

// const content = <div id="container" className="container">
//     <section>
//         <p>i am a para</p>
//         <span>i am span</span>
//         <div>
//             <a>anchor tag</a>
//             <img 
//             src="image.png" 
//             style={{
//                 width: 100,
//                 }}/>
//         </div>
//     </section>
//     <section>
//         <form>
//             <div className="inputGroup">
//                 <label htmlFor="username">UserName</label>
//                 <input id="userName" />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="password">Password</label>
//                 <input id="password" type="password" />
//             </div>
//         </form>
//     </section>
//     </div>
const root = ReactDOM.createRoot(document.querySelector("#root"));
// console.log(content)  // this will through an error if we do not include type attribute in script tag to text/babel
// root.render(content);

root.render(h2);