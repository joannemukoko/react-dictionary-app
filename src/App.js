import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="book" />
      </div>
      <footer className="App-footer">
        <small>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/joannemukoko"
            target="_blank"
            rel="noreferrer"
          >
            Joanne Mukoko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/joannemukoko/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </small>
      </footer>
    </div>
  );
}
export default App;
