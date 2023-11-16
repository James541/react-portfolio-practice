import { useState } from "react";
import selfie from "../src/selfie.png";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="name-tag">
          <h3>name</h3>
        </div>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="selfie-img">
        <img src={selfie} />
      </div>
    </>
  );
}

export default App;
