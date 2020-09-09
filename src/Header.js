import React from "react";
import MemeGenerator from "./MemeGenerator";
import "./styles.css";

function Header() {
  return (
    <header>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Trollface"
        id="trollface"
      />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
