import React from "react";

import { ReactSkycon } from "react-skycons-extended";

import "./Header.css";
import "./index.css";

export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const themeMapping = {
    sun: "#c73866",
    rain: "#015c92",
    cloudy: "#4a707a",
    snow: "#9b9b9b",
  };

  return (
    <ReactSkycon
      icon={iconMapping[props.code]}
      color={themeMapping[props.theme]}
      size={props.size}
      animate={true}
    />
  );
}
