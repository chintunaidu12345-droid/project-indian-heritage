import React from 'react'

export default function Footer({ year }){
  return (
    <footer className="bg-amber-100 text-center py-6 text-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <div>© {year} Bharat Heritage — Celebrating India’s culture.</div>
      </div>
    </footer>
  )
}
