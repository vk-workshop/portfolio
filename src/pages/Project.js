import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "../img/projects/dino-game-Big.jpg";




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
                <BtnGitHub link="https://github.com/anotherShine" />
            </div>
        </div>
    </main>

     );
}
 
export default Project;