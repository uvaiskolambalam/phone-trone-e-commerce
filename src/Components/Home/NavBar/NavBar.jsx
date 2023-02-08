import React from 'react'
import './NavBar.css'
import logo from '../../../Assets/logo.png'
import user from '../../../Assets/user.jpg'


const NavBar = () => {
  return (
      <div className='NavBar'>
    
          <div className="NavBar-container">
              <div className="NavBar-left">
                  <img src={logo} alt="" />
                 
              </div>
              <div className="NavBar-right">
                  <div className='NavBar-right-icons'>
                      <i className="bi bi-cart3" ></i>
                      <span>1</span>
                      <i className="bi bi-heart" ></i>
                      <span>2</span>
                  </div>
                  <div className="profileImage">
                      <img src={user} alt="" />
                  </div>
                  
              </div>
          </div>
          
    </div>
  )
}

export default NavBar