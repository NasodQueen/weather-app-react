import React from "react";

import HeaderNotice from "./HeaderNotice";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="HeaderNotice">
        <HeaderNotice code={props.data.icon} />
      </div>
      <div className="HeaderData">
        <div className="header-city-weather-position">
          <h1 className="city-name">{props.data.city}</h1>
          <h2 className="date-and-time">
            <DateFormat date={props.data.date} />
          </h2>
          <h2>
            <span className="text-capitalize">{props.data.description}</span> |{" "}
            <WeatherTemperature celsius={props.data.temperature} />
          </h2>
        </div>
      </div>
      <div className="HeaderIcon">
        <h1>
          <WeatherIcon code={props.data.icon} size={52} />
        </h1>
      </div>
    </div>
  );
}
