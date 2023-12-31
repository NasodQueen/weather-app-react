import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast({ coordinates, theme }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //sets loaded to false if the props change
  useEffect(() => {
    setLoaded(false);
  }, [coordinates.coordinates]);

  function load() {
    let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let lat = coordinates.lat;
    let lon = coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="ForecastContainer">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecast} theme={theme} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
  }
}
