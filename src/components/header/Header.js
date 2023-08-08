import "./Header.css";

const Header = () => {
    const cvURL = process.env.PUBLIC_URL + '/Volodymyr_Kolisnichenko_CV.pdf';
    return ( 
        <>
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Volodymyr</em></strong><br/>
                a frontend <span className="slide_left">developer</span>
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href={cvURL} download="" className="btn">Download CV</a>
        </div>
    </header>
    </>
     );
}
 
export default Header;