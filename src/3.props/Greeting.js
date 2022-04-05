import React from 'react'

function Greeting(props) {
    console.log(props)
    const {id, name, email, isAdmin, skills, getName, countries} = props
    const {skill1, skill2} = skills
    const [country1, country2, country3] = countries
   console.log(skills)
  return (
    <div>
        <h2>id: {id}</h2>
        <h2>name: {name}</h2>
        <h2>email: {email}</h2>
        <h2>IsAdmin : {isAdmin? "true": "false"}</h2>
        <h2>Skill Set : {skill1} , {skill2}</h2>
        <h2>FullName: {getName()}</h2>
        <h2>CountryList : {country1}, {country2}, {country3},</h2>
        <br />
    </div>
  )
}

export default Greeting