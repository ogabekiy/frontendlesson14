import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="shadow bg-black h-[80px]">
      <div className="flex items-center justify-around">
        <a href="\"><h1 className="text-white"><img src="https://ih1.redbubble.net/image.2950444449.6282/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="opium" width="30" height="30" /></h1></a>
        <ul className="flex gap-4 p-4 justify-end">
          <li className="text-white">
            <NavLink to="/home">Home 🏘</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/contact">Contact 📞</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
