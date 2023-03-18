import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className=''>
         <nav className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-600 font-Poppins">
            <div className='bg-red-500 w-full h-full'>
                <div className='flex w-full h-full items-center'>
                    <div className='w-1/2'>
                    <h1>Nimma</h1>
                    </div>
                    <div className='w-1/2'></div>
                </div>
            </div>
            
        </nav>
      </header>
    )
  }
}
