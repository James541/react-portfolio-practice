import React from "react";
import selfie from "./selfie.png";

function Introduction() {
  return (
    <>
      <div className="selfie-container">
        <img className="selfie-img" src={selfie} />
        <p>
          Hello There! I know your time is valuable so let's cut to the chase! I
          am a frontend developer proficent in React, JavaScript,CSS and HTML5.
          Directly below you will find my projects. All projects are accompanied
          by descriptions, code screenshots, and github repository links. All
          projects are also fully fuctional, check them out!
          <br></br>
          <br></br>
          If you would like to get a greater sense of who I am, check out ....
        </p>
      </div>
    </>
  );
}

export default Introduction;
