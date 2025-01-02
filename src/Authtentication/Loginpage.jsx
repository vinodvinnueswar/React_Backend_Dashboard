import React, { useState } from 'react' 
import { API_URI } from '../helpers/ApiPath'



const Loginpage = ({showWelcomePageHandler}) => {
  
  const [email ,setEmail] = useState('')
  const [password , setPassword] = useState('')
  
  

  const LoginHandler = async(e)=>{
     e.preventDefault()
     try {
       const response = await fetch(`${API_URI}/vendor/login`,{
        method : 'POST',
        headers :{
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({email , password})
       })
        const data = await response.json();

       if(response.ok){
        alert('Login success');
        setEmail("")
        setPassword("")
        localStorage.setItem('loginToken' , data.token)
        showWelcomePageHandler()
       }
     
         
       const vendorId = data.vendorId;
       console.log('checking for VendorId:', vendorId) 
       const vendorResponse = await fetch(`${API_URI}/vendor/single-vendor/${vendorId}`)
        window.location.reload()
       const vendorData = await vendorResponse.json();
       if(vendorResponse.ok){
        const vendorFirmId = vendorData.vendorFirmId;
        const vendorFirmName = vendorData.vendor.firm[0].firmName;
        localStorage.setItem('firmId' , vendorFirmId);
        localStorage.setItem('firmName' , vendorFirmName);
       }


     } catch (error) {
       
      console.error(error);

     }
    
  }




  return (
    <div className="login-Auth">
        <h1>Login Page</h1>

        <div className="Form">
            <form onSubmit={LoginHandler}>
    
                <div>
                <label htmlFor="email">Email</label><br />
                <input type="text" name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                </div><br />

                <div>
                <label htmlFor="password">Password</label><br />
                <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                </div><br />

                <button className='btnSubmit' type="submit ">Submit</button><br />
                <div >Create Account  /  <a href='' >Register</a> </div>

            </form>

        </div>
    </div>
  )
}

export default Loginpage