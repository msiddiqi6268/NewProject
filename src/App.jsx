import React from 'react'
import Home from './containers/home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import AuthPages from './containers/AuthPages'
import Dashboard from './containers/Dashboard'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = '/' element = {<Home />} />
      <Route exact path = '/login' element = {<AuthPages  comp = 'login' />} />
      <Route exact path = '/signup' element = {<AuthPages  comp = 'signup' />} />
      <Route exact path = '/dashboard' element = {<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App