import React, { Component } from 'react'

export class GreetingClass extends Component {
  
    render() {
        console.log(this.props)
        const {name, email, city, children} = this.props
    return (
      <div>
          <h2>Name: {name}</h2>
          <h2>Email: {email}</h2>
          <h2>City: {city}</h2>
          <h2>{children}</h2>
      </div>
    )
  }
}

export default GreetingClass