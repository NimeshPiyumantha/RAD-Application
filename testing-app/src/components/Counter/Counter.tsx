import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
        <div className=''>
            <h1>Counter : <span>0</span></h1>
            <div className='flex space-x-3 mt-5'>
                <button className='border border-green-600 px-4 py-2 text-green-600 font-semibold rounded-xl hover:bg-green-600 hover:text-white'>Increase</button>
            </div>
        </div>
    )
  }
}
