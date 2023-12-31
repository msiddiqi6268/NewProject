import { styled } from '@mui/material/styles';
import {Button, FormControl, TextField, InputAdornment, IconButton} from '@mui/material'
const AuthInput =  ({ icon, ...props }) => {
    return (
      <TextField
        {...props}
        fullWidth
        InputProps={{
            sx : ({
                color:'white',
                backgroundColor:'#36393c',
                borderRadius:'10px',
                fontFamily:'oswald',
                fontSize:'15px',
                fontWeight:300, 
                letterSpacing:'1px'
        }),
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start" sx = {{color:'white', fontSize:'large'}}>
                {icon}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };

  export default AuthInput;