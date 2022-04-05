import React from 'react'

const GreetingOne = (props) => {
    const {firstName, lastName, country} = props
  return (
    <div>
        <h2>{firstName} {lastName} is from {country}</h2>
    </div>
  )
}

export default GreetingOne