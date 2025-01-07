import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./views/nav";
import Sector1 from "./views/sector1";
import Sector2 from "./views/sector2";
import Sector3 from "./views/sector3";


function App() {
  const [navbarBgColor, setNavbarBgColor] = useState("none");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 700) {
      setNavbarBgColor("black"); // 원하는 색상
    } else {
      setNavbarBgColor(""); // 기본 색상
    }
  };

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    
      <div className="flex flex-col">
        <Navbar backgroundColor={navbarBgColor} />
        <div id="sector1">
        <Sector1 />
        </div>
        <div id="sector2">
        <Sector2 />
        </div>
        <div id="sector3">
        <Sector3 />
        </div>
      </div>

  );
}

export default App;
