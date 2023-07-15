import React, { useState, useEffect, useCallback } from "react";
import "./PaletteButtons.css";

export default function PaletteButtons() {
  const [theme, setTheme] = useState("");

  const handleButtonClick = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const applyTheme = useCallback(() => {
    // Update the root CSS variables based on the selected theme
    const root = document.documentElement;

    if (theme === "sun") {
      root.style.setProperty("--first-color", "#c73866");
      root.style.setProperty("--second-color", "#fe676e");
      root.style.setProperty("--third-color", "#fd8f52");
      root.style.setProperty("--fourth-color", "#ffbd71");
      root.style.setProperty("--fifth-color", "#ffdca2");
    } else if (theme === "rain") {
      root.style.setProperty("--first-color", "#015c92");
      root.style.setProperty("--second-color", "#2d82b5");
      root.style.setProperty("--third-color", "#53a6d8");
      root.style.setProperty("--fourth-color", "#88cdf6");
      root.style.setProperty("--fifth-color", "#bce6ff");
    } else if (theme === "cloudy") {
      root.style.setProperty("--first-color", "#4a707a");
      root.style.setProperty("--second-color", "#7697a0");
      root.style.setProperty("--third-color", "#94b0b7");
      root.style.setProperty("--fourth-color", "#c2c8c5");
      root.style.setProperty("--fifth-color", "#ddddda");
    } else if (theme === "snow") {
      root.style.setProperty("--first-color", "#9b9b9b");
      root.style.setProperty("--second-color", "#b6b6b6");
      root.style.setProperty("--third-color", "#d1d1d1");
      root.style.setProperty("--fourth-color", "#e7e7e7");
      root.style.setProperty("--fifth-color", "#ffffff");
    }
  }, [theme]);

  // Call applyTheme whenever the theme changes
  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <div className="PaletteButtons">
      <div className="color-switch-buttons-description">
        Color palette showcase:
      </div>
      <div className="PaletteButtonContainer">
        <button
          className="sunshine-btn color-btn"
          onClick={() => handleButtonClick("sun")}
        >
          Sunshine
        </button>
        <button
          className="rain-btn color-btn"
          onClick={() => handleButtonClick("rain")}
        >
          Rain
        </button>
        <button
          className="cloudy-btn color-btn"
          onClick={() => handleButtonClick("cloudy")}
        >
          Cloudy
        </button>
        <button
          className="snow-btn color-btn"
          onClick={() => handleButtonClick("snow")}
        >
          Snow
        </button>
      </div>
    </div>
  );
}
