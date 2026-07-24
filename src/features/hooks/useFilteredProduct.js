import { useDeferredValue, useMemo } from "react";
import { useCategory } from "./useCategory";
import { useProduct } from "./useProduct";
import { useSearch } from "./useSearch";

export const useFilteredProduct = () => {
  const { products } = useProduct();
  const { selectedCategory, selectedSort } = useCategory();
  const { searchQuery } = useSearch();

  const deferredSearchValue = useDeferredValue(searchQuery);
  const normalizedSearchValue = deferredSearchValue.trim().toLowerCase();

  const categories = useMemo(() => {
    const categorySet = new Set();

    for (const product of products) {
      categorySet.add(product.category);
    }

    return ["all", ...categorySet];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const filtered = [];

    for (const product of products) {
      const matchSearch =
        !normalizedSearchValue ||
        product.category.toLowerCase().includes(normalizedSearchValue) ||
        product.title.toLowerCase().includes(normalizedSearchValue) ||
        product.description.toLowerCase().includes(normalizedSearchValue);

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      if (matchSearch && matchesCategory) {
        filtered.push(product);
      }
    }

    if (selectedSort === "none") {
      return filtered;
    }

    const sorted = [...filtered];

    const sortDirection = selectedSort === "lowToHigh" ? 1 : -1;

    sorted.sort((a, b) => sortDirection * (a.price - b.price));

    return sorted;
  }, [
    products,
    normalizedSearchValue,
    selectedCategory,
    selectedSort,
  ]);

  return {
    categories,
    filteredProducts,
  };
};