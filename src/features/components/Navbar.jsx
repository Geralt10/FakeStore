
/** @format */

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useSearch } from "../hooks/useSearch";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { searchQuery, setSearchQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);

    if (location.pathname !== "/products") {
      navigate("/products");
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-left transition hover:opacity-80"
        >
          <h1 className="text-2xl font-black tracking-tight text-white">
            Fake<span className="text-zinc-500">Store</span>
          </h1>
        </button>

        {/* Desktop Search */}
        <div className="hidden flex-1 px-10 lg:flex">
          <div className="relative mx-auto w-full max-w-xl">

            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"></i>

            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="h-12 w-full rounded-2xl border border-zinc-700 bg-zinc-800 pl-12 pr-4 text-white placeholder:text-zinc-400 outline-none transition-all duration-200 focus:border-white"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/products"
            className={`rounded-xl px-5 py-2.5 transition ${
              location.pathname === "/products"
                ? "bg-white text-black"
                : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            Products
          </Link>

          <Link
            to="/cart"
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 transition ${
              location.pathname === "/cart"
                ? "bg-white text-black"
                : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <i className="ri-shopping-bag-3-line text-lg"></i>
            Cart
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl p-2 text-white transition hover:bg-zinc-800 lg:hidden"
        >
          <i
            className={`text-2xl ${
              menuOpen ? "ri-close-line" : "ri-menu-line"
            }`}
          ></i>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-[#09090b] px-5 py-5 lg:hidden">

          <div className="relative mb-5">

            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"></i>

            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="h-12 w-full rounded-2xl border border-zinc-700 bg-zinc-800 pl-12 pr-4 text-white placeholder:text-zinc-400 outline-none"
            />
          </div>

          <div className="space-y-3">

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white transition hover:bg-zinc-800"
            >
              Products
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white transition hover:bg-zinc-800"
            >
              <i className="ri-shopping-bag-3-line"></i>
              Cart
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

