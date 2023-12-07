import React from 'react'
import Login from '../components/Auth/Login.js'
import Menu from '../components/Menu/Menu.js'
import Footer from '../components/Footer/Footer.js'

function login() {
  return (
    <div>
      <Menu />  
      <Login />
      <Footer />
    </div>
  )
}

export default login
