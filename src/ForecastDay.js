import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function ForecastDay({ data, theme }) {
  function maxTemperature() {
    let temperature = Math.round(data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{day()}</h5>
          <WeatherIcon code={data.weather[0].icon} size={50} theme={theme} />
          <p className="card-text">
            <span className="forecast-max-temp">{maxTemperature()}</span>
            <span className="temp-unit-max">°C</span> |{" "}
            <span className="forecast-min-temp">{minTemperature()}</span>
            <span className="temp-unit-min">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
