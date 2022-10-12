import React from "react";
import FormattedDate from "./FormattedDate";

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
              <p className="wind-speed">
                Wind: <span>{Math.round(props.data.wind)}</span> m/s
              </p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="overview-weather">
            <span className="temperature todays-temp">
              <strong>{Math.round(props.data.temperature)}</strong>
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
