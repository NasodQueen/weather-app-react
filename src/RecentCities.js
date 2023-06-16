import React from "react";

import "./MidBody.css";

export default function RecentCities() {
  return (
    <div className="RecentCities">
      <div className="recentCities col">
        <h4>Recently searched cities:</h4>
        <span id="recentCitiesSpan">Honk Kong, Kyiv, Lucerne</span>
      </div>
    </div>
  );
}
