import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [BMI, setBmi] = useState("");
  const [message, setMessaget] = useState("");

  let calbmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Enter value grater than 0");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessaget("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 25) {
        setMessaget("You are healthy");
      } else {
        setMessaget("You are over weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={calbmi}>
          <div>
            <label htmlFor="height">Height in cm:</label>
            <input
              type="text"
              className="height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight in kg:</label>
            <input
              type="text"
              className="height"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
          <div>
            <button className="btn" type="submit" /* onSubmit={calbmi} */>
              Calculate BMI
            </button>
            <button className="btn btn-outline" onClick={reload}>
              Refresh
            </button>
          </div>
          <div className="center">
            <h3>your bmi is:{BMI}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
