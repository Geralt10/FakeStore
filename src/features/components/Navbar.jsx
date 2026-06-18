
/** @format */

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useSearch } from "../hooks/useSearch";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { searchQuery, setSearchQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-black tracking-tight text-white"
          >
            Fake<span className="text-zinc-500">Store</span>
          </button>

          {/* Desktop Search */}
          <div className="hidden flex-1 px-10 lg:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search products..."
              className="h-11 w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-white"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/products"
              className={`rounded-xl px-4 py-2 transition ${
                location.pathname === "/products"
                  ? "bg-white text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              Products
            </Link>

            <Link
              to="/cart"
              className={`rounded-xl px-4 py-2 transition ${
                location.pathname === "/cart"
                  ? "bg-white text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
          >
            <i className="ri-menu-3-line text-3xl text-white"></i>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-[#111111] border-l border-zinc-800 p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Menu
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line text-3xl text-white"></i>
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products..."
          className="mb-8 h-12 w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 text-white placeholder:text-zinc-500 outline-none focus:border-white"
        />

        {/* Links */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-zinc-900 px-4 py-4 text-white transition hover:bg-zinc-800"
          >
            <i className="ri-home-5-line mr-3"></i>
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-zinc-900 px-4 py-4 text-white transition hover:bg-zinc-800"
          >
            <i className="ri-store-2-line mr-3"></i>
            Products
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-zinc-900 px-4 py-4 text-white transition hover:bg-zinc-800"
          >
            <i className="ri-shopping-cart-2-line mr-3"></i>
            Cart
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

