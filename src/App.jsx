
import "./css/App.css"
import tempImg from "./assets/thermometer.png"


function App() {

  const url ='https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=141474aa8babcd859329a1fe178f467c'
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="mainhead">
            Weather App
          </h1>
          <div className="maincard">
              <div className="up">fsdf
                <div className="searchbar"></div>
              </div>
              <div className="down">
                <div className="des">
                  Cloudy
                </div>
                <div className="info">
                  <div className="temp">
                    <div className="tempImg">
                      <img src={tempImg} alt="Thermometer Image"/>
                    </div>
                    <div className="tempValues">
                      <div className="mainTemp">30°C</div>
                      <div className="otherTemp"><div className="minTemp"></div>Min: 26°C<div className="maxTemp">Max: 32°C</div></div>
                    </div>
                  </div>

                  <div className="others">
                    <div className="pressure othersBox">
                      <div className="dataValue">1008</div>
                      <div className="dataName">Pressure</div>
                    </div>
                    <div className="humidity othersBox">
                      <div className="dataValue">82%</div>
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
