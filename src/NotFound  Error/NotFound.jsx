import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='error-Page'>
        <Link to='/' 
        style={{fontSize:'2.2rem' , color:'darkblue'}}
        
        > Go Back </Link>
        
        <h1>404</h1>
        <p>Page not found</p>
    </div>
  )
}

export default NotFound