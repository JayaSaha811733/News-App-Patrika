import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img style={{height:'50px', width:'50px'
      }} src={spinner} alt="spinner" />
      </div>
    )
  }
}

export default Spinner
