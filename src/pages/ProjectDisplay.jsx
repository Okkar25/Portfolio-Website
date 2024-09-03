import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  const { pathname } = useLocation();
  //   const project = ProjectList.map((list) => list.id === id);

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [id, pathname]);

  return (
    <div className="project">
      <h1>{project?.name}</h1>
      <img src={project?.image} alt="" />
      <p>
        <b>Skills :</b> {project.skills}
      </p>

      <div className="demo-icons">
        <a href={project?.github} target="blank">
          <GitHubIcon />
        </a>
        <a href={project?.demo} target="blank">
          <button className="demoBtn">Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
