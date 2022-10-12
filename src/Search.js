import React from "react";

import "./App.css";

export default function Search() {
  return (
    <div className="container Search">
      <form className="city-search-form">
        <div className="row">
          <div className="col-2">
            <input
              type="button"
              value="📍"
              className="btn btn-warning current-location-button"
            />
          </div>
          <div className="col-8">
            <input
              type="search"
              className="form-control w-100 search-text-input"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus="on"
              aria-label="search"
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-primary search-city-button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
