import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            Page is not found. Return to <Link to='/'>main page</Link>?
          </div>
        </div>
      </div>
    )
  }
}
