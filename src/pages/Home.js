import Header from "../components/header/Header";

import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2}
  })
}

const Home = () => {
  return (
    <>
      <Header />
      <motion.main 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7 }}
      className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <motion.h2 custom={1} variants={textAnimation} className="title-2">Frontend</motion.h2>
              <motion.p custom={2} variants={textAnimation}>
                JavaScript, TypeScript, React.js, Node.js, Express, Nest.js, Redux, Valtio, HTML5, CSS3, SCSS,
                MaterialUI, TailwindCSS, Git, PostgreSQL, SQL, Jest, Cypress
              </motion.p>
            </li>
          </ul>
        </div>
      </motion.main>
    </>
  );
};

export default Home;
