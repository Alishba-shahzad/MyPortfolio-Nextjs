"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/component/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Button from "@/component/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">
        <div className="max-w-xl space-y-6">
          <p className="text-gray-600">
            Hello! I&apos;m <span className="text-orange-600 font-semibold">Alishba</span>
          </p>
          <h1 className="text-4xl font-bold text-gray-900">
            I&apos;m a{" "}
            <span className="text-orange-600">
              <Typewriter
                words={[
                  "UI Designer",
                  "Frontend Developer",
                  "Computer Scientist",
                  "React Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={75}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-gray-700">
            I&apos;m learning and growing every day as a frontend developer. I enjoy
            turning ideas into websites and making sure everything looks and works
            well.
          </p>
          <div className="flex gap-4">
            <a href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                Hire me
              </button>
            </a>
            <Button />
          </div>
        </div>

        <div className="relative w-72 h-72 mb-15 lg:mb-0">
          <div className="absolute inset-0 rounded-full bg-amber-600 z-0 shadow-[0_0_60px_#fcdede]" />

          <Image
            src="/" // Update this with actual image path
            alt="Profile picture"
            fill
            className="rounded-full object-cover z-15"
          />

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white hover:bg-orange-100 shadow p-2 rounded-xl">
            <p className="text-sm text-shadow">Follow me:</p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-700 hover:text-black text-1xl cursor-pointer" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-700 hover:text-blue-700 cursor-pointer" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};



export default HeroSection;
