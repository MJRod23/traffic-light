import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className="traffic-light">
      <div
        onClick={() => setSelectedColor("green")}
        className={selectedColor === "green" ? "glow light green" : "light green"}
      >
        {" "}
      </div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={selectedColor === "yellow" ? "glow light yellow" : "light yellow"}
      >
        {" "}
      </div>
      <div
        onClick={() => setSelectedColor("red")}
        className={selectedColor === "red" ? "glow light red" : "light red"}
      >
        {" "}
      </div>

    </div>
  );
};

export default Home;
