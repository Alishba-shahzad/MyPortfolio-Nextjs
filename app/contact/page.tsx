'use client';

import { motion } from 'framer-motion';
import Navbar from '@/component/Navbar';
import { FormEvent, useState } from 'react';


export const ContactMe = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]= useState('')

  const onSubmit=(e: FormEvent)=>{
    e.preventDefault()
    console.log('Data', name, email, message)

  }

  return (
    <>
    <Navbar />
    <section className="bg-white py-6 px-5 sm:px-8 md:px-20 max-w-8xl mx-auto">
      {/* Heading */}
      <div

        className="text-3xl font-extrabold text-center text-gray-900 mb-5"
      >
        Contact <span className="text-orange-500">Me</span>
      </div>

      <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
        Have a question or want to work together? Fill out the form.
      </p>

      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className=" flex-nowrap space-y-6 items-center m-10 justify-center text-gray-800">
          <div>
            <a href="mailto:alishbah722@gmail.com"><h3 className="text-xl font-semibold text-orange-600 mb-1">Email</h3>
            <p className='hover:underline hover:text-blue-400'>📧 alishbah722@gmail.com</p></a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-1">Phone</h3>
            <p className='hover:underline '>📞 +92 315 1019660</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-1">Location</h3>
            <p className='hover:underline'>🏠 Karachi, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-orange-100 border shadow-md rounded-lg p-6 space-y-4" onSubmit={onSubmit} >
          <input
            value={name}
            onChange={ (e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full bg-orange-50 p-3 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full bg-orange-50 p-3 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
            placeholder="Message"
            rows={5}
            className="w-full bg-orange-50 p-3 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
          
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default ContactMe;
