
import "./css/App.css"
import tempImg from "./assets/thermometer.png"
import { useState } from "react"
import axios from "axios";


function App() {
  const [data,setData] = useState({});
  const [location, setLocation] = useState('');


  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=141474aa8babcd859329a1fe178f467c`;

  const searchLocation = event => {
    // setCurrentLocation(location);
    console.log(location);
    if (event.key == 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      })
      setLocation('');
    }

  }

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="mainhead">
            Weather App
          </h1>
          <div className="maincard">
              <div className="up">
                <div className="location">{data.name ? data.name : 'Location'}
                </div>
                <div className="searchbar">
                  <input value={location} onChange={event => setLocation(event.target.value)} placeholder="Enter Location" onKeyDown={event => searchLocation(event)} type="text" className="text" />
                </div>
              </div>
              <div className="down">
                <div className="des">
                  {data.weather ? data.weather[0].main : null}
                </div>
                <div className="info">
                  <div className="temp">
                    <div className="tempImg">
                      <img src={tempImg} alt="Thermometer Image"/>
                    </div>
                    <div className="tempValues">
                      <div className="mainTemp">{data.main ? (data.main.temp-273).toFixed(1) + '°C' : null}</div>
                      <div className="otherTemp"><div className="minTemp"></div>Min: {data.main ? (data.main.temp_min-273).toFixed(1) + '°C' : null}<div className="maxTemp">Max: {data.main ? (data.main.temp_max-273).toFixed(1) + '°C' : null}</div></div>
                    </div>
                  </div>

                  <div className="others">
                    <div className="pressure othersBox">
                      <div className="dataValue">{data.main ? data.main.pressure : null}</div>
                      <div className="dataName">Pressure</div>
                    </div>
                    <div className="humidity othersBox">
                      <div className="dataValue">{data.main ? data.main.humidity + '%' : null}</div>
                      <div className="dataName">Humidity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
