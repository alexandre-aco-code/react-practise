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

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city) {
    this.setState({
      city
    });
  }
  render() {
    const results = this.state.city + " : " + this.state.weather;
    return (<p>{results}</p>)
  }

}

export default Weather;