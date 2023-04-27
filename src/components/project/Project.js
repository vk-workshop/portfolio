import "./Project.css"

const Project = ({gitHubLink, img, title}) => {
    return ( 
        <li className="project">
        <a href={gitHubLink}>
            <img src={img} alt="Project img" className="project__img" />
            <h3 className="project__title">{title}</h3>
        </a>
    </li>
     );
}
 
export default Project;