import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Loginpage from '../Authtentication/Loginpage'
import Registration from '../Authtentication/Registration'
import AddFirm from '../Components/Vendorcomponents/AddFirm'
import AddProducts from '../Components/Vendorcomponents/AddProducts'
import WelcomePage from './WelcomePage'
import AllProducts from '../Components/Vendorcomponents/AllProducts'





const Homepage = () => {

  const [showLogin , setShowLogin] = useState(false)
  const [showRegister , setShowRegister] = useState(false)
  const [showAddFirm , setShowAddFirm]  = useState(false)
  const [showAddProducts , setShowAddProducts ] = useState(false)
  const [showWelcomePage ,setShowWelcomePage] = useState(false)
  const [showAllProducts , setShowAllProducts] = useState(false)
  const [showLogOut , setShowLogOut ]  = useState(false)
  const [showFirmTitle , setShowFirmTitle] = useState(true)


  useEffect(()=> {
    const loginToken = localStorage.getItem('loginToken')
    if(loginToken){
      setShowLogOut(true)
    }

  },[])


  useEffect(()=>{
    const firmName = localStorage.getItem('firmName')
    if(firmName){
      setShowFirmTitle(false)
    }
  })

  const ShowLogOutHandler = () => {
    confirm('Are you sure to logout')
    localStorage.removeItem('firmName')
    localStorage.removeItem('loginToken')
    localStorage.removeItem('firmId')
    setShowLogOut(false)
    setShowFirmTitle(true)
  }
  

  const showLoginHandler =()=> {
        setShowLogin(true )
        setShowRegister(false)
        setShowAddFirm(false)
        setShowAddProducts(false)
        setShowWelcomePage(false)
        setShowAllProducts(false)
      
        
  }
  const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowAddFirm(false)
   setShowAddProducts(false)
   setShowWelcomePage(false)
   setShowAllProducts(false)
 
    
  }

  const  showAddFirmHandler =()=>{
    if(showLogOut){
    setShowLogin(false)
    setShowRegister(false)
    setShowAddFirm(true)
  setShowAddProducts(false)
  setShowWelcomePage(false)
  setShowAllProducts(false)
    }else{
      alert('please login')
      setShowLogin(true)
    }

  
  }
  
   const showAddProductsHandler = ()=>{
    if(showLogOut){
       setShowAddFirm(false)
       setShowLogin(false)
       setShowRegister(false)
       setShowAddProducts(true)
       setShowWelcomePage(false)
       setShowAllProducts(false)
    }else{
      alert('please login')
      setShowLogin(true);
    }
     
   }

   const showWelcomePageHandler = () => {
    setShowAddFirm(false)
    setShowAddProducts(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowWelcomePage(true)
    setShowAllProducts(false)
   }

   const showAllProductsHandler  = () =>{
    if(showLogOut){
    setShowAddFirm(false)
    setShowAddProducts(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowWelcomePage(false)
    setShowAllProducts(true)
    }else{
      alert('please login')
      setShowLogin(true)
    }
   }

  


  return (
    

    <div>
    <Navbar  showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler} 
     showLogOut={showLogOut} ShowLogOutHandler = {ShowLogOutHandler}
    />
    <div className="collection-section">
    <Sidebar showAddFirmHandler = {showAddFirmHandler} showAddProductsHandler = {showAddProductsHandler} 
            showAllProductsHandler = {showAllProductsHandler}
            showFirmTitle = {showFirmTitle}
    /> 
    {showLogin && <Loginpage showWelcomePageHandler = {showWelcomePageHandler} />}
    {showRegister && <Registration  showLoginHandler = {showLoginHandler}/>}
    {showAddFirm && showLogOut && <AddFirm/>}
    {showAddProducts &&  showLogOut && <AddProducts/>}
    {showAllProducts && showLogOut && <AllProducts/>}
    {showWelcomePage &&  <WelcomePage/>}
  
    
   
 
    </div>


    
   
  </div>
  
  )
}

export default Homepage