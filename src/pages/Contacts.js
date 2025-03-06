import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7 }}
          className="content-list"
        >
          <motion.li
            custom={1}
            variants={textAnimation}
            className="content-list__item"
          >
            <h2 className="title-2">Location</h2>
            <p className="slide__left">Poznan, Poland</p>
          </motion.li>
          <motion.li
            custom={3}
            variants={textAnimation}
            className="content-list__item"
          >
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p className="slide__right">
              <a href="tel:+48532621740">+48532621740</a>
            </p>
          </motion.li>
          <motion.li
            custom={5}
            variants={textAnimation}
            className="content-list__item"
          >
            <h2 className="title-2">Email</h2>
            <p className="slide__left">
              <a href="mailto:kolisnichenko.dev@gmail.com">kolisnichenko.dev@gmail.com</a>
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </main>
  );
};

export default Contacts;
