import React, { useState } from "react";
import axios from "axios";

import HeaderData from "./HeaderData";

import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c6ca586286ea213d4f29918b81fd9858";
    let apiUrlBase = "https://api.openweathermap.org/data/2.5/weather?";
    let urlCitySearch = `${apiUrlBase}q=${city}&appid=${apiKey}&units=metric`;
    console.log(urlCitySearch);
    axios.get(urlCitySearch).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="textInput">
        <input
          type="search"
          className="form-control"
          placeholder=" Enter a city..."
          value={city}
          onChange={updateCity}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
      <button type="submit" className="btn btn-primary">
        Current
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
