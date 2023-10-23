import React from 'react'
import '../styles/Sidebar.css'
import { Home } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
const Sidebar = () => {
    const items = [
        {
            icon:<Home  className = 'sidebar-button-icon' />,
            text:"Home"
        },
        {
            icon:<WifiTetheringIcon  className = 'sidebar-button-icon' />,
            text:"Live Session"
        },
        {
            icon:<FileUploadOutlinedIcon  className = 'sidebar-button-icon' />,
            text:"Upload  Video"
        },
        {
            icon:<WifiTetheringIcon  className = 'sidebar-button-icon' />,
            text:"Analyze Data"
        },
    ]
  return (
    <Box className='sidebar-container'>
        <Box className ='sidebar-logo'></Box>
        <Box>
            {items.map((item,index)=>(
                <Button variant = 'text' className = 'sidebar-button' key = {index}>
                    {item.icon}
                    {item.text}
                </Button>
            ))}
        </Box>
        <Button variant = 'text' className = 'sidebar-button'>
                    {<LogoutRoundedIcon className = 'sidebar-button-icon' />}
                    {"Logout"}
            </Button>
    </Box>
  )
}

export default Sidebar