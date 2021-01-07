import React, { Component } from 'react';
import './App.css'
import Form from './components/InputComponent';
import Weather from './components/WeatherComponent';



const API_KEY = "4238c82cdb1014803b713e52f5f2c0f1";
class App extends Component {
  constructor() {
    super()

    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      description: undefined,
      humidity: undefined,
      visibility: undefined,
      icon: undefined,
      error: undefined,
    }
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    if (city) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        visibility: data.visibility,
        icon: data.weather[0].icon,
        error: '',
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        visibility: undefined,
        icon: undefined,
        error: 'Please Enter City'
      })
    }
  }
  render() {

    return (
      <div className="App">
        <div className="bottom">
          <Form getWeather={this.getWeather} />
        </div>
        <div className="top">
          <Weather
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            description={this.state.description}
            humidity={this.state.humidity}
            visibility={this.state.visibility}
            icon={this.state.icon}
            error={this.state.error}
          />
        </div>
      </div>
    )
  }
}

export default App;