import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="footer-disclaimer">
        This React project was coded by Stephanie Zbinden.
        <br />
        It is{" "}
        <a
          href="https://github.com/NasodQueen/weather-app-react"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
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
  );
}
