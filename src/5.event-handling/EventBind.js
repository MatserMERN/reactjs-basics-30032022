import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: 'Hello'
        }

        // 3rd Way
        this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }

    //4th way 
    changeMessage =() =>{
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
    
  render() {
      console.log('Render is called')
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button> */}

          {/* 1st way */}
          {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change Message</button> */}

          {/* 2nd way */}
          {/* <button className="btn btn-primary" onClick={() =>{this.changeMessage()}}>Change Message</button> */}

          {/* 3rd way */}
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button>*/}

          {/* 4th way */}
          <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button>           
      </div>
    )
  }
}

export default EventBind