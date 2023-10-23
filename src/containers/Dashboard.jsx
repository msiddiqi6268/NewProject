import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Box, Typography } from '@mui/material'
import '../styles/Dashboard.css'
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
function linspace(start, stop, num, endpoint = true) {
    const div = endpoint ? (num - 1) : num;
    const step = (stop - start) / div;
    return Array.from({ length: num }, (_, i) => start + step * i);
}

const uData = [1, 7, 3, 10, 6, 1, 4, 8, 2, 9, 0, 4, 4, 0, 9, 9, 6, 7, 6, 2, 6, 3, 3, 0, 9, 5, 5, 7, 6, 2, 8, 0, 6, 8, 0, 7, 0, 5, 9, 10, 7, 3, 1, 7, 7, 2, 2, 1, 9, 3, 2, 3, 7, 10, 2, 4, 0, 2, 1, 9, 1, 2, 4, 5, 1, 2, 10, 9, 6, 3, 7, 3, 9, 6, 6, 2, 4, 2, 5, 3, 6, 6, 8, 2, 5, 10, 5, 5, 6, 8, 8, 7, 6, 5, 5, 2, 2, 8, 9, 2, 10, 10, 8, 4, 6, 2, 10, 4, 0, 7, 4, 10, 6, 8, 8, 0, 1, 5, 3, 6, 6, 3, 9, 0, 9, 2, 2, 6, 2, 1, 5, 10, 9, 4, 7, 3, 10, 0, 10, 9, 2, 10, 10, 0, 9, 7, 8, 1, 5, 1, 9, 8, 0, 2, 7, 6, 9, 8, 7, 9, 8, 2, 9, 5, 9, 8, 10, 8, 4, 6, 7, 6, 1, 5, 10, 3, 3, 2, 9, 6, 2, 1, 2, 8, 4, 3, 10, 3, 5, 2, 4, 9, 2, 7, 3, 10, 4, 4, 5, 6]
const pData = [4, 8, 2, 6, 10, 3, 1, 9, 0, 1, 1, 5, 10, 2, 3, 8, 6, 5, 10, 5, 4, 0, 4, 1, 1, 0, 5, 4, 7, 0, 5, 10, 4, 6, 2, 5, 7, 10, 0, 7, 8, 9, 9, 8, 7, 2, 0, 9, 10, 1, 4, 8, 4, 5, 2, 0, 6, 9, 8, 1, 9, 5, 5, 9, 7, 3, 3, 2, 5, 9, 6, 3, 10, 5, 4, 5, 4, 4, 4, 3, 10, 9, 9, 3, 6, 2, 9, 0, 7, 4, 0, 7, 7, 4, 10, 9, 6, 7, 1, 8, 1, 2, 0, 4, 8, 1, 2, 2, 3, 10, 6, 10, 5, 5, 9, 0, 8, 3, 0, 9, 8, 5, 6, 0, 4, 7, 6, 0, 1, 2, 0, 7, 5, 10, 9, 2, 1, 6, 5, 6, 7, 7, 5, 0, 7, 2, 0, 4, 8, 7, 10, 4, 6, 5, 2, 10, 3, 10, 6, 10, 2, 7, 7, 4, 3, 6, 7, 7, 1, 4, 0, 1, 2, 3, 0, 0, 10, 7, 6, 10, 2, 3, 0, 3, 5, 1, 7, 8, 10, 7, 6, 3, 5, 1, 9, 0, 4, 10, 10, 7]
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Box className='dashboard' >
                <Sidebar />
                <Box className='DashboardContent'>
                    <Box className='line-chart'>
                <Typography variant='h4'>Live Sessions</Typography>
                        <LineChart
                            height={300}
                            series={[
                                { data: pData, label: 'pv' },
                                { data: uData, label: 'uv' },
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
                </Box>
            </Box>
        </div>
    )
}

export default Dashboard