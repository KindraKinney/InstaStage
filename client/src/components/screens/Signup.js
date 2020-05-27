import React from "react"
import {Link} from "react-router-dom"
const Signup = () => {
    return (
        <div className="mycard">
        <div class="card auth-card">
            <h2>InstaStage</h2>
            
            <input
            type="text"
            placeholder="name"
            /><input
            type="text"
            placeholder="email"
            />
            <input
            type="text"
            placeholder="password"
            />
            <button className="btn waves-effect waves-light">Sign Up
    
  </button>
  <h5>
      <Link to="/login">Already have an account? Login Here</Link>
  </h5>
        </div>
      </div>
    )
}

export default Signup