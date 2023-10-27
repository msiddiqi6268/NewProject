import React, { useState } from 'react'
import Joyride from 'react-joyride';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Box, Typography } from '@mui/material'
import '../styles/Dashboard.css'
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import OrangeButton from '../components/mui/OrangeButtons';
const LiveSession = () => {
  return (
    <div>
            <Navbar />
            <Box className='dashboard' >
                <Sidebar className='dashboard-sidebar' />
                <Box className='live-session-container'>
                    <Box className='live-session-input-container'>
                        <Box className = 'live-top-cont'>
                            <Typography variant= 'h1' sx ={{color:"white", textAlign:'center'}}>LIVE SESSION</Typography>
                        </Box>
                        <OrangeButton className ='retake-button'>Retake</OrangeButton>
                    </Box>
                    <Box className='snap-chart'>
                    <Box className = 'live-top-cont'>
                    <Typography variant='h4'>Snap Chart</Typography>
                    <BarChart
                                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                height={750}
                            />
                    </Box>
                    <Box sx = {{display:'flex', justifyContent:'center',
                    alignItems:'center', 
                }}>
                    <OrangeButton className ='retake-button'>Save</OrangeButton>
                    <OrangeButton className ='retake-button'>Analyze</OrangeButton>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </div>
  )
}

export default LiveSession