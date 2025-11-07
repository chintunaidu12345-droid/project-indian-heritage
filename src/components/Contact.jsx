import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="text-gray-600 mt-2">For collaborations, tours, or contributor stories — reach out.</p>
      </div>

      <form className="bg-white p-6 rounded-xl shadow-md grid gap-4 sm:grid-cols-2" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — message sent (demo).')}}>
        <input type="text" placeholder="Your name" className="border p-3 rounded" />
        <input type="email" placeholder="Email" className="border p-3 rounded" />
        <input type="text" placeholder="Subject" className="border p-3 rounded sm:col-span-2" />
        <textarea placeholder="Message" className="border p-3 rounded sm:col-span-2" rows="5"></textarea>
        <button type="submit" className="bg-amber-600 text-white py-2 rounded sm:col-span-2 hover:bg-amber-700">Send Message</button>
      </form>
    </section>
  )
}
