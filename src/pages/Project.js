import img from "../img/projects/dino-game-Big.jpg";
import gitHubIcon from "../img/icons/gitHub-black.svg";


const Project = () => {
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Dino Game</h1>

                <img src={img} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: JS, CSS, HTML</p>
                </div>

                <a href="#!" className="btn-outline">
                    <img src={gitHubIcon} alt="gitHub" />
                    GitHub repo
                </a>

            </div>
        </div>
    </main>

     );
}
 
export default Project;