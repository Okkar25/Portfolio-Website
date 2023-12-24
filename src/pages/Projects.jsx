import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Portfolio Projects</h1>
      <div className="projectList">
        {ProjectList.map(({ name, image, id }, index) => (
          <ProjectItem key={id} id={index} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
