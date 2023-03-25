import React, { Component } from 'react'
import AboutIntro from '../../components/AboutIntro'
import CardContainer from '../../components/CardContainer'

export default class About extends Component {
  render() {
    return (
      <div className='p-6'>
        <AboutIntro/>
       <CardContainer/>
      </div>
    )
  }
}
