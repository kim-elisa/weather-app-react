import React from "react";

import "./App.css";

export default function Search() {
  return (
    <div className="container Search">
      <form id="city-search-form">
        <div className="row">
          <div className="col-2">
            <input
              type="button"
              value="📍"
              id="current-location-button"
              className="btn btn-warning"
            />
          </div>
          <div className="col-8">
            <input
              type="search"
              className="form-control w-100"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus="on"
              id="search-text-input"
              aria-label="search"
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              id="search-city-button"
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
