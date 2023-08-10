import "./Header.css";

const Header = () => {
  const cvURL = process.env.PUBLIC_URL + "/Volodymyr_Kolisnichenko_CV.pdf";
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <p className="slide__right">
              <strong>
                Hi, my name is 
              </strong>
            </p>
            <strong><em>Volodymyr</em></strong>
            <br />a <span>frontend developer</span>
          </h1>
          <div className="header__text">
            <p className="slide__left">
              with passion for <span> learning and creating </span>.
            </p>
          </div>
          <a href={cvURL} download="" className="btn">
            Download CV
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
