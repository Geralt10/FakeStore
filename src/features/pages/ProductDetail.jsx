
import React from "react";
import { Link, useParams } from "react-router";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const { addToCart } = useCart();

  if (!products || products.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </main>
    );
  }

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4 text-white">
        <i className="ri-error-warning-line text-6xl text-red-500"></i>

        <h1 className="text-center text-3xl font-bold">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="rounded-xl bg-violet-600 px-6 py-3 transition hover:bg-violet-700"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image Section */}
        <div className="rounded-3xl border border-zinc-800 bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 object-contain transition duration-300 hover:scale-105 sm:h-80 lg:h-[500px]"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full bg-violet-500/20 px-4 py-1 text-sm capitalize text-violet-300">
            {product.category}
          </span>

          <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-5xl">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-2">
            <i className="ri-star-fill text-yellow-400"></i>

            <span className="font-semibold">
              {product.rating?.rate}
            </span>

            <span className="text-zinc-400">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold text-green-400 lg:text-5xl">
            ${product.price}
          </h2>

          <p className="mt-6 leading-8 text-zinc-300">
            {product.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-[1.02]"
            >
              <i className="ri-shopping-cart-2-line mr-2"></i>
              Add to Cart
            </button>

            <Link
              to="/products"
              className="flex-1 rounded-xl border border-zinc-700 px-8 py-4 text-center text-lg transition hover:bg-zinc-800"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-center">
              <i className="ri-truck-line text-2xl text-cyan-400"></i>
              <p className="mt-2 text-sm">Fast Delivery</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-center">
              <i className="ri-shield-check-line text-2xl text-green-400"></i>
              <p className="mt-2 text-sm">Secure Payment</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-center">
              <i className="ri-refresh-line text-2xl text-orange-400"></i>
              <p className="mt-2 text-sm">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
