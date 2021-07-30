import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Suspense fallback={"loading"}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <p>Russell</p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          */}
        </header>
      </div>
    </React.Suspense>
  );
}

export default App;
