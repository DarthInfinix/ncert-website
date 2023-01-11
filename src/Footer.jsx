import React from 'react'
import './App.css'
import logo from './assets/image 1.png'
const Footer = () => {
  return (
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
  )
}

export default Footer