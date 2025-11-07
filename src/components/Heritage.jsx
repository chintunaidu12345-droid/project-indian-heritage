import React from 'react'

const CARDS = [
  {
    title: 'Taj Mahal — Agra',
    local: '/images/tajmahal.jpg',
    external: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
    desc: 'An iconic white-marble mausoleum — UNESCO World Heritage and symbol of love.'
  },
  {
    title: 'Hampi — Karnataka',
    local: '/images/hampi.jpg',
    external: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Hampi_Vittala_Temple.jpg',
    desc: 'Ruins of the Vijayanagara Empire set among surreal boulders and temples.'
  },
  {
    title: 'Varanasi Ghats',
    local: '/images/varanasi.jpg',
    external: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Varanasi_Ghats.jpg',
    desc: 'Sacred ghats, rituals and boats on the Ganges — spiritual heart of India.'
  },
  {
    title: 'Khajuraho — Madhya Pradesh',
    local: '/images/khajaraho.jpg',
    external: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Khajuraho_Kandariya_Mahadev_Temple.jpg',
    desc: 'Famous for its sculptural temples celebrating life, art and mythology.'
  },
  {
    title: 'Temple Architecture',
    local: '/images/templestructure.jpg',
    external: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Brihadisvara_Temple_Tanjore_India.jpg',
    desc: 'From Dravidian towers to Nagara shikharas — centuries of temple craft.'
  },
  {
    title: 'Festivals & Culture',
    local: '/images/festivals.jpg',
    external: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Holi_festival_in_Udaipur.jpg',
    desc: 'Colorful festivals bring communities and traditions to life.'
  }
]

export default function Heritage() {
  return (
    <section id="heritage" className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">India’s Timeless Heritage</h2>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">A curated collection of monuments, stories and cultural insights — from the Himalayas to Kanyakumari.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c, idx) => (
          <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow transition-transform hover:scale-[1.02] fade-up">
            <img
              src={c.local}
              alt={c.title}
              className="w-full h-52 object-cover"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                const state = img.dataset.fallbackState || 'local'
                if (state === 'local') {
                  img.dataset.fallbackState = 'external'
                  img.src = c.external
                } else {
                  img.onerror = null
                  img.src = 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22675%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f8fafc%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23737474%22 font-family=%22Arial,Helvetica,sans-serif%22 font-size=%2228%22>Image unavailable</text></svg>'
                }
              }}
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-amber-700">{c.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <a href="#" className="text-amber-600 text-sm font-medium">Read more →</a>
                <span className="text-xs text-gray-400">Heritage</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
