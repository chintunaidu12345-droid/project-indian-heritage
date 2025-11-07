import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Heritage from './components/Heritage'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [activeId, setActiveId] = useState('home')
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(()=>{
    // IntersectionObserver for fade-up animations
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el))

    const sections = Array.from(document.querySelectorAll('main section[id]'))
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = sections[0]?.id || 'home'
      for (const sec of sections) {
        if (sec.offsetTop <= y) current = sec.id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()

    return ()=>{
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div>
      <Header activeId={activeId} />
      <main>
        <Hero />
        <Heritage />
        <Gallery />
        <Contact />
      </main>
      <Footer year={year} />
    </div>
  )
}
