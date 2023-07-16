import React, { useState, useEffect } from "react";

import { ReactSkycon } from "react-skycons-extended";

import "./Header.css";
import "./index.css";

const codeMapping = [
  {
    index: "01d",
    icon: "CLEAR_DAY",
    color: "var(--first-color)",
  },
  { index: "01n", icon: "CLEAR_NIGHT", color: "var(--first-color)" },

  { index: "02d", icon: "PARTLY_CLOUDY_DAY", color: "var(--first-color)" },
  { index: "02n", icon: "PARTLY_CLOUDY_NIGHT", color: "var(--first-color)" },
  { index: "03d", icon: "PARTLY_CLOUDY_DAY", color: "var(--first-color)" },
  { index: "03n", icon: "PARTLY_CLOUDY_NIGHT", color: "var(--first-color)" },
  { index: "04d", icon: "CLOUDY", color: "var(--first-color)" },
  { index: "04n", icon: "CLOUDY", color: "var(--first-color)" },
  { index: "09d", icon: "SHOWERS_DAY", color: "var(--first-color)" },
  { index: "09n", icon: "SHOWERS_NIGHT", color: "var(--first-color)" },
  { index: "10d", icon: "RAIN", color: "var(--first-color)" },
  { index: "10n", icon: "RAIN", color: "var(--first-color)" },
  { index: "11d", icon: "THUNDER_SHOWERS_DAY", color: "var(--first-color)" },
  { index: "11n", icon: "THUNDER_SHOWERS_NIGHT", color: "var(--first-color)" },
  { index: "13d", icon: "SNOW", color: "var(--first-color)" },
  { index: "13n", icon: "SNOW", color: "var(--first-color)" },
  { index: "50d", icon: "FOG", color: "var(--first-color)" },
  { index: "50n", icon: "FOG", color: "var(--first-color)" },
];

export default function WeatherIcon(props) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--first-color"
      )
    );
  }, []); // Run this effect only once on component mount

  // Search the array for an object where the index of the object matches the code passed to the component
  const matchingCode = codeMapping.find((item) => item.index === props.code);

  const { icon } = matchingCode;

  return (
    <ReactSkycon icon={icon} color={color} size={props.size} animate={true} />
  );
}
