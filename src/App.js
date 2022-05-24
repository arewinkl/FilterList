import React, { useState } from "react";
import "./App.css";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  return (
    <div className="App">
      <header className="App-header">
        <input className="input-app" />
        <button className="button-one-app">Submit</button>
      </header>
    </div>
  );
}

export default App;
