import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container WeatherInfo">
      <div className="row">
        <div className="col-7">
          <div className="overview">
            <h1 className="city">{props.data.city}</h1>
            <div className="sub-overview">
              <h2 className="current-date">
                <FormattedDate date={props.data.date} />
              </h2>
              <h3 className="weather-description">{props.data.description}</h3>
              <ul>
                <li className="wind-speed">
                  Wind: <span>{Math.round(props.data.wind)}</span> m/s
                </li>
                <li className="humidity">Humidity: {props.data.humidity}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="overview-weather">
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div>
              <img
                src={props.data.imgUrl}
                alt={props.data.description}
                className="float-right today-weather-icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
