import React, { useState } from "react";

export default function NewCounter(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <>
    <h1>{props.name}</h1>
      <div className="flex text-center">
        <button
          onClick={() => setCount(count + 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count}</span>
        </h1>
        <button
          onClick={() => setCount(count - 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          -
        </button>
      </div>

      <div className="flex text-center">
        <button
          onClick={() => setCount1(count1 + 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count1}</span>
        </h1>
        <button
          onClick={() => setCount1(count1 - 1)}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          -
        </button>
      </div>
    </>
  );
}
