import React from "react";

import "./MidBody.css";

export default function PopularCities() {
  return (
    <div className="PopularCities">
      <h4>Popular cities:</h4>
      <a href="/" id="new-york-link">
        New York
      </a>{" "}
      <a href="/" id="paris-link">
        Paris
      </a>{" "}
      <a href="/" id="london-link">
        London
      </a>{" "}
      <a href="/" id="tokyo-link">
        Tokyo
      </a>{" "}
      <a href="/" id="hong-kong-link">
        Hong Kong
      </a>
    </div>
  );
}
