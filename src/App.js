import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
      </div>
      <footer>
        <a
          href="https://github.com/kim-elisa/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        {""}
        by {""}
        <a
          href="https://github.com/kim-elisa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kim E Munnery
        </a>
      </footer>
    </div>
  );
}
