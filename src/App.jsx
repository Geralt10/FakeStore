/** @format */

import React from "react";
import { Route, Routes } from "react-router";
import Home from "./features/pages/Home";
import Cart from "./features/pages/Cart";
import Products from "./features/pages/Products";
import Navbar from "./features/components/Navbar";
import ProductDetail from "./features/pages/ProductDetail";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail/>} />
      </Routes>
    </>
  );
};

export default App;
