import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19°C</span>
            <span className="WeatherForecast-temp-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
