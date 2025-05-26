'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/component/Navbar";

interface Project {
  title: string;
  image: string;
  description: string;
  demoLink: string;
  codeLink: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Myntra",
    image: "/images/Myntra.PNG",
    description: "Simple landing page using JS.",
    demoLink: "https://alishba-shahzad.github.io/Clone-Myntra/",
    codeLink: "https://github.com/Alishba-shahzad/Clone-Myntra.git",
    category: "JavaScript",
  },
  {
    title: "Rexd",
    image: "/images/Rexd.PNG",
    description: "Manage daily tasks using this beautiful UI.",
    demoLink: "https://alishba-shahzad.github.io/Clone-rexd/",
    codeLink: "https://github.com/Alishba-shahzad/Clone-rexd.git",
    category: "React",
  },
  {
    title: "Olx",
    image: "/images/Olx.png",
    description: "A personal portfolio built with Next.js and Tailwind.",
    demoLink: "https://alishba-shahzad.github.io/project-olx-clone/",
    codeLink: "https://github.com/Alishba-shahzad/project-olx-clone.git",
    category: "HTML",
  },
  {
    title: "Quiz",
    image: "/images/Quiz.png",
    description: "A personal portfolio built with Next.js and Tailwind.",
    demoLink: "https://alishba-shahzad.github.io/Quiz-SMIT/",
    codeLink: "https://github.com/Alishba-shahzad/Quiz-SMIT.git",
    category: "HTML",
  },
];

const categories = ["All", "JavaScript", "React", "Next.js"];

const ProjectPage = () => {
  const [likes, setLikes] = useState<number[]>(Array(projects.length).fill(0));
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
    <div><Navbar></Navbar></div>
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition  ${
              selectedCategory === cat
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-orange-50 hover:bg-orange-100 border  rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="text-sm text-gray-700 mt-2">{project.description}</p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                className=" bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                className="bg-zinc-800 text-white px-3 py-1 rounded text-sm hover:bg-zinc-900"
              >
                Source Code
              </a>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm">Likes: {likes[index]}</span>
              <button
                onClick={() => handleLike(index)}
                className="bg-green-400 text-white px-3 py-1 rounded text-sm hover:bg-green-500"
              >
                +
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProjectPage;