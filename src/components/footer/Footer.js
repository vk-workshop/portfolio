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
                <li className="social__item"><a href="https://instagram.com/h2curious?igshid=OGQ5ZDc2ODk2ZA=="><img src={instagram} alt="Link" /></a></li>
                <li className="social__item"><a href="https://www.facebook.com/profile.php?id=100011644665786"><img src={facebook} alt="Link" /></a></li>
                <li className="social__item"><a href="https://github.com/VolodymyrKolisnichenko"><img src={gitHub} alt="Link" /></a></li>
                <li className="social__item"><a href="https://www.linkedin.com/in/volodymyr-kolisnichenko"><img src={linkedIn} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
                <p>© 2023 volodymyr.com</p>
            </div>
        </div>
    </div>
</footer>

  );
};

export default Section;
