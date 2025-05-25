// components/ProjectCard.tsx
import React, { useState } from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  demoLink: string;
  codeLink: string;
};

const ProjectCard: React.FC<Props> = ({ title, image, description, demoLink, codeLink }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition-all flex flex-col items-center gap-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>

      <div className="flex gap-3 mt-2">
        <a
          href={demoLink}
          target="_blank"
          className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600 text-sm"
        >
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-900 text-sm"
        >
          Source Code
        </a>
      </div>

      {/* Counter */}
      <div className="flex items-center gap-3 mt-3">
        <span className="font-medium">Likes: {count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
