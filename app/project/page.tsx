'use client';


// import ProjectCard from "@/component/projectcard";



// export function ProjectPage() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// }
// const Project = ()=>{


  
//     return(


//       <>
//      <div className='overflow-x-hidden'>
//      <Navbar></Navbar></div>
    
//             {/* Practice Bento */}

//   <div id="bento-grid" className="flex flex-col gap-6 px-6 py-12 max-w-7xl mt-5 mx-auto lg:px-8 lg:mt-32">
//           <h2 className="text-4xl sm:font-semibold mb-14 dark:text-white">ToDesktop handle the details</h2>
//           <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3" style={{ gridAutoRows:"96px" }}>

//               <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
//                 <div className="bg-white dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
//                   <h2 className="text-2xl">Native Notification</h2>
//                   <img src="./images/backgrounds.png" alt="" />
//                 </div>
//               </div>
//               <div className="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
//                 <div className="bg-white dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
//                   <h2 className="text-2xl">Native Notification</h2>
//                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officia deleniti facere, eligendi impedit laboriosam architecto autem quia maiores minus nulla voluptatem ducimu..</p>
//                   <img src="./images/backgrounds.png" alt="" />
//                 </div>
//               </div>
//               <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
//                 <div className="bg-white dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
//                   <h2 className="text-2xl">Native Notification</h2>
//                   <img src="./images/backgrounds.png" alt="" />
//                 </div>
//               </div>
//               <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
//                 <div className="bg-white dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
//                   <h2 className="text-2xl">Native Notification</h2>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio nostrum non, iusto cumque optio.</p>
//                   <img src="./images/backgrounds.png" alt="" />
//                 </div>
//               </div>
//               <div className="row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
//                 <div className="bg-white dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
//                   <h2 className="text-2xl ">Native Notification</h2>
//                   <img src="./images/backgrounds.png" alt="" />
//                 </div>
//               </div>
//               <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
//                 <div className="bg-white dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
//                   <h2 className="text-2xl">Native Notification</h2>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quisquam iste quos enim voluptates, tenetur eum! Possimus officiis quasi quae.</p>
//                   <img src="./images/backgrounds.png" alt="" />
//                 </div>
//               </div>
              

//           </div>
//      </div>

     
   
//       </>


//     )
  
// };
// export default Project;
// pages/project.tsx// pages/project.tsx
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
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description: "A personal portfolio built with Next.js and Tailwind.",
    demoLink: "https://example.com/portfolio",
    codeLink: "https://github.com/example/portfolio",
    category: "Next.js",
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
    <div className="min-h-screen bg-orange-50 p-6">
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
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
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
            <div className="flex gap-2 mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
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