import { NavLink } from "react-router-dom";
import "./Project.css";

import { forwardRef } from 'react';
import { motion } from "framer-motion";



const Project = forwardRef(({ img, title, index }, ref) => {
  return (
    <NavLink to={`/project/${index}`} ref={ref}>
      <li className="project">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
});

const MProject = motion(Project);
export { MProject, Project };
