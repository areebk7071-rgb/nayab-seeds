export default function HeroSection() {
  return (
    <section className="w-full text-center bg-gradient-to-tr from-green-50 via-green-100 to-emerald-100 py-16 rounded-3xl shadow-lg relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-black mb-6 text-green-900">
        Grow Something <span className="text-emerald-500 underline decoration-emerald-400">Rare</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-2xl text-green-800 mb-10 font-medium">
        Sustainable native, medicinal, and edible plants tested for Karachi's climate.
      </p>
      <div className="flex justify-center gap-4 mb-12">
        <a
          href="#products"
          className="px-8 py-3 rounded-full bg-emerald-400 text-white font-semibold shadow hover:bg-emerald-500 transition"
        >
          Shop Seeds
        </a>
        <a
          href="#native"
          className="px-8 py-3 rounded-full border border-emerald-400 text-emerald-600 font-semibold hover:bg-emerald-50 transition"
        >
          Explore Native Plants
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-12">
        <div className="bg-white/80 border border-green-100 rounded-xl px-6 py-4 text-green-900 shadow">
          <span className="block text-2xl font-bold">50+</span>
          <span className="block text-xs mt-1">Native Species</span>
        </div>
        <div className="bg-white/80 border border-green-100 rounded-xl px-6 py-4 text-green-900 shadow">
          <span className="block text-2xl font-bold">5K+</span>
          <span className="block text-xs mt-1">Happy Growers</span>
        </div>
        <div className="bg-white/80 border border-green-100 rounded-xl px-6 py-4 text-green-900 shadow">
          <span className="block text-2xl font-bold">98%</span>
          <span className="block text-xs mt-1">Germination Rate</span>
        </div>
        <div className="bg-white/80 border border-green-100 rounded-xl px-6 py-4 text-green-900 shadow">
          <span className="block text-2xl font-bold">All Karachi Tested</span>
        </div>
      </div>
    </section>
  );
}