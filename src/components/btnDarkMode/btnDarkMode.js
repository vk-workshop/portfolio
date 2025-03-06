import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { detectDarkMode } from "../../utils/detectDarkMode";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./btnDarkMode.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "light") {
      document.body.classList.add("dark");
    //   btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
    //   btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  // if system settings changed, change the theme
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  },);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnActive = "dark-mode-btn dark-mode-btn--active";
  const btnNormal = "dark-mode-btn";

  return (
    <button onClick={toggleDarkMode} className={darkMode === "light"? btnActive: btnNormal}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
