import React, { useState, useRef } from 'react'
import Joyride from 'react-joyride';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Box, Typography } from '@mui/material'
import '../styles/Dashboard.css'
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import OrangeButton from '../components/mui/OrangeButtons';
const UploadVideo = () => {
    const [videoURL, setVideoURL] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef(null);

    const handleVideoUpload = (file) => {
        const reader = new FileReader();
        reader.onprogress = (e) => {
            if (e.lengthComputable) {
                const progress = (e.loaded / e.total) * 100;
                setUploadProgress(progress);
            }
        };

        reader.onload = (e) => {
            setVideoURL(e.target.result);
            setUploadProgress(0);
        };

        reader.readAsDataURL(file);
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleVideoUpload(file);
        }
    };
    return (
        <div>
            <Navbar />
            <Box className='dashboard' >
                <Sidebar className='dashboard-sidebar' />
                <Box className='dashboard-big-container'>
                    {videoURL ? (
                        <div>
                            <video controls width="100%" src={videoURL} />
                        </div>
                    ):
                    <div><h1 className='orange-heading'>
                    Embark on the journey of data visualization like never before
                </h1>
                <h1 className='white-heading'>
                    Upload your video
                </h1></div>
                    }
                    
                    <OrangeButton sx={{ margin: '10px auto' }}
                        onClick={handleUploadButtonClick}>
                        Upload Video
                        <input
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                        />
                    </OrangeButton>
                </Box>
            </Box>
        </div>
    )
}

export default UploadVideo