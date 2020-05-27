import React from "react"
import {Link, useHistory} from "react-router-dom"


const Login = () => {
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = ()=>{
        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        M.toast({html: "invalid email", classes: "#c62828 red darken-3"})
        return
    }
    fetch("/login",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            password,
            email
        })
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }
            else{
                M.toast({html: "signedin success", classes: "#66bb6a green lighten-1"})
                history.push('/')
            }
    return (
        <div className="mycard">
        <div class="card auth-card">
            <h2>InstaStage</h2>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                
                Login
            </button>
  <h5>
      <Link to="/signup">Don't have an account? Signup Here</Link>
  </h5>
        </div>
      </div>
    )
}

export default Login