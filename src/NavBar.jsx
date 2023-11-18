import React from "react";

function NavBar() {
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
    </>
  );
}

export default NavBar;
