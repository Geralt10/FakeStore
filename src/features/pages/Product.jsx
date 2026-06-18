
import React from "react";
import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const Product = ({ currentItems }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {currentItems.map((product) => (
        <article
          key={product.id}
          className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
        >
          <Link to={`/products/${product.id}`}>
            {/* Image */}
            <div className="relative flex h-52 items-center justify-center bg-[#f4f4f5] p-6 sm:h-60">
              <img
                src={product.image}
                alt={product.title}
                className="h-36 object-contain transition duration-300 hover:scale-105 sm:h-44"
              />

              <span className="absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
                {product.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300">
                  <i className="ri-star-smile-line"></i>
                  {product.rating?.rate}
                </div>

                <span className="text-xs text-zinc-500">
                  {product.rating?.count} reviews
                </span>
              </div>

              <h2 className="min-h-[52px] text-base font-semibold leading-6 text-white line-clamp-2 sm:text-lg">
                {product.title}
              </h2>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-white">
                  ${product.price}
                </span>
              </div>
            </div>
          </Link>

          {/* Footer */}
          <div className="border-t border-zinc-800 p-4 cursor-pointer">
            <button
              onClick={() => addToCart(product)}
              className="w-full rounded-xl bg-zinc-100 py-3 font-semibold text-black transition hover:bg-white active:scale-[0.98] "
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Product;

