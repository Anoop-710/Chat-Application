import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  
  const [err,setErr] = React.useState(false); 

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault(); //To prevent reloading the page
    const email = e.target[0].value;
    const password = e.target[1].value;


   try {
    
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
   }catch (err) {
    setErr(true)
   } 
  };

   
  return (
    <div className="form-container">
        <div className="form-wrapper">
            <span className="logo">WeChat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
               <input type="email" placeholder='Email address' /> 
               <input type="password" placeholder='Password' /> 
               <button>Sign in</button> 
               {err && <span>Something went wrong</span>}
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link> </p>
        </div>
    </div>
  )
}

export default Login;