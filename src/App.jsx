import React, { useRef } from 'react'
import logo from './assets/image 1.png'
import Landing from './Landing'
import Management from './Management'
import Mission from './Mission'
import Newsboard from './Newsboard'
import Vision from './Vision'
import background from './assets/Background-Final.png'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  return (  
    <div className='root-source'>
    <img src={background} alt="background" className='background' style={{height: `3015px`}}/>
    
    <Landing />
          <Mission />
          <Vision /> 
          <Management />
          <Newsboard />
          <div className='footer-god'>
          <div className="footer-footer">
    <div className='footer'> 
        <div className="footer-wrapper">
            <div className="left">
                <img src={logo} alt="" />
                <h1> CONTACTS</h1>
                <div className="socials-wrapper">
                <img src="https://picsum.photos/50" alt="logo" />
                <img src="https://picsum.photos/50" alt="logo" />
                <img src="https://picsum.photos/50" alt="logo" />
                <img src="https://picsum.photos/50" alt="logo" />
                </div>
                <p> EMAIL: ABCD@XYZ.COM</p>
            </div>
            <div className="right">
                <div className="acknowledgement">
                    <h1>CREDITS</h1>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut architecto expedita eaque delectus corrupti quo mollitia id iure quis magni minima quae ex officiis saepe nobis, enim dolorum quas tenetur recusandae et. Eligendi dolorem quas id? Laboriosam perferendis expedita facere consequuntur tempore veniam suscipit accusantium doloribus omnis esse, deleniti iure?</p>
                </div>
            </div>
        </div>


    </div>


    </div>

          </div>
    </div>
  )
}

export default App