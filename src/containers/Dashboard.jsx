import React, { useState } from 'react'
import Joyride from 'react-joyride';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Box, Typography } from '@mui/material'
import '../styles/Dashboard.css'
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import OrangeButton from '../components/mui/OrangeButtons';

const uData = [36, 11, 58, 74, 77, 69, 38, 54, 97, 12, 73, 44, 34, 43, 94, 95, 33, 83]
const pData = [12, 27, 87, 15, 63, 13, 41, 87, 71, 81, 92, 83, 93, 52, 53, 47, 88, 81]
const aData = [32, 81, 91, 16, 68, 65, 95, 93, 98, 69, 28, 89, 86, 48, 14, 28, 56, 1]
const dData = [99, 99, 65, 97, 74, 92, 45, 30, 81, 27, 47, 53, 76, 52, 45, 45, 13, 81]
const Dashboard = () => {



    return (
        <div>
            <Navbar />
            <Box className='dashboard' >
                <Sidebar className='dashboard-sidebar' />
                <Box className='DashboardContent'>
                    <Box className='line-chart'>
                        <Typography variant='h4'>Live Sessions</Typography>
                        <LineChart
                            height={300}
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