import React, { useState } from "react";
import "./App.css";
import AirportChooser from "./airportChooser/AirportChooser";
import data from "./airports.json";

function App() {
  const [selectedAirport, setSelectedAirport] = useState({});
  function onAirportSelection(airport) {
    setSelectedAirport(airport);
  }
  return (
    <div className="App">
      <div className="container">
        <AirportChooser
          data={data}
          onAirportSelection={onAirportSelection}
        ></AirportChooser>
        <article className="airportDetails">
          <h3>Selected Airport</h3>
          <section>
            {selectedAirport &&
              Object.keys(selectedAirport).map((attribute) => (
                <p key={attribute}>
                  <label for={attribute}>{attribute}</label>
                  <span name={attribute}>{selectedAirport[attribute]}</span>
                </p>
              ))}
          </section>
        </article>
      </div>
    </div>
  );
}

export default App;
