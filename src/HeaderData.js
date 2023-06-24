import React, { useState } from "react";

import Form from "./Form";

export default function HeaderData(props) {
  return (
    <div className="HeaderData">
      <div className="header-city-weather-position">
        <h1 className="city-name">New York</h1>
        <h2 className="date-and-time">Tuesday, 16:24</h2>
        <h2>
          <span className="header-weather-text">{props.description}</span> |
          <span className="header-temperature-degrees">20</span>
          <span className="temp-unit">°C</span>
        </h2>
      </div>
    </div>
  );
}
