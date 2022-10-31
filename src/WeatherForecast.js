import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "d1be4136ed4955ecd4ad578e1cdcae10";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19</span>
            <span className="unit">°C</span>
            <span className="WeatherForecast-temp-min">
              10
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
