/** @format */

import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sortOptions] = useState(["none", "lowToHigh", "highToLow"]);
  const [selectedSort, setSelectedSort] = useState("none");
  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        sortOptions,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
