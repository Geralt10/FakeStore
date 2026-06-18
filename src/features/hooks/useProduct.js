import { useContext, useEffect } from "react";

import { productApi } from "../services/api.store";
import { ProductContext } from "../context/product.context";

export function useProduct() {
  const {products,setProducts}=useContext(ProductContext)

  async function handleProduct() {
    try {
      const data = await productApi();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    handleProduct();
  }, []);

  return {
    products,
    setProducts,
    handleProduct,
  };
}