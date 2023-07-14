import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="FooterTextContainer">
        <div id="footer-disclaimer">
          This React project was coded by{" "}
          <a
            href="https://portfolio-project-823c68.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Steph
          </a>
          {" (that's me!) "}
          <br />
          It is{" "}
          <a
            href="https://github.com/NasodQueen/weather-app-react"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and uses{" "}
          <a href="https://openweathermap.org" rel="noreferrer" target="_blank">
            OpenWeatherMap API
          </a>
          .
        </div>
        <div id="footer-music">
          What I listened to while coding:{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLJm38UjKbcCQ7fJphYBfFO9PHTrzN7ExF"
            rel="noreferrer"
            target="_blank"
          >
            My coding mix
          </a>
        </div>
      </div>
    </div>
  );
}
