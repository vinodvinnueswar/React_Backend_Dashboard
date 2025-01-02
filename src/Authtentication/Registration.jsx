import React, { useState } from 'react'
import { API_URI } from '../helpers/ApiPath';  


const Registration = ({showLoginHandler}) => {

    const [username , setUserName] = useState();
    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();
    const [error  , setError] = useState();
    const [loading , setLoading] = useState();
   


    const handleSubmit = async(e) => {
       e.preventDefault();
       try {
          const response  = await fetch(`${API_URI}/vendor/register` ,{
            method:'POST',
            headers:{
              'Content-Type' :'application/json'
            },
            body: JSON.stringify({username,email,password})
          }) 

         const data = await response.json();
         if(response.ok){
          console.log(data);
          setUserName("")
          setEmail("")
          setPassword("")
          alert("vendor registered success")
          showLoginHandler()
         }

       } catch (error) {
        console.log("registeration failed", error);
        alert("Registeration failed"); 
        
       }
      

    }

    

  return (
    <div className="login-Auth">
        <h1>Register Page</h1>

        <div className="Form">
            <form  onSubmit={handleSubmit}>

            <div>
                <label htmlFor="username">Username</label><br />
                <input type="text" name="username"  value={username} onChange={(e) => setUserName(e.target.value)}/><br />
                </div><br />

                <div>
                <label htmlFor="email">Email</label><br />
                <input type="text" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                </div><br />

                <div>
                <label htmlFor="password">Password</label><br />
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                </div><br /><br /><br />

                <button className='btnSubmit'>Submit</button><br />
                <div >Already have an Account  / <a href="Loginpage">Login</a></div>

            </form>

        </div>
    </div>
  )
}

export default Registration