import React from "react";
import Search from "./Search";

import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 22,
    date: "Monday 19:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Sunny",
    wind: 2,
  };

  let url = "#";

  return (
    <div className="container Weather">
      <div className="card">
        <div className="card-body full-app">
          <div className="row">
            <div className="col-7">
              <div className="overview">
                <h1 id="city">{weatherData.city}</h1>
                <div className="sub-overview">
                  <h2 id="current-date">{weatherData.date}</h2>
                  <h3 id="weather-description">{weatherData.description}</h3>
                  <p class="wind-speed">
                    Wind: <span id="wind">{weatherData.wind}</span> m/s
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="overview-weather">
                <span className="temperature" id="todays-temp">
                  <strong>{weatherData.temperature}</strong>
                </span>
                <span class="units">
                  <a href={url} id="celsius">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href={url} id="fahrenheit">
                    °F
                  </a>
                </span>
                <div>
                  <img
                    src={weatherData.imgUrl}
                    alt="Sunny"
                    id="today-weather-icon"
                    className="float-right"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}
