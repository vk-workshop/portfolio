import {MProject} from './../components/project/Project';
import {projectsList} from '../components/helpers/projectsList'

import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2}
  })
}

const featuredProjects = {
    hidden: {
        y: 100,
        opacity: 0
      },
      visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3}
        
      })
}


const Projects = () => {
    return ( 
        <motion.main 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <motion.ul custom={2} variants={textAnimation} className="projects">
               
              {projectsList.map((pr, index) => {
                  return (
                      <MProject 
                      custom={index + 2}
                      variants={featuredProjects}
                      img={pr.img} 
                      title={pr.title} 
                      imgBig={pr.imgBig}
                      gitHubLink={pr.gitHubLink}
                      skills={pr.skills}
                      link={pr.link}
                      key={pr.id}
                      index={index} />
                  )
              })}
            </motion.ul>
        </div>
    </motion.main>

     );
}
 
export default Projects;