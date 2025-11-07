import React from 'react'

// Local gallery images: copy your files into `public/images/` with these names
const IMGS = [
  '/images/tajmahal.jpg',
  '/images/varanasi.jpg',
  '/images/hampi.jpg',
  '/images/khajaraho.jpg'
]

export default function Gallery(){
  return (
    <section id="gallery" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Cultural Gallery</h2>
          <p className="text-gray-700 mt-2">Photographs and visual stories from across Bharat.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMGS.map((src, i) => (
            <img
              key={i}
              className="rounded-lg object-cover h-40 w-full fade-up"
              src={src}
              alt={`gallery ${i+1}`}
              loading="lazy"
              onError={(e)=>{
                e.currentTarget.onerror = null
                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><rect width="100%" height="100%" fill="%23f8fafc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23737474" font-family="Arial,Helvetica,sans-serif" font-size="16">Image unavailable</text></svg>'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
