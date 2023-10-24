import React, { useState } from 'react'
import Joyride from 'react-joyride'
import 'intro.js/introjs.css';
import '../styles/Sidebar.css'
import { Home } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
const Sidebar = () => {
    const [runTour, setRunTour] = useState(true);
    const steps = [
        {
            target: '.sidebar-button:nth-child(1)',
            disableBeacon: true,
            content: <div className = 'tour-box'><h3>Take a quick tour around?</h3><p>Use dashboard panel to access more options.</p></div>,  
        },
        {
            target: '.sidebar-button:nth-child(2)',
            content: <div className = 'tour-box'><h3>Take a quick tour around?</h3><p>Use dashboard panel to access more options.</p></div>,  
        },
        {
            target: '.sidebar-button:nth-child(3)',
            content: <div className = 'tour-box'><h3>Take a quick tour around?</h3><p>Use dashboard panel to access more options.</p></div>,  
        },
        {
            target: '.sidebar-button:nth-child(4)',
            content: <div className = 'tour-box'><h3>Take a quick tour around?</h3><p>Use dashboard panel to access more options.</p></div>,  
        },
        
    ];
    const items = [
        {
            icon: <Home className='sidebar-button-icon' />,
            text: "Home"
        },
        {
            icon: <WifiTetheringIcon className='sidebar-button-icon' />,
            text: "Live Session"
        },
        {
            icon: <FileUploadOutlinedIcon className='sidebar-button-icon' />,
            text: "Upload  Video"
        },
        {
            icon: <WifiTetheringIcon className='sidebar-button-icon' />,
            text: "Analyze Data"
        },
    ]
    return (
        <Box className='sidebar-container'>

            <Box className='sidebar-logo'></Box>
            <Box>
                {items.map((item, index) => (
                    <Button variant='text' className={`sidebar-button tour-${index}`} key={index}>
                        {item.icon}
                        {item.text}
                    </Button>
                ))}
            </Box>
            <Button variant='text' className='sidebar-button'>
                {<LogoutRoundedIcon className='sidebar-button-icon' />}
                {"Logout"}
            </Button>
            <Joyride
                // enabled={true}
                steps={steps}
                run = {runTour}
                continuous
                disableBeaco = {true}
                styles={{
                    options: {
                    // color:'white',
                      arrowColor: '#0d8de9',
                      backgroundColor: '#0d8de9',
                      overlayColor: 'rgba(79, 26, 0, 0.4)',
                      primaryColor: 'var(--light-background)',
                      textColor: 'black',
                    }
                  }}
                // initialStep={0}
            />
        </Box>
    )
}

export default Sidebar