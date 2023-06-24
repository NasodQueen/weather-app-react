import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let city = props.city;
  let submitState = props.submitState;
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  if (submitState === true && city !== "") {
    let apiKey = "51fa04dfc263bc469a97411097e19846";
    let apiUrlBase = "https://api.openweathermap.org/data/2.5/weather?";
    let urlCitySearch = `${apiUrlBase}q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlCitySearch).then(showWeather);
    return (
      <div className="Weather">
        <h2>Weather Information for {city}:</h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        {/* Rest of your weather component */}
      </div>
    );
  } else {
    return "";
  }
}
