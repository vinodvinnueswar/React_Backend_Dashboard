import React from 'react'

const Navbar = ({showLoginHandler , showRegisterHandler , showLogOut , ShowLogOutHandler}) => {


  const firmName = localStorage.getItem('firmName')

  return (
    <div className="Nav-Bar">
        <div className="left-Navbar">
            <h2>LOGO</h2>
        </div>
        <div className="firmname">
          <h2>FirmName : {firmName}</h2>
        </div>
        <div className="right-Navbar">
           {!showLogOut ? 
            <>
            <span onClick={showLoginHandler}>Login / </span>
            <span onClick={showRegisterHandler}>Register</span></>
            :  <span onClick={ShowLogOutHandler}>LogOut</span> }
           
        </div>
    </div>
  )
}

export default Navbar