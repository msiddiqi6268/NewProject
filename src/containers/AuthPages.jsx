import React from 'react'
import { Box } from '@mui/material'
import '../styles/AuthPages.css'
import Login from './Login'
import Signup from './Signup'

const AuthPages = ({comp}) => {
  return (
    <div className='auth-container'>

            <Box className = 'auth-left-container'>
                {comp == 'login'?<Login />:<Signup />}
            </Box>
            <Box className ='auth-right-container'>
                <h1 className = 'auth-side-main-heading'>Know Your Surroundings</h1>
                <h1 className = 'auth-side-shadow-heading'>Like Never Before</h1>
                <p className = 'auth-side-description'>Our cutting-edge maps company offers you intuitive navigation, detailed geographic insights, and an immersive exploration experience. Whether you're an adventurer or an urban explorer, We guides you with precision and elegance, ensuring you always find your way.</p>
            </Box>
    </div>
  )
}

export default AuthPages