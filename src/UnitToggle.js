import React from "react";

import "./UnitToggle.css";

export default function UnitToggle() {
  function handleUnit() {
    alert("Unit conversion");
  }

  return (
    <div className="UnitToggle">
      <span className="temperature-toggle-units">°C</span>
      <label className="toggle" name="" htmlFor="unitToggle">
        <input
          className="toggle__input"
          type="checkbox"
          id="unitToggle"
          onClick={handleUnit}
        />
        <div className="toggle__fill"></div>
      </label>
      <span className="temperature-toggle-units">°F</span>
    </div>
  );
}
