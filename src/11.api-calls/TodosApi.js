import React, { Component } from 'react'

export class TodosApi extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({todos: data}))
    }

  render() {
    return (
      <div>
          <h1>List of Todos</h1>
          <table className="table">
              <thead>
                  <tr>
                      <th>UserId</th>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Completed</th>
                  </tr>
              </thead>
              <tbody>
                {
                    this.state.todos.map(todo =>(
                        <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "true": "false"}</td>
                        </tr>
                    ))
                }
              </tbody>
          </table>
      </div>
    )
  }
}

export default TodosApi