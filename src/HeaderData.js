import React from "react";

import DateFormat from "./DateFormat";

export default function HeaderData(props) {
  return (
    <div className="HeaderData">
      <div className="header-city-weather-position">
        <h1 className="city-name">{props.data.city}</h1>
        <h2 className="date-and-time">
          <DateFormat date={props.data.date} />
        </h2>
        <h2>
          <span className="header-weather-text">{props.data.description}</span>{" "}
          |
          <span className="header-temperature-degrees">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temp-unit">°C</span>
        </h2>
      </div>
    </div>
  );
}
