import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Box, Typography } from '@mui/material';
import TextPageComponents from '../components/TextPageComponents';
const TextPage = () => {
  const [inputs, setInputs] = useState(['', '', '']);
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  return (
    <div>
      <Navbar />
      <Box className="dashboard">
      
        <Sidebar className="dashboard-sidebar" />
        <Box>
          <Typography variant = 'h2' sx={{ textAlign: 'center' }} >The Sample Heading</Typography>
          <Box className = 'dashboard-main-content'>
          {[1,2,3].map((value,index)=>(
            <TextPageComponents inputs = {inputs} index ={index} 
            key = {index} setInputs = {setInputs}  /> 
          ))}
          </Box>
          
        </Box>
      </Box>
    </div>
  );
};

export default TextPage;
