import React from "react";
import "./Loader.css";

function Loader({ fullscreen = true }) {
  return (
    <div className={`loader-container ${fullscreen && "fullscreen"}`}>
      <span className="loader">Loading...</span>
    </div>
  );
}

export default Loader;
