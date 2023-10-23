import { styled } from '@mui/material/styles';
import {Button} from '@mui/material'
const OrangeButton = styled(Button)(() => ({
    color: 'white',
    boxShadow:'none',
    margin:'auto',
    backgroundColor:'#ff8800',
    fontFamily:'Oswald',
    fontSize:'25px',
    fontWeight:'300',
    padding:'5px 40px',
    ":hover":{
        boxShadow:'none',
        backgroundColor:'#ff7800',
        cursor:'pointer'
    }
  }))

  export default OrangeButton;