import React from 'react'

function Person(props) {
  const {id,name, age, skill} = props.person
  return (
    <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{skill}</td>
    </tr>   
  )
}

export default Person