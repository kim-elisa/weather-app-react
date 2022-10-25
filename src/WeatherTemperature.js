import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature todays-temp">
      <span className="temperature">
        <strong>{Math.round(props.celsius)}</strong>
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
