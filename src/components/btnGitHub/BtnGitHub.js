import "./BnGitHub.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = () => {
    return ( 
        <a href="#!" className="btn-outline">
        <img src={gitHubIcon} alt="gitHub" />
        GitHub repo
    </a>

     );
}
 
export default BtnGitHub;