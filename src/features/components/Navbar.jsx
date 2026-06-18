/** @format */

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useSearch } from "../hooks/useSearch";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()
  function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);
    if(location.pathname!="/products"){
        navigate("/products")
    }
  }

  return (
    <nav className='bg-zinc-900 text-white px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between gap-6'>
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className='text-2xl font-bold cursor-pointer'
        >
          FakeProduct
        </h1>

        {/* Search - Center */}
        <div className='hidden md:flex flex-1 justify-center'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearch}
            className='w-full max-w-md px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-blue-500'
          />
        </div>

        {/* Right Side */}
        <div className='hidden md:flex items-center gap-6'>
          <Link to='/products' className='hover:text-blue-400'>
            Products
          </Link>

          <Link
            to='/cart'
            className='flex items-center gap-2 hover:text-blue-400'
          >
            <i className='ri-shopping-cart-2-line text-xl'></i>
            Cart
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className='md:hidden text-3xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden mt-4 flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearch}
            className='w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 outline-none'
          />

          <Link
            to='/products'
            onClick={() => setMenuOpen(false)}
            className='hover:text-blue-400'
          >
            Products
          </Link>

          <Link
            to='/cart'
            onClick={() => setMenuOpen(false)}
            className='flex items-center gap-2 hover:text-blue-400'
          >
            <i className='ri-shopping-cart-2-line'></i>
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
