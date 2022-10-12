import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "d1be4136ed4955ecd4ad578e1cdcae10";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container Weather">
        <div className="card">
          <div className="card-body full-app">
            <WeatherInfo data={weatherData} />
            <div className="container Search">
              <form onSubmit={handleSubmit} className="city-search-form">
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
                      onChange={handleCityChange}
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
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
