import React from "react";

import "./AdditionalInfo.css";

export default function AdditionalInfo() {
  return (
    <div className="AdditionalInfo">
      <div className="additionalInfoTop">
        <div className="additionalInfoColLeft">
          <span title="Feels like">
            <span id="feels-like-temp">22</span>
            <span className="temp-unit">°C</span>
            <i className="bi bi-thermometer-half"> </i>
          </span>
          <br />
          <span title="Max. | Min.">
            <span id="max-temp">23</span>
            <span className="temp-unit">°C</span>
            <span id="max-min-bar">|</span>
            <span id="min-temp">22</span>
            <span className="temp-unit">°C</span>
            <i className="bi bi-speedometer2"> </i>{" "}
          </span>
          <br />
          <span title="Humidity">
            <span id="humidity">35</span>%<i className="bi bi-moisture"> </i>
          </span>
          <br />
        </div>
        <div className="additionalInfoColRight col">
          <span title="Wind speed">
            <i className="bi bi-wind"></i> <span id="wind-speed">9</span>
            <span id="wind-speed-unit">km/h</span>{" "}
          </span>
          <br />
          <span title="Sunrise">
            <i className="bi bi-sunrise-fill"> </i>
            <span id="sunrise">05:36</span>
          </span>
          <br />
          <span title="Sunset">
            <i className="bi bi-sunset-fill"> </i>
            <span id="sunset">21:21</span>
          </span>
          <br />
        </div>
      </div>
      <div className="LunarPhaseInfo">
        <i className="bi bi-moon-fill" title="Lunar phase">
          <span id="lunar-phase" title="Lunar phase">
            Waning Gibbous Moon
          </span>
        </i>
      </div>
    </div>
  );
}
