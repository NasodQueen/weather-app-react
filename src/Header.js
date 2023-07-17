import React from "react";

import HeaderNotice from "./HeaderNotice";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Header.css";

export default function Header({ data, theme }) {
  return (
    <div className="Header">
      <div className="HeaderNotice">
        <HeaderNotice code={data.icon} />
      </div>
      <div className="HeaderData">
        <div className="header-city-weather-position">
          <h1 className="city-name">{data.city}</h1>
          <h2>
            <span className="text-capitalize">{data.description}</span>
          </h2>
          <h2>
            <WeatherTemperature celsius={data.temperature} />
          </h2>
          <h2 className="date-and-time">
            <DateFormat date={data.date} />
          </h2>
        </div>
      </div>
      <div className="HeaderIcon">
        <WeatherIcon code={data.icon} size={165} theme={theme} />
      </div>
    </div>
  );
}
