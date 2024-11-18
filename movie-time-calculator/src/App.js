// App.jsx
import React, { useState } from "react";

const App = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [speed, setSpeed] = useState(1);
  const [result, setResult] = useState("");

  const calculateTime = () => {
    const totalMinutes = parseInt(hours || 0) * 60 + parseInt(minutes || 0);
    const adjustedMinutes = totalMinutes / speed;

    const adjustedHours = Math.floor(adjustedMinutes / 60);
    const remainingMinutes = Math.round(adjustedMinutes % 60);

    setResult(`${adjustedHours} hours and ${remainingMinutes} minutes`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Movie Time Calculator</h1>
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Hours:</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="Enter hours"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Minutes:</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Enter minutes"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Playback Speed:</label>
          <select
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            style={styles.input}
          >
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="1.75">1.75x</option>
            <option value="2">2x</option>
          </select>
        </div>
        <button onClick={calculateTime} style={styles.button}>
          Calculate
        </button>
      </div>
      {result && (
        <div style={styles.result}>
          <h2>Adjusted Time:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "10px",
  },
  label: {
    marginRight: "10px",
    fontSize: "1rem",
  },
  input: {
    fontSize: "1rem",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100px",
  },
  button: {
    fontSize: "1rem",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  result: {
    fontSize: "1.25rem",
    marginTop: "20px",
  },
};

export default App;
