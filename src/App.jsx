import axios from "axios";
import "./App.css";
import { useState } from "react";
const key = "ec8e7367787030cd437f1f6f9a39159d";

function App() {
  const [city, setCity] = useState();
  const [data, setData] = useState();
  const run = (e) => {
    setCity(e.target.value);
  };
  const fetchdata = async () => {
    try {
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      console.log(responce.data);
      setData(responce.data);
    } catch (err) {
      alert("error in api");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">WEATHER REPORT</h1>
      <div className="inputcointainer">
        <input
          type="text"
          className="input"
          placeholder="Enter the City name"
          value={city}
          onChange={run}
        />
        <div>
          <br />

          <button className="button" onClick={fetchdata}>
            Press
          </button>
          <br />
          <div className="output">
            {data && (
              <div className="inside">
                <h4>
                  <span style={{ color: "red" }}>Name : </span>
                  {data.name}
                </h4>
                <h4>
                  <span style={{ color: "red" }}>Id :</span> {data.id}
                </h4>
                <h4>
                  <span style={{ color: "red" }}>Temp : </span>
                  {data.main.temp}
                </h4>
                <h4>
                  <span style={{ color: "red" }}>Country : </span>
                  {data.sys.country}
                </h4>
                <h4>
                  <span style={{ color: "red" }}>Main :</span>{" "}
                  {data.weather[0].main}
                </h4>
                <h4>
                  <span style={{ color: "red" }}>Description :</span>{" "}
                  {data.weather[0].description}
                </h4>
                <h4>
                  <span style={{ color: "red" }}>Icon :</span>{" "}
                  {data.weather[0].icon}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
