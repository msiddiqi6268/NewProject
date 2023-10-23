import React from 'react'
import { Box,FormControlLabel, Checkbox, Typography, IconButton} from '@mui/material'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import AuthInput from '../components/mui/AuthInput';
import { Link, useNavigate } from 'react-router-dom';
import OrangeButton from '../components/mui/OrangeButtons';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const Signup = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className='auth-heading'>Register</h1>
            <Box className='input-container'>
                <label className='input-label'>Username:</label>
                <AuthInput
                    icon={<PersonRoundedIcon />}
                    variant="outlined"
                />
            </Box>
            <Box className='input-container'>
                <label className='input-label'>Email:</label>
                <AuthInput
                    icon={<PersonRoundedIcon />}
                    variant="outlined"
                />
            </Box>
            <Box className='input-container'>
                <label className='input-label'>Phone:</label>
                <AuthInput
                    icon={<PersonRoundedIcon />}
                    variant="outlined"
                />
            </Box>
            <Box className='input-container'>
                <label className='input-label'>Password:</label>
                <AuthInput
                    type='password'
                    icon={<HttpsRoundedIcon />}
                    variant="outlined"
                />
            </Box>
            <Box className='input-container'>
                <label className='input-label'>Confirm Password:</label>
                <AuthInput
                    type='password'
                    icon={<HttpsRoundedIcon />}
                    variant="outlined"
                />
            </Box>
            <OrangeButton>Register</OrangeButton>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: 'auto'
            }}>
                <Typography variant='body2'>Already have an account?</Typography>
                <OrangeButton sx={{ padding: '5px 40px', fontSize: '16px' }}
                onClick = {()=>{
                    navigate('/login')
            }}
                >Login</OrangeButton>
            </Box>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>OR</Typography>
            <Box className='auth-social-icons'>
                <IconButton sx={{
                    fontSize: '40px'
                }}>
                    <FacebookOutlinedIcon sx={{ fontSize: '60px' }} className='auth-social-icon' />
                    <GoogleIcon sx={{ fontSize: '60px' }} className='auth-social-icon' />

                </IconButton>
            </Box>
            
        </>
    )
}

export default Signup