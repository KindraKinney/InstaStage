import React from "react"
import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div className="mycard">
        <div class="card auth-card">
            <h2>InstaStage</h2>
            <input
            type="text"
            placeholder="email"
            />
            <input
            type="text"
            placeholder="password"
            />
            <button className="btn waves-effect waves-light">Login
    
  </button>
  <h5>
      <Link to="/signup">Don't have an account? Signup Here</Link>
  </h5>
        </div>
      </div>
    )
}

export default Login