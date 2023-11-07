import React, { useState } from 'react'
import Joyride from 'react-joyride';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Box, Typography, IconButton } from '@mui/material'
import '../styles/Dashboard.css'
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import OrangeButton from '../components/mui/OrangeButtons';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Tooltip} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { Close } from '@mui/icons-material';
const uData = [36, 11, 58, 74, 77, 69, 38, 54, 97, 12, 73, 44, 34, 43, 94, 95, 33, 83]
const pData = [12, 27, 87, 15, 63, 13, 41, 87, 71, 81, 92, 83, 93, 52, 53, 47, 88, 81]
const aData = [32, 81, 91, 16, 68, 65, 95, 93, 98, 69, 28, 89, 86, 48, 14, 28, 56, 1]
const dData = [99, 99, 65, 97, 74, 92, 45, 30, 81, 27, 47, 53, 76, 52, 45, 45, 13, 81]
const Dashboard = () => {
    const [liveSessionFullScreen, SetLiveSessionFullScreen] = useState(false)


    return (
        <div>
            <Navbar />
            <Box className='dashboard' >
                <Sidebar className='dashboard-sidebar' />
                <Box className='DashboardContent'>
                    <Box className={liveSessionFullScreen?'line-chart full-screen-chart':'line-chart'}>
                        <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}><Typography variant='h4'>Live Sessions</Typography>
                        <Box>
                        <Tooltip title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip '>
                            <IconButton>
                                <InfoIcon sx={{color:'white'}} />
                            </IconButton>
                        </Tooltip>
                        <IconButton onClick = {()=>{
                            SetLiveSessionFullScreen(!liveSessionFullScreen)
                        }}>
                            {liveSessionFullScreen?
                            <CloseFullscreenIcon  sx={{color:'white'}}/>:<OpenInFullIcon sx={{color:'white'}} />}
                        </IconButton>
                        </Box>
                        </Box>
                        <LineChart
                            height={liveSessionFullScreen?700:300}
                            series={[
                                { data: pData, label: 'pv' },
                                { data: uData, label: 'uv' },
                                { data: aData, label: 'ad' },
                                { data: dData, label: 'dd' },
                            ]}
                        />
                    </Box>
                    <Box className='middle-boxes'>
                        <Box className='middle-box'>
                            <Typography variant='h4'>Live Sessions</Typography>
                            <Typography variant='h2'>32</Typography>
                        </Box>
                        <Box className='middle-box'>
                            <Typography variant='h4'>Live Sessions</Typography>
                            <Typography variant='h2'>32</Typography>
                        </Box>
                        <Box className='middle-box'>
                            <Typography variant='h4'>Live Sessions</Typography>
                            <Typography variant='h2'>32</Typography>
                        </Box>
                        <Box className='middle-box'>
                            <Typography variant='h4'>Live Sessions</Typography>
                            <Typography variant='h2'>32</Typography>
                        </Box>
                    </Box>
                    <Box className='bar-charts'>
                        <Box className='bar-chart'>
                            <Typography variant='h4'>Live Sessions</Typography>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                height={300}
                            />
                        </Box>
                        <Box className='bar-chart'>
                            <Typography variant='h4'>Live Sessions</Typography>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                height={300}
                            />
                        </Box>
                    </Box>
                    <OrangeButton sx={{ margin: 'auto' }}>Download Graphs</OrangeButton>
                </Box>
            </Box>
        </div>
    )
}

export default Dashboard