import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navber";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductId from "./components/ProductId";

export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={<Products/>}
        />
        <Route
          path="/products/:id"
          element={<ProductId/>}
        />
      </Routes>
    </div>
  );
}
