import React from "react";
import '../App.css';


const Form = props => (
  <form onSubmit={props.getWeather} className="form">
    <input className="cityfield" type="text" name="city" placeholder="enter city name" />
    <button type="submit" className="button" >Get Weather</button>
  </form>
);

export default Form;