import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./App.css";
import "./Weather.css";
import "./WeatherForecast.css";
import "./WeatherForecastDay.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container Weather">
        <div className="full-app">
          <div>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
          <div className="container">
            <form onSubmit={handleSubmit} className="city-search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    className="form-control w-100"
                    onChange={handleCityChange}
                    placeholder="Enter a city"
                    autocomplete="off"
                    autofocus="on"
                    aria-label="search"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100 search-city-button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
