import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let city = props.city;
  let submitState = props.submitState;
  let [temperature, setTemperature] = useState(null);
  let [weatherDescription, setWeatherDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setWeatherDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }
  if (submitState === true && city !== "") {
    let apiKey = "c6ca586286ea213d4f29918b81fd9858";
    let apiUrlBase = "https://api.openweathermap.org/data/2.5/weather?";
    let urlCitySearch = `${apiUrlBase}q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlCitySearch).then(showWeather);
    return (
      <div className="Weather">
        <h2>Weather Information for {city}:</h2>
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Weather: {weatherDescription}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} meter/second</li>
        </ul>
        {/* Rest of your weather component */}
      </div>
    );
  } else {
    return "";
  }
}
