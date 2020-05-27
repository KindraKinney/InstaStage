import React from 'react'

const NavBar = ()=> {
    return(
        <nav>
    <div className="nav-wrapper grey">
      <a href="/" className="brand-logo center">InstaStage</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>
  </nav>
        
    )

}

export default NavBar