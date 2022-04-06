import React, { Component } from 'react'

export class WeatherApi extends Component {
    constructor(){
        super()

        this.state = {
            weather: []
        }
    }

    componentDidMount(){
        fetch("http://api.weatherstack.com/current?access_key=478211690e10425afe7859d177cce2f6&query=New%20York")
        .then(response =>response.json())
        .then(data => this.setState({weather: [data]}))
    }
  render() {
    return (
      <div>
        <h1>Weather Information of New York</h1>
        <table className="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
              <th>Temperature</th>
              <th>WindSpeed</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.weather.map(data => (
                <tr key={data.request.type}>
                    <td>{data.location.name}</td>
                    <td>{data.location.country}</td>
                    <td>{data.current.temperature}</td>
                    <td>{data.current.wind_speed}</td>
                    <td>{data.current.humidity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default WeatherApi