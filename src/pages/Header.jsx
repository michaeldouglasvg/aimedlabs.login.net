import React, { useEffect} from 'react'
import { HeaderStyledComponent, Logo, 
  Events,ThemeSettings
} from "../styles/Header.styled"
import { BiMoon, BiSun} from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = ({ toggleMode, mode }) => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
   <HeaderStyledComponent>
    <div className='Leftflex'>
      <Logo><p>Aimed Labs</p></Logo>
      <Events><p>Login</p></Events>
    </div>
  
    <div className='Rightflex'>
      <ThemeSettings>
      {mode === "dark" ? <BiSun size={30} onClick={toggleMode} color={mode === "dark" ? "white" : "black"}/>
      : <BiMoon size={30} onClick={toggleMode} color={mode === "dark" ? "white" : "black"}/>}
      </ThemeSettings>
    </div>
   </HeaderStyledComponent>
  )
}

export default Header
