import React from "react";

import "./AdditionalInfo.css";

export default function AdditionalInfo(props) {
  return (
    <div className="AdditionalInfo">
      <div className="additionalInfoTop">
        <div className="additionalInfoColLeft">
          <span title="Feels like">
            <span id="feels-like-temp">
              {Math.round(props.data.feels_like)}
            </span>
            <span className="temp-unit">°C</span>
          </span>
          <br />
          <span title="Max. | Min.">
            <span className="max-temp">{Math.round(props.data.temp_max)}</span>
            <span className="temp-unit">°C</span>{" "}
            <span className="max-min-bar">|</span>{" "}
            <span className="min-temp">{Math.round(props.data.temp_min)}</span>
            <span className="temp-unit">°C</span>{" "}
          </span>
          <br />
          <span title="Humidity">
            <span className="humidity">{props.data.humidity}</span>%
          </span>
          <br />
        </div>
        <div className="additionalInfoColRight col">
          <span title="Wind speed">
            {" "}
            <span className="wind-speed">
              {Math.round(props.data.wind)}
            </span>{" "}
            <span className="wind-speed-unit">km/h</span>{" "}
          </span>
          <br />
          {props.data.sunrise}
          <br />
          <span className="sunset">{props.data.sunset}</span>
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
