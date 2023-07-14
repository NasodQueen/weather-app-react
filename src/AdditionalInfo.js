import React from "react";

import SunriseSunset from "./SunriseSunset";
import LunarPhase from "./LunarPhase";

import {
  IconTemperature,
  IconBrandSpeedtest,
  IconDropletFilled2,
  IconWind,
  IconSunrise,
  IconSunset,
} from "@tabler/icons-react";

import "./AdditionalInfo.css";

export default function AdditionalInfo(props) {
  return (
    <div className="AdditionalInfo">
      <div className="additionalInfoTop">
        <div className="additionalInfoColLeft">
          {Math.round(props.data.feels_like)}
          °C <IconTemperature />
          <br />
          {Math.round(props.data.temp_max)}
          °C | {Math.round(props.data.temp_min)}
          °C <IconBrandSpeedtest />
          <br />
          {props.data.humidity}% <IconDropletFilled2 />
          <br />
        </div>
        <div className="additionalInfoColRight">
          {" "}
          <IconWind /> {Math.round(props.data.wind)} km/h <br />
          <IconSunrise />{" "}
          <SunriseSunset
            time={props.data.sunrise}
            timezone={props.data.timezone}
          />
          <br />
          <IconSunset />{" "}
          <SunriseSunset
            time={props.data.sunset}
            timezone={props.data.timezone}
          />
          <br />
        </div>
      </div>
      <div className="LunarPhaseInfo">
        <i className="bi bi-moon-fill" title="Lunar phase">
          <span id="lunar-phase" title="Lunar phase">
            <LunarPhase />
          </span>
        </i>
      </div>
    </div>
  );
}
