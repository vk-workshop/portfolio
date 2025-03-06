import "./Footer.css"

import instagram from "../../img/icons/instagram.svg";
import facebook from "../../img/icons/facebook.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

const Section = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://www.instagram.com/quantum_optimist/profilecard/?igsh=MXU4bHVud253NjlobQ=="><img src={instagram} alt="Link" target="_blank"  /></a></li>
                <li className="social__item"><a href="https://www.facebook.com/profile.php?id=100011644665786"><img src={facebook} alt="Link" target="_blank" /></a></li>
                <li className="social__item"><a href="https://github.com/vk-workshop"><img src={gitHub} alt="Link" target="_blank" /></a></li>
                <li className="social__item"><a href="https://www.linkedin.com/in/volodymyr-kolisnichenko"><img src={linkedIn} alt="Link" target="_blank" /></a></li>
            </ul>
            <div className="copyright">
                <p className="animate bounce">© 2025 vk-workshop</p>
            </div>
        </div>
    </div>
</footer>

  );
};

export default Section;
