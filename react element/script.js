// const h2 = React.createElement("h2",{className:"subheading",id:"heading2"},"hellow react");

const container = React.createElement(
  "div",
  { id: "container", className: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement("p", { key: 1 }, "i am a para"),
      React.createElement("span", { key: 2 }, "i am span"),
      React.createElement("div", { key: 3 }, [
        React.createElement("a", { key: 4 }, "anchor tag"),
        React.createElement("img", {
          key: 5,
          style: { width: 100 },
          src: "image.png",
        }),
      ]),
    ]),
  ],
  [
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 2 }, [
        React.createElement("div", { key:2 ,className:"inputGroup"}, [
          React.createElement("input", { key: 2, id: "userName" }),
          React.createElement(
            "label",
            { key: 3, htmlFor: "username" },
            "UserName"
          ),
        ]),
        React.createElement("div", { key:3 ,className:"inputGroup"}, [
          React.createElement("input", { key: 4, id: "password" ,type:"password"}),
          React.createElement(
            "label",
            { key: 3, htmlFor: "password" },
            "Password"
          ),
        ]),
      ]),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h2);
root.render(container);

// const h2  =  document.createElement("h2");
// console.dir(h2);
// document.querySelector("#root").append(h2)

//   $$typeof: Symbol.for("react.element"),
//   type: "h2",
//   ref: null,
//   props: {
//     children: [
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "span",
//         ref: null,
//         props: {
//           children: "hellow react",
//         },
//       },      {
//         $$typeof: Symbol.for("react.element"),
//         type: "i",
//         ref: null,
//         props: {
//           children: [      {
//             $$typeof: Symbol.for("react.element"),
//             type: "span",
//             ref: null,
//             props: {
//               children: "hellow react in and span",
//             },
//           },],
//         },
//       },      {
//         $$typeof: Symbol.for("react.element"),
//         type: "p",
//         ref: null,
//         props: {
//           children: "hellow react",
//         },
//       },
//     ],
//   },
// };
