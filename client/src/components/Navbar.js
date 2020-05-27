import React from 'react'
import {Link} from "react-router-dom"
const NavBar = ()=> {
    return(
        <nav>
    <div className="nav-wrapper grey">
      <Link to="/" className="brand-logo center">InstaStage</Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
        
    )

}

export default NavBar