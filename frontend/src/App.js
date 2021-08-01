import React from "react";
import Landing from "./Landing";
//import "./App.css";

function App() {
  return (
    <React.Suspense fallback={""}>
      <Landing />
    </React.Suspense>
  );
}

export default App;
