import React from 'react'
import Homepage from './Pages/Homepage'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import NotFound from './NotFound  Error/NotFound'

const App = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element = {<Homepage/>} />
       <Route path='/*' element = {<NotFound/>} /> 
     </Routes>
   
    </div>
  )
}

export default App