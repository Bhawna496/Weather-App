import React from 'react'
import '../App.css';

const Weather = (props) => {
  return (
    <div className="weatherCard">
      <div className="origin">
        {props.city && <p className="city">{props.city}, {props.country}</p>}
      </div>
      <div className="logo">
        {props.icon && <img className="img" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon" />}
        {props.description && <p>{props.description}</p>}
      </div>
      <div className="details">
        {props.temperature && <p className="text">Temperature : {Math.round(props.temperature)}
          <sup>&deg;</sup>C</p>}
        {props.humidity && <p>Humidity : {props.humidity}%</p>}
      </div>

      {props.error && <div className="errorBox">
        {props.error}
      </div>}
    </div>
  )
}

export default Weather;