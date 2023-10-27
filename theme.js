import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#131418',
      light:'white'
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#131418',
      paper: '#161a1e',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(222,222,222,0.54)',
      disabled: 'rgba(92,92,92,0.38)',
      hint: 'rgba(255,255,255,0.38)',
    },
  },
  icon:{
    color:'white',
  },
  typography: {
    fontFamily: 'oswald',
    fontWeight:200,
    h1: {
        fontSize: '6em', // Change the font size for h1
        fontWeight: '900',
        fontFamily: 'Product-Sans-Regular'
      },
      h2: {
        fontSize: '4em', 
        fontWeight:'900',
        color:'white',
        fontFamily: 'Product-Sans-Regular',
      },
      h3: {
        fontSize: '2.1em',
        fontFamily: 'Product-Sans-Regular',
      },
      h4:{
        fontSize:'1em',
        fontFamily:'lemon-milk',
        fontWeight:300,
        color:'var(--orange)'
      }
}
}); 

export default theme