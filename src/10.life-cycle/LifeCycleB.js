import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()

        this.state = {

        }

        console.log('Constructor of LifeCycleB is called')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifeCycleB is called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of LifeCycleB is called')
    }
  render() {
    console.log('render of LifeCycleB is called')
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB