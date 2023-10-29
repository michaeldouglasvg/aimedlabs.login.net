import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Globalstyles from "./styles/Globals/Globals.styled"
import Header from "./pages/Header"
import Login from "./pages/Loginpage";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light')

  // Function to handle colors
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  }


  // Adding css for every mode
  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);


  // Updating css colors >>  Dark Mode
  useEffect(() => {
    document.body.classList.add(mode);
    return () => {
      document.body.classList.remove(mode);
    };
  }, [mode]);


  // Themes, mobile responsives & flex consitions
  const theme = {
    colors: {
      header: "skyblue",
      body: mode === "dark" ? '#01272f' : 'whitesmoke',
      footer: "grey ",
      color: mode === "dark" ? 'white' : '#1a1a28',
      border: mode === "dark" ? "1px solid #333333" : "1px solid #c6c6c6",
      boxshadow: mode === "dark" ? "0 0 5px 1px rgba(255, 255, 255, .1)" : "0 0 5px 1px rgba(0, 0, 0, .1)",
      transparent: mode === "dark" ? "rgba(255, 255, 255, .8)" : "rgba(0, 0, 0, .8)"
    },

    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    },

    flex: {
      chosedirection: "column",
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Router>
        <Header toggleMode={toggleMode} mode={mode}/>
        <Routes>
            <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
