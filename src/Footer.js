import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="footer-disclaimer">
        This Vanilla JavaScript project was coded by Stephanie Zbinden.
        <br />
        It is{" "}
        <a
          href="https://github.com/NasodQueen/Weather-App"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
        and
        <a href="https://www.netlify.com" rel="noreferrer" target="_blank">
          hosted on Netlify
        </a>
        .
      </div>
      <div id="footer-music">
        What I listened to while coding:{" "}
        <a href="https://youtu.be/gd6nEquwuhM" rel="noreferrer" target="_blank">
          Interstellar (Chillwave - Retrowave - Electronic Mix)
        </a>
      </div>
    </div>
  );
}
