
import React from "react";
import { useCategory } from "../hooks/useCategory";
import { useFilteredProduct } from "../hooks/useFilteredProduct";
import { usePagination } from "../hooks/usePagination";
import { useProduct } from "../hooks/useProduct";
import Product from "./Product";

const Products = () => {
  const { products } = useProduct();

  const {
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
  } = useCategory();

  const { makeCategory, filteredAndSortedProduct } =
    useFilteredProduct();

  const categories = makeCategory(products);
  const filteredProducts = filteredAndSortedProduct();

  const {
    currentPage,
    totalPages,
    currentItems,
    nextPage,
    prevPage,
  } = usePagination(filteredProducts, 10);

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Hero */}
        <section className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Premium Collection
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Discover{" "}
            <span className="text-zinc-400">
              Amazing Products
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            Browse curated products with lightning-fast search,
            smart filtering, seamless pagination, and a clean
            shopping experience.
          </p>
        </section>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-white"
          >
            <option value="none">None</option>
            <option value="lowToHigh">
              Price: Low → High
            </option>
            <option value="highToLow">
              Price: High → Low
            </option>
          </select>
        </div>

        {/* Product Grid */}
        <Product currentItems={currentItems} />

        {/* Pagination */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-3 font-semibold">
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Products;

