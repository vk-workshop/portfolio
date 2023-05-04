import { useLocalStorage } from "../../utils/useLocalStorage";
import { useState, useEffect, useRef } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./btnDarkMode.css"


const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState('light');
    const btnRef = useRef(null)

    useEffect(() => {
     if (darkMode === 'light') {
        document.body.classList.add('dark');
        btnRef.current.classList.add('dark-mode-btn--active')
     } else {
        document.body.classList.remove('dark');
        btnRef.current.classList.remove('dark-mode-btn--active')
     }
    }, [darkMode])

    const toggleDarkMode = () => {setDarkMode((currentValue) => {
        return currentValue === 'light'? 'dark' : 'light'
    })}
    return ( 
        <button ref={btnRef} onClick={toggleDarkMode} className="dark-mode-btn">
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>

     );
}
 
export default BtnDarkMode;