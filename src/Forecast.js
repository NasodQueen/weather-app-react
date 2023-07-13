import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="ForecastSingle">
      <div className="card col">
        <div className="card-body">
          <h5 className="card-title">Thursday</h5>
          <WeatherIcon code="01d" size={36} />
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
