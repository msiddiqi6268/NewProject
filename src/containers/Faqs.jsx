import React from 'react'
import { Typography, Box } from '@mui/material'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Faqs = () => {
    return (
        <div>
            <Navbar />
            <Box className='dashboard' >
                <Sidebar className='dashboard-sidebar' />
                <Box className='DashboardContent'>
                    <Typography variant="h1" color='white'>This is FAQs Page</Typography>

                </Box>
            </Box>
        </div>
    )
}

export default Faqs