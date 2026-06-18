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
      <main
        className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#09090b] text-white"
        aria-live="polite"
      >
        <i
          className="ri-loader-4-line animate-spin text-4xl text-zinc-500"
          aria-hidden="true"
        ></i>
        <h1 className="text-xl font-semibold text-zinc-300">
          Loading Product...
        </h1>
      </main>
    );
  }

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#09090b] px-6 text-center text-white">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-zinc-800">
          <i
            className="ri-error-warning-line text-4xl text-zinc-500"
            aria-hidden="true"
          ></i>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          Product Not Found
        </h1>

        <p className="mt-2 max-w-sm text-zinc-400">
          The product you're looking for doesn't exist.
        </p>

        <Link
          to="/products"
          className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black transition active:scale-[0.98] hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <i className="ri-arrow-left-line" aria-hidden="true"></i>
          Back to Products
        </Link>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#f5f5f5] p-6 lg:p-8">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-64 w-full object-contain transition duration-300 motion-safe:hover:scale-105 sm:h-80 lg:h-[380px]"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="w-fit rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
              {product.category}
            </span>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-3xl font-bold sm:text-4xl">
                ${product.price}
              </h2>

              {product.rating && (
                <div className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300">
                  <i
                    className="ri-star-fill text-amber-400"
                    aria-hidden="true"
                  ></i>
                  <span className="font-semibold">{product.rating.rate}</span>
                  <span className="text-zinc-500">
                    ({product.rating.count})
                  </span>
                </div>
              )}
            </div>

            <p className="mt-6 leading-7 text-zinc-400">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => addToCart(product)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition active:scale-[0.98] hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
              >
                <i className="ri-shopping-cart-line" aria-hidden="true"></i>
                Add to Cart
              </button>

              <Link
                to="/products"
                className="flex-1 rounded-xl border border-zinc-700 px-6 py-3 text-center transition active:scale-[0.98] hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;