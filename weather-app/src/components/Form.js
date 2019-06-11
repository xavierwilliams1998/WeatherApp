import React from "react";

//I set up a attribute named on submit and it calls in this.prop.getWeather

const Form = props => (

    <form onSubmit={props.getWeather} >
              <input type = "text" name ="city" placeholder = "City..." />
              <input type = "text" name ="country" placeholder = "Country..."/>
              <button>Get Weather</button>

          </form>
);

export default Form;