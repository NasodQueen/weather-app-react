import React, { useState, useEffect } from "react";

import "./UnitToggle.css";

export default function UnitToggle() {
  let unit,
    setUnit = useState("metric");
  function handleUnit() {
    if (unit === "metric") {
      setUnit = "imperial";
    } else {
      setUnit = "metric";
    }
    alert("Unit change");
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
