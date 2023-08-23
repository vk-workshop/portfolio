import "./Header.css";

import { motion } from "framer-motion";


const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2}
  })
}

const Header = () => {
  const cvURL = process.env.PUBLIC_URL + "/Volodymyr_Kolisnichenko_CV.pdf";
  return (
    <>
      <motion.header 
      initial="hidden"
      whileInView="visible"
      className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <motion.p custom={1} variants={textAnimation} >
              <strong>
                Hi, my name is 
              </strong>
            </motion.p>
            <motion.p custom={2} variants={textAnimation}><strong><em>Volodymyr</em></strong></motion.p> 
            <motion.p custom={6} variants={textAnimation}> a <span>frontend developer</span></motion.p>
          </h1>
          <div className="header__text">
            <motion.p custom={4} variants={textAnimation}>
              with passion for <span> learning and creating </span>.
            </motion.p>
          </div>
          <a href={cvURL} download="" className="btn">
            Download CV
          </a>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
