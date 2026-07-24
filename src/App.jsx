/** @format */

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import Navbar from "./features/components/Navbar";

const Home = lazy(() => import("./features/pages/Home"));
const Cart = lazy(() => import("./features/pages/Cart"));
const Products = lazy(() => import("./features/pages/Products"));
const ProductDetail = lazy(() => import("./features/pages/ProductDetail"));

const App = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;