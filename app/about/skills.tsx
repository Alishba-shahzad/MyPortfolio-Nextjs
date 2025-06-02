// components/Skills.tsx
import React from "react";

type Skill = {
  name: string;
  level: number; // 0–100
};

const skills: Skill[] = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "Python", level: 70 },
  { name: "JavaScript", level: 40 },
  { name: "Reactjs", level: 50 },
  { name: "Nextjs", level: 50 },
];


const Skills: React.FC = () => {
  return (
    <section className="w-full text-black md:px-15">
      <h2 className="text-2xl font-bold mb-8 text-center">My Skills</h2>

      <div className="flex flex-col md:flex-row gap-10">
       
        {/* Skills Card */}
        <div className="bg-orange-50 border border-black rounded-xl p-4 flex-1">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-2">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-orange-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full transition-all duration-500 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
