
import React from "react";
import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const Product = ({ currentItems }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {currentItems.map((product) => (
        <article
          key={product.id}
          className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          {/* Image */}
          <Link to={`/products/${product.id}`}>
            <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-200 p-8">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                {product.category}
              </div>
            </div>
          </Link>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
                <i className="ri-star-fill"></i>
                <span>{product.rating?.rate}</span>
              </div>

              <span className="text-xs text-zinc-500">
                {product.rating?.count} reviews
              </span>
            </div>

            <Link to={`/products/${product.id}`}>
              <h2 className="min-h-[56px] text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-zinc-200 line-clamp-2">
                {product.title}
              </h2>
            </Link>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Price
                </p>

                <h3 className="mt-1 text-3xl font-black tracking-tight text-white">
                  ${product.price}
                </h3>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
            >
              <i className="ri-shopping-bag-4-line text-lg"></i>
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Product;

