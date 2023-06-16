import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form id="citySearchForm" className="Form">
      <div className="textInput col-7">
        <input
          type="text"
          className="form-control"
          id="inputCity"
          placeholder=" Enter a city..."
        />
      </div>
      <button
        type="submit"
        id="search-button"
        className="btn btn-primary col-2 p-2"
      >
        Search
      </button>
      <button
        type="submit"
        id="current-city-button"
        className="btn btn-primary col-2 p-2"
      >
        Current
      </button>
    </form>
  );
}
