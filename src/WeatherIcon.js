import React from "react";
// import ReactAnimatedWeather from "react-animated-weather";

import { ReactSkycon } from "react-skycons-extended";

import "./Header.css";
import "./index.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "THUNDER_SHOWERS_DAY",
    "11n": "THUNDER_SHOWERS_NIGHT",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactSkycon
      icon={codeMapping[props.code]}
      color="#015c92"
      size={props.size}
      animate={true}
    />
  );
}
