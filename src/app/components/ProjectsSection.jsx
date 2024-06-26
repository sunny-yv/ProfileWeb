"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Donna Cat Coffee",
    description:
      "This is a project within the framework of the Software development project subject (SWP391). This is a website system for Donna Cat Coffee's chain of stores with 5 main roles: Guest, Customer, Staff, Manager and Admin. The project is implemented in C# language and uses the Reactjs framework, implemented in 1 period.",
    image: "/images/projects/1.png",
    tag: ["All", "FE"],
    gitUrl: "https://github.com/sunny-yv/FE_SWP.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Nextflix Clone",
    description: "Mini project of ReactJS course in 1 month",
    image: "/images/projects/2.jpg",
    tag: ["All", "FE"],
    gitUrl: "https://github.com/sunny-yv/FE_SWP.git",
    previewUrl: "/",
  },

  {
    id: 3,
    title: "Sell Phone Website",
    description: "Project about Java web using JSP",
    image: "/images/projects/3.jpg",
    tag: ["All", "BE"],
    gitUrl: "https://github.com/sunny-yv/FE_SWP.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FE"
          isSelected={tag === "FE"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BE"
          isSelected={tag === "BE"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
