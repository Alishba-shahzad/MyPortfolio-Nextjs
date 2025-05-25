// app/about/page.tsx

'use client';

import { motion } from 'framer-motion';
import Navbar from "@/component/Navbar";
import Skills from './skills';



const AboutMe = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar></Navbar>
    <section className="bg-white py-10 px-4 sm:px-8 md:px-20 max-w-6xl mx-auto">
      {/* Subtitle */}
      <motion.h4
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-gray-700 uppercase text-sm text-center mb-2.5"
      >
        A Bit About Me
      </motion.h4>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-4xl sm:text-5xl font-extrabold text-orange-600 text-center mb-10"
      >
        Who Am I?
      </motion.h2>

      {/* Grid layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
      
        {/* Image */}
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
         className="w-full md:w-1/2 text-center md:text-left"
        >
          
          <div >
          <Skills></Skills>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-2xl font-bold mb-4">
            Hello, I Am <span className="text-orange-500">Alishba Shehzad</span>
          </h3>
          <p className="text-gray-700 mb-6">
            I’m a frontend developer passionate about creating engaging user experiences with clean
            design and fast code.
          </p>
          <ul className="text-gray-800 space-y-2 mb-6 text-sm sm:text-base">
            <li><strong>Name:</strong> Alishba Shehzad</li>
            <li><strong>Age:</strong> 20</li>
            <li><strong>Location:</strong> Karachi, Pakistan</li>
            <li><strong>Phone:</strong> +92 315 1019660</li>
            <li><strong>Email:</strong> <a href="mailto:alishbah722@gmail.com" className="hover:underline hover:text-blue-400">alishbah722@gmail.com</a></li>            {/* <li><strong>Email:</strong> alishba@example.com</li> */}
          </ul>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow-md transition"
          >
            Hire Me 
          </a>
        </motion.div>
      </div>
      
    </section>
    
    </div>
    </>
  );
};

export default AboutMe;
