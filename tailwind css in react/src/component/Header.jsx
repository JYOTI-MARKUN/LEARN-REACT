import React from "react";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between hover:bg-pink-50 py-4 px-4 shadow-md md:px-8 pb-4 ">
      <img src={viteLogo} alt="" />
      <ul className="flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
