import React from "react";
import "./PaletteButtons.css";

export default function PaletteButtons() {
  return (
    <div className="PaletteButtons">
      <div className="color-switch-buttons-description">
        Color palette showcase:
      </div>
      <div className="PaletteButtonContainer">
        <button id="sunshine-btn" className="color-btn">
          Sunshine
        </button>
        <button id="rain-btn" className="color-btn">
          Rain
        </button>
        <button id="cloudy-btn" className="color-btn">
          Cloudy
        </button>
        <button id="snow-btn" className="color-btn">
          Snow
        </button>
      </div>
    </div>
  );
}
