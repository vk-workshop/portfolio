import Project from './../components/project/Project';
import {projectsList} from '../components/helpers/projectsList'




const Projects = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
               
              {projectsList.map((pr, index) => {
                  return (
                      <Project 
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
            </ul>
        </div>
    </main>

     );
}
 
export default Projects;