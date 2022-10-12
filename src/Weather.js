import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

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
            <WeatherInfo data={weatherData} />
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
