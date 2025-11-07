import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="relative h-[78vh] md:h-[84vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c6?auto=format&fit=crop&w=1600&q=60')" }}>
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="max-w-6xl mx-auto relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Explore the living tapestry of India</h1>
          <p className="mt-4 text-lg text-amber-100">From ancient temples and sacred ghats to vibrant festivals — step into stories that shaped a civilization.</p>
          <div className="mt-8 flex gap-3">
            <a href="#heritage" className="bg-white text-amber-700 px-6 py-3 rounded-md font-semibold shadow">View places</a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-md text-white">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
