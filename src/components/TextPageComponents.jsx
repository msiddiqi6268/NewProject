import React, {useState, useRef, useEffect} from 'react'
import {Box, TextField, Typography} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import OrangeButton from './mui/OrangeButtons'
const TextPageComponents = ({setInputs,inputs, index}) => {
    const [disabledInput, setDisabledInput] = useState(true)
    const [completed , setCompleted] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const ref  = useRef(null)
    useEffect(() => {
      if (!disabledInput) {
        ref.current.focus();
      }
    }, [disabledInput]);
    const handleStartClick = ()=>{
        setDisabledInput(false)
    }
    const handleChange = (value)=>{
        setInputValue(value)
        console.log(disabledInput)
    }
    const handleStopClick = ()=>{
        setCompleted(true)
        setDisabledInput(true)
        inputs[index] = value;
        setInputs(value)
    }
  return (
    <div>
        <Box className="text-box" >
              <Box className="empty-container"></Box>
              <TextField
                onChange={(e) => handleChange(e.target.value)}
                sx={{
                  backgroundColor: 'var(--light-background)',
                  borderRadius: '5px',
                }}
                fullWidth
                disabled={disabledInput}
                inputRef={ref}
              />
              {!completed &&(inputs[index] === '' &&  disabledInput? (
                <OrangeButton onClick={() => handleStartClick()}>
                  Start
                </OrangeButton>
              ) : (
                <OrangeButton onClick={() => handleStopClick()}>
                  Stop
                </OrangeButton>
              ))}
              {completed ? (
                <DoneIcon sx={{ color: 'lightgreen', fontSize: '40px', margin: 'auto' }} />
              ) : null}
              {completed ? (
                <OrangeButton sx={{ backgroundColor: 'lightgreen' }}>Completed</OrangeButton>
              ) : (
                <OrangeButton sx={{ backgroundColor: 'red' }}>Incomplete</OrangeButton>
              )}
            </Box>
    </div>
  )
}

export default TextPageComponents