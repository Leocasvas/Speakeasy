import React, { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState(["", "", "", "", "", ""]);
  const [payer, setPayer] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
    if (error) setError("");
  };

  const selectPayer = () => {
    const validNames = names.filter((name) => name.trim() !== "");

    if (validNames.length < 2) {
      setError("Please enter at least two friends to play!");
      setPayer(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * validNames.length);
    setPayer(validNames[randomIndex]);
    setError("");
  };

  const resetGame = () => {
    setNames(["", "", "", "", "", ""]);
    setPayer(null);
    setError("");
  };

  return (
    <div className="bar-background">
      <div className="menu-card">
        <header>
          <h1 className="brand">The Speakeasy</h1>
          <p className="tagline">Who's picking up the check?</p>
        </header>

        <div className="input-grid">
          {names.map((name, index) => (
            <div key={index} className="input-wrapper">
              <label htmlFor={`friend-${index}`}>Guest {index + 1}</label>
              <input
                id={`friend-${index}`}
                type="text"
                value={name}
                placeholder="Enter Name..."
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>

        {error && <p className="error-text">{error}</p>}

        <div className="button-group">
          <button className="btn-primary" onClick={selectPayer}>
            Get The Bill
          </button>
          <button className="btn-secondary" onClick={resetGame}>
            Clear Table
          </button>
        </div>

        {payer && (
          <div className="result-container">
            <hr />
            <h2>The lucky winner is...</h2>
            <p className="winner-name">{payer} is paying the bill!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
