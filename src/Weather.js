import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import FormattedDate from "./FormattedDate";

import "./App.css";
import "./Weather.css";

export default function Weather(props) {
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

  function search() {
    const apiKey = "d1be4136ed4955ecd4ad578e1cdcae10";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container Weather">
        <div className="card">
          <div className="card-body full-app">
            <div className="row">
              <div className="col-7">
                <div className="overview">
                  <h1 className="city">{weatherData.city}</h1>
                  <div className="sub-overview">
                    <h2 className="current-date">
                      <FormattedDate date={weatherData.date} />
                    </h2>
                    <h3 className="weather-description">
                      {weatherData.description}
                    </h3>
                    <p className="wind-speed">
                      Wind: <span>{Math.round(weatherData.wind)}</span> m/s
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="overview-weather">
                  <span className="temperature todays-temp">
                    <strong>{Math.round(weatherData.temperature)}</strong>
                  </span>
                  <span className="units">
                    <a href="#" className="celsius">
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="#" className="fahrenheit">
                      °F
                    </a>
                  </span>
                  <div>
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float-right today-weather-icon"
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
  } else {
    search();
    return "Loading...";
  }
}
