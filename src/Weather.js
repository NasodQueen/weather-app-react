import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import RecentCities from "./RecentCities";
import PopularCities from "./PopularCities";
import AdditionalInfo from "./AdditionalInfo";
import Forecast from "./Forecast";
import UnitToggle from "./UnitToggle";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      feels_like: response.data.main.feels_like,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      timezone: response.data.timezone,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "51fa04dfc263bc469a97411097e19846";
    const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather?";
    let urlCitySearch = `${apiUrlBase}q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlCitySearch).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Header data={weatherData} />
        <div className="MidBody">
          <div className="FormRecentPopularContainer">
            <div className="FormContainer">
              <form className="Form" onSubmit={handleSubmit}>
                <div className="textInput">
                  <input
                    type="search"
                    className="form-control"
                    placeholder=" Enter a city..."
                    autoFocus={true}
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
            </div>
            <div className="RecentPopularBody">
              <RecentCities />
              <PopularCities />
            </div>
          </div>
          <AdditionalInfo data={weatherData} />
        </div>
        <div className="Forecast">
          <Forecast coordinates={weatherData.coordinates} />
        </div>
        <UnitToggle />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
