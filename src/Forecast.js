import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="ForecastSingle">
      <div className="card col">
        <div className="card-body">
          <h5 className="card-title">Thursday</h5>
          <i id="weather-icon" className="bi icon}">
            ️️☁
          </i>
          <p className="card-text">
            <span className="forecast-max-temp">26</span>
            <span className="temp-unit">°C</span> |
            <span className="forecast-min-temp">11</span>
            <span className="temp-unit">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
