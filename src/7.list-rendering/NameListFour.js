import React from 'react'
import Person from './Person'

function NameListFour() {
    const persons =[
        {
            id: 1,
            name: 'Scott',
            age :45,
            skill: 'ReactJS'
        },
        {
            id: 2,
            name: 'Adam',
            age :43,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Tuan',
            age :41,
            skill: 'C#'
        },
        {
            id: 4,
            name: 'Uma',
            age :39,
            skill: 'JavaScript'
        },
    ]

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map(person => (<Person key={person.id} person={person} />))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NameListFour