import React from "react";

export default function HeaderData() {
  return (
    <div className="HeaderData">
      <div className="header-city-weather-position">
        <h1 id="city-name">New York</h1>
        <h2 id="date-and-time">Tuesday, 16:24</h2>
        <h2>
          <span id="header-weather-text">Haze</span> |
          <span id="header-temperature-degrees">20</span>
          <span className="temp-unit">°C</span>
        </h2>
      </div>
    </div>
  );
}
