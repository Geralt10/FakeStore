import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#09090b] text-white">
      {/* Background Blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-zinc-700/10 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-zinc-600/10 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[85vh] sm:px-8">
        <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
          Modern Shopping Experience
        </span>

        <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
          Shop Premium
          <br />
          <span className="text-zinc-400">
            Products Effortlessly
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          Explore curated products with fast search,
          category filtering, smart sorting and a clean
          shopping experience designed for every device.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <button
            onClick={() => navigate("/products")}
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Explore Products
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold transition hover:bg-zinc-800"
          >
            View Cart
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-1">
          <i className="ri-truck-line text-3xl text-white"></i>

          <h2 className="mt-5 text-2xl font-bold">
            Fast Delivery
          </h2>

          <p className="mt-3 leading-7 text-zinc-400">
            Quick dispatch and reliable shipping with a
            seamless ordering experience.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-1">
          <i className="ri-shield-check-line text-3xl text-white"></i>

          <h2 className="mt-5 text-2xl font-bold">
            Trusted Quality
          </h2>

          <p className="mt-3 leading-7 text-zinc-400">
            Every product is selected to provide quality,
            durability and value.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
          <i className="ri-secure-payment-line text-3xl text-white"></i>

          <h2 className="mt-5 text-2xl font-bold">
            Secure Checkout
          </h2>

          <p className="mt-3 leading-7 text-zinc-400">
            Shop confidently with a smooth and intuitive
            checkout flow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;