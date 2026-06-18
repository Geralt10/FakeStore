/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "remixicon/fonts/remixicon.css";
import ProductProvider from "./features/context/product.context.jsx";
import SearchProvider from "./features/context/search.context.jsx";
import CategoryProvider from "./features/context/category.context.jsx";
import CartProvider from "./features/context/cart.context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <SearchProvider>
        <CategoryProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </CategoryProvider>
      </SearchProvider>
    </ProductProvider>
  </StrictMode>,
);
