import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Box, TextField, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import OrangeButton from '../components/mui/OrangeButtons';
import { Done } from '@mui/icons-material';

const TextPage = () => {
  const [inputs, setInputs] = useState(['', '', '']);
  const [disableInputs, setDisableInputs] = useState([true, true, true]);
  const [completed, setCompleted] = useState([false, false, false]);

  useEffect(() => {
    console.log('inputs changed', inputs);
  }, [inputs]);

  const handleInputChange = (value, newValue) => {
    const updatedInputs = [...inputs];
    updatedInputs[value] = newValue;
    setInputs(updatedInputs);
  };

  const handleStartClick = (value) => {
    const updatedDisableInputs = [...disableInputs];
    updatedDisableInputs[value] = false;
    setDisableInputs(updatedDisableInputs);
  };

  const handleStopClick = (value) => {
    const updatedDisableInputs = [...disableInputs];
    updatedDisableInputs[value] = true;
    setDisableInputs(updatedDisableInputs);

    const updatedCompleted = [...completed];
    updatedCompleted[value] = true;
    setCompleted(updatedCompleted);
  };

  return (
    <div>
      <Navbar />
      <Box className="dashboard">
        <Sidebar className="dashboard-sidebar" />
        <Box className="dashboard-main-content">
          {[0, 1, 2].map((value) => (
            <Box className="text-box" key={value}>
              <Box className="empty-container"></Box>
              <TextField
                onChange={(e) => handleInputChange(value, e.target.value)}
                sx={{
                  backgroundColor: 'var(--light-background)',
                  borderRadius: '5px',
                }}
                fullWidth
                disabled={disableInputs[value]}
              />
              {inputs[value] === '' ? (
                <OrangeButton onClick={() => handleStartClick(value)}>
                  Start
                </OrangeButton>
              ) : (
                <OrangeButton onClick={() => handleStopClick(value)}>
                  Stop
                </OrangeButton>
              )}
              {completed[value] ? (
                <DoneIcon sx={{ color: 'lightgreen', fontSize: '40px', margin: 'auto' }} />
              ) : null}
              {completed[value] ? (
                <OrangeButton sx={{ backgroundColor: 'lightgreen' }}>Completed</OrangeButton>
              ) : (
                <OrangeButton sx={{ backgroundColor: 'red' }}>Incomplete</OrangeButton>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default TextPage;
