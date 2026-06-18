/** @format */

import React from "react";
import { useProduct } from "../hooks/useProduct";
import { useFilteredProduct } from "../hooks/useFilteredProduct";
import { usePagination } from "../hooks/usePagination";
import { useCategory } from "../hooks/useCategory";
import Product from "./Product";
import { Link } from "react-router";

const Products = () => {
  const { products } = useProduct();

  const {
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
  } = useCategory();

  const { makeCategory, filteredAndSortedProduct } = useFilteredProduct();

  const categories = makeCategory(products);
  const filteredProducts = filteredAndSortedProduct();

  const { currentPage, totalPages, currentItems, nextPage, prevPage } =
    usePagination(filteredProducts, 10);

  return (
    <main className='min-h-screen bg-[#09090b] text-white'>
      {/* Background Effects */}

      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-violet-600/20 blur-3xl' />
        <div className='absolute right-[-100px] bottom-[-100px] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl' />
      </div>
      <div className='mx-auto max-w-7xl px-5 py-10'>


        {/* Hero */}
        <div className='mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='mb-3 text-sm uppercase tracking-[0.3em] text-violet-400'>
              Premium Collection
            </p>

            <h1 className='text-4xl font-black sm:text-5xl lg:text-6xl'>
              Discover
              <span className='bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                {" "}
                Amazing Products
              </span>
            </h1>

            <p className='mt-4 max-w-xl text-zinc-400'>
              Browse curated products with lightning-fast search, category
              filters and smart sorting.
            </p>
          </div>

          <div className='rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-4 backdrop-blur'>
            <p className='text-sm text-zinc-400'>Available Products</p>
            <h2 className='text-4xl font-bold'>{filteredProducts.length}</h2>
          </div>
        </div>


        {/* Filter Bar */}
        <div className='mb-10 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 backdrop-blur md:flex-row md:items-center md:justify-between'>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-violet-500'
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
            className='rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-violet-500'
          >
            <option value='none'>Default</option>
            <option value='lowToHigh'>Price: Low → High</option>
            <option value='highToLow'>Price: High → Low</option>
          </select>
        </div>


        {/* Products */}
        <Product currentItems={currentItems} />
        

        {/* Pagination */}
        <div className='mt-14 flex items-center justify-center gap-3'>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className='rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:border-violet-500 hover:bg-violet-600 disabled:opacity-40'
          >
            ← Previous
          </button>

          <div className='rounded-xl bg-zinc-900 px-6 py-3 font-semibold'>
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className='rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:border-violet-500 hover:bg-violet-600 disabled:opacity-40'
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
};

export default Products;
