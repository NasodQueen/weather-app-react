import React from "react";



import "./Form.css";

export default function Form() {

  let [city, setCity] = useState("");
  let [submit, setSubmit] = useState("");
  let [formSubmit, setFormSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(city);
    setFormSubmit(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
    <form className="Form" onSubmit={handleSubmit}>
      <div className="textInput col-7">
        <input
          type="search"
          className="form-control"
          placeholder=" Enter a city..."
          value={city}
          onChange={updateCity}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary col-2 p-2"
      >
        Search
      </button>
      <button
        type="submit"
        className="btn btn-primary col-2 p-2"
      >
        Current
      </button>
    </form>
    <Weather city={submit} submitState={formSubmit} />
    </div>
  );
}
