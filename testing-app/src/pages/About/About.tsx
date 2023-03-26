import React, { Component } from 'react'
import AboutIntro from '../../components/AboutIntro'
import CardContainer from '../../components/CardContainer'
import Header from "../../components/Header";

export default class About extends Component {
  render() {
    return (
        <>
            <Header/>
      <div className='p-6'>
        <AboutIntro/>
       <CardContainer/>
      </div>
        </>
    )
  }
}
