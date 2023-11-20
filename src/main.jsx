import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from '../theme.js'
import { Provider } from 'react-redux';
import store from './redux/store';
import toast, { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme = {theme}>
    <App />
    <Toaster />
    </ThemeProvider>
   </Provider>
  </React.StrictMode>,
)
