import React, { Component } from 'react';

class Weather extends Component {

  state = {
    city : 'Paris',
    apiKey: 'f67f1dfdfba00b176d03787a71358e66',
    weather: {}
  }

  async componentDidMount() {
    const weather = await this.getWeather();
    this.setState({weather})
  }

  // Fetch weather from API
  async getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.apiKey}&units=metric`;
    const response = await fetch(url);
    const responseData = await response.json();

    return responseData.main;
  }

  // Change weather location
  changeLocation(city) {
    this.setState({
      city
    });
  }

  render() {
    
    const { weather } = this.state;
    console.log(weather)

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
            <h1 id="w-location">Location :</h1>
            <h3 className="text-dark" id="w-desc">{this.state.city}</h3>
            <ul id="w-details" className="list-group mt-3">
              <li className="list-group-item" id="w-humidity">Humidity:{weather.humidity}</li>
              <li className="list-group-item" id="w-dewpoint">Pressure:{weather.pressure}</li>
              <li className="list-group-item" id="w-feels-like">Feels Like:{weather.feels_like}</li>
              <li className="list-group-item" id="w-temp">Temp:{weather.temp}</li>
              {/* <li className="list-group-item" id="w-wind">{this.state.weather.main}</li> */}
            </ul>
            <hr/>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#locModal" onClick={this.showModal}>
              Change Location
                            </button>
          </div>
        </div>
      </div>)
  }

}

export default Weather;