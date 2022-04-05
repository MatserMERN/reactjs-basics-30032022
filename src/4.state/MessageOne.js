import React, { Component } from 'react'
import MessageChild from './MessageChild'

export class MessageOne extends Component {
    constructor(props) {
        super()
    let {name, city} = props
   
      this.state = {
        name: name,
        city: city
      }

    }

    changeName(){
        this.setState({
            name : "Desatnick"
        })
    }
  render() {
    //   console.log(this.state.name)
    //   console.log(`render method is called`)
    //     this.state.name = "Desatnick"
    const {name, city} = this.state
    return (
      <div>
          <h2>Name : {name}</h2>
          <h2>City : {city}</h2>
          <button className='btn btn-primary'
                  onClick={() => this.changeName()}
          >
              Change Name
          </button>

          <MessageChild name={this.state.name}/>
      </div>
    )
  }
}

export default MessageOne