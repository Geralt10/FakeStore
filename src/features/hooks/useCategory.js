/** @format */

import { useContext } from "react";
import { CategoryContext } from "../context/category.context";

export function useCategory() {
  const {
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    sortOptions,
    selectedSort,
    setSelectedSort,
  } = useContext(CategoryContext);

  return {
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    sortOptions,
    selectedSort,
    setSelectedSort,
  };
}
