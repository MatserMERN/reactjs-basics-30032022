import React, { Component } from 'react'

export class PostApi extends Component {
    constructor(){
        super()

        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }
  render() {
    return (
      <div>
          <h1>Lift of Posts </h1>
          {/* {
              this.state.posts.map(post => (
                  <ul key={post.id}>
                      <li>{post.id}</li>
                      <li>{post.title}</li>
                      <li>{post.body}</li>
                  </ul>
              ))
          } */}
          <table className="table">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Body</th>
                  </tr>
              </thead>
              <tbody>
                    {
                        this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
              </tbody>
          </table>
      </div>
    )
  }
}

export default PostApi