import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import backgroundBuildings from '../assets/Background/Background_1.png'
import mapBackground from '../assets/Background/Background_2.png'
import OrangeButton from '../components/mui/OrangeButtons'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <Box className='home-container'>
            <Box className = 'home-small-container upper'>
                <h1>Your Logo</h1>
            </Box>
            <Box className='home-small-container lower'
            // sx = {{width:'100%', height:'100%', backgroundColor:"#211a3e" }}
            >
                    <Typography className='home-headlines first-headline' variant='h3'>YOUR GATEWAY TO DYNAMIC INFOGRAPHIC MAPS</Typography>
                    <Typography className='home-headlines main-headline' variant='h1'>Chart Your Course</Typography>
                    <Typography className='home-headlines last-headline' variant='h3'>Discover the power of visual storytelling and data representation
                        Our state-of-the-art infographic maps software transforms
                        ordinary data into extraordinary narratives
                        making your information captivating and easy to understand.</Typography>

                    <Box sx={{
                        display:'flex',
                        flexWrap:'wrap',
                        gap:'20px'
                    }}>
                        <OrangeButton className = 'custom-button' variant = 'contained' onClick = {()=>{
                            navigate('/login')
                        }}>Login</OrangeButton>
                        <OrangeButton className = 'custom-button' variant = 'contained' onClick = {()=>{
                            navigate('/signup')
                        }}>Signup</OrangeButton>
                    </Box>

            </Box>
            <Box className = 'home-empty-container'>

            </Box>
        </Box>
    )
}

export default Home