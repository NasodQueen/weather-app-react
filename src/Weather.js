import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Header from "./Header";
import RecentCities from "./RecentCities";
import PopularCities from "./PopularCities";
import AdditionalInfo from "./AdditionalInfo";
import Forecast from "./Forecast";
// import UnitToggle from "./UnitToggle";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [theme, setTheme] = useState("");
  const root = document.documentElement;

  const applyTheme = useCallback((iconCode) => {
    const codeMapping = {
      "01d": "sun",
      "01n": "sun",
      "02d": "sun",
      "02n": "sun",
      "03d": "sun",
      "03n": "sun",
      "04d": "cloudy",
      "04n": "cloudy",
      "09d": "rain",
      "09n": "rain",
      "10d": "rain",
      "10n": "rain",
      "11d": "rain",
      "11n": "rain",
      "13d": "snow",
      "13n": "snow",
      "50d": "cloudy",
      "50n": "cloudy",
    };
    setTheme(codeMapping[iconCode]);
  }, []);

  useEffect(() => {
    applyTheme(weatherData.icon);
  }, [weatherData.icon, applyTheme]);

  useEffect(() => {
    // Handle theme changes here
    if (theme === "sun") {
      root.style.setProperty("--first-color", "#c73866");
      root.style.setProperty("--second-color", "#fe676e");
      root.style.setProperty("--third-color", "#fd8f52");
      root.style.setProperty("--fourth-color", "#ffbd71");
      root.style.setProperty("--fifth-color", "#ffdca2");
    } else if (theme === "rain") {
      root.style.setProperty("--first-color", "#015c92");
      root.style.setProperty("--second-color", "#2d82b5");
      root.style.setProperty("--third-color", "#53a6d8");
      root.style.setProperty("--fourth-color", "#88cdf6");
      root.style.setProperty("--fifth-color", "#bce6ff");
    } else if (theme === "cloudy") {
      root.style.setProperty("--first-color", "#4a707a");
      root.style.setProperty("--second-color", "#7697a0");
      root.style.setProperty("--third-color", "#94b0b7");
      root.style.setProperty("--fourth-color", "#c2c8c5");
      root.style.setProperty("--fifth-color", "#ddddda");
    } else if (theme === "snow") {
      root.style.setProperty("--first-color", "#9b9b9b");
      root.style.setProperty("--second-color", "#b6b6b6");
      root.style.setProperty("--third-color", "#d1d1d1");
      root.style.setProperty("--fourth-color", "#e7e7e7");
      root.style.setProperty("--fifth-color", "#ffffff");
    }
  }, [theme, root]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
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
    applyTheme(weatherData.icon);
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
        <Header data={weatherData} theme={theme} />
        <div className="MidBody">
          <div className="FormRecentPopularContainer">
            <div className="FormContainer">
              <form className="Form" onSubmit={handleSubmit}>
                <div className="textInput">
                  <input
                    type="search"
                    className="form-control"
                    placeholder=" Enter a city..."
                    onChange={updateCity}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
                <button
                  type="submit"
                  className="btn btn-primary disabled"
                  disabled={true}
                >
                  n/a
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
          <Forecast coordinates={weatherData.coordinates} theme={theme} />
        </div>
        {/* <UnitToggle /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
