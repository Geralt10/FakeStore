
import React from "react";
import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
            <i className="ri-shopping-cart-line text-6xl text-zinc-500"></i>
          </div>

          <h1 className="mt-8 text-4xl font-black text-white">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-zinc-500">
            Add products to your cart and they’ll appear here.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Shopping
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              Your Cart
            </h1>

            <p className="mt-3 text-zinc-500">
              {totalItems} item(s) selected
            </p>
          </div>

          <button
            onClick={clearCart}
            className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            <i className="ri-delete-bin-6-line mr-2"></i>
            Clear Cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.8fr_0.8fr]">
          {/* Left */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col gap-6 rounded-[28px] border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl lg:flex-row"
              >
                {/* Image */}
                <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-zinc-100 p-6 lg:h-40 lg:w-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {item.category}
                    </p>

                    <h2 className="mt-2 text-xl font-semibold leading-7 text-white line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-4xl font-black tracking-tight">
                      ${item.price}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    {/* Quantity */}
                    <div className="flex items-center overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-4 py-2 transition hover:bg-zinc-800"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>

                      <span className="min-w-12 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-4 py-2 transition hover:bg-zinc-800"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                    >
                      <i className="ri-delete-bin-line mr-1"></i>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="sticky top-24 h-fit rounded-[28px] border border-zinc-800 bg-zinc-950 p-7">
            <h2 className="text-3xl font-black">Order Summary</h2>

            <div className="mt-8 space-y-5">
              <div className="flex justify-between text-zinc-400">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-zinc-400">
                <span>Products</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="border-t border-zinc-800 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-zinc-300">
                    Grand Total
                  </span>

                  <span className="text-3xl font-black">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full rounded-2xl bg-white py-4 font-bold text-black transition hover:opacity-90">
              <i className="ri-bank-card-line mr-2"></i>
              Checkout
            </button>

            <Link
              to="/products"
              className="mt-4 block w-full rounded-2xl border border-zinc-700 py-4 text-center transition hover:bg-zinc-900"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;

