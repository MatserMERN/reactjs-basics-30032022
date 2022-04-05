import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('Button Click from Class Compoent')
    }
  render() {
    return (
      <div>
          <button className="btn btn-primary"
                  onClick={this.clickHandler}
          >Try Me</button>
      </div>
    )
  }
}

export default ClassClick