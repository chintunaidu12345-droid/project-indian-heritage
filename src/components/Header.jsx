import React, { useState } from 'react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
]

export default function Header({ activeId }){
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(v => !v)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#home" onClick={(e)=>handleNavClick(e,'home')} className="flex items-center gap-3">
          <div className="h-10 w-10 bg-amber-600 text-white flex items-center justify-center rounded-full font-bold">BH</div>
          <div>
            <div className="text-lg font-bold tracking-wide">Bharat Heritage</div>
            <div className="text-xs text-gray-500 -mt-0.5">Discover India's culture & places</div>
          </div>
        </a>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {NAV.map(n => (
            <a key={n.id}
               href={`#${n.id}`}
               onClick={(e)=>handleNavClick(e,n.id)}
               className={`nav-link hover:text-amber-700 ${activeId === n.id ? 'nav-link-active' : ''}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button id="mobileBtn" aria-label="Open menu" onClick={toggle} className="p-2 rounded-md border">
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div id="mobilePanel" className={`md:hidden ${open ? '' : 'hidden'} border-t bg-white/95`}>
        <div className="p-4 flex flex-col gap-3">
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} onClick={(e)=>handleNavClick(e,n.id)} className="mobile-link py-2 px-2 rounded hover:bg-amber-50">{n.label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}
