import React from "react"; 
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const api_KEY = "2bed2558bf07a7c1b1377fbd7c93286d";


class App extends React.Component {

  state = {
  temperature:undefined,
  city:undefined,
  country:undefined,
  humidity:undefined,
  description:undefined,
  error:undefined
}
//The render method returns Jsx.
//Jsx is Javascript code running in the background.
//Their should only be one parent element.
//Every component I make will be imported to App.js
// created a variable that makes the call that converts into JSON 
//Set a prop to getWeather function
getWeather = async (e) => {


  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();   
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_KEY}`);
  const data = await api_call.json();
  console.log(data)
  if (city && country){
  this.setState({

    temperature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description: data.weather[0].description,
    error: ""

  })
}else{
  this.setState({

    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error: "Please enter the value "

  })
}
}
render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default App;
