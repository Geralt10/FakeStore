
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm tracking-widest text-zinc-400">
          MODERN E-COMMERCE EXPERIENCE
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          Shop Smarter.
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Live Better.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Discover premium products with blazing-fast search,
          intelligent filtering, and a clean shopping experience
          built for speed and simplicity.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/products")}
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Explore Products
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="rounded-2xl border border-zinc-700 px-8 py-4 transition hover:bg-zinc-900"
          >
            View Cart
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-700">
          <i className="ri-truck-line text-4xl text-white"></i>

          <h2 className="mt-6 text-2xl font-bold">
            Fast Delivery
          </h2>

          <p className="mt-3 leading-7 text-zinc-500">
            Reliable shipping with quick dispatch and secure
            order tracking.
          </p>
        </div>

        <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-700">
          <i className="ri-shield-check-line text-4xl text-white"></i>

          <h2 className="mt-6 text-2xl font-bold">
            Trusted Quality
          </h2>

          <p className="mt-3 leading-7 text-zinc-500">
            Carefully selected products designed for durability,
            style, and value.
          </p>
        </div>

        <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-700">
          <i className="ri-secure-payment-line text-4xl text-white"></i>

          <h2 className="mt-6 text-2xl font-bold">
            Secure Checkout
          </h2>

          <p className="mt-3 leading-7 text-zinc-500">
            Smooth purchasing experience with a clean and
            user-friendly interface.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;

