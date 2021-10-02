import React from 'react'

import "./Layout.scss"

import Logo from '../assets/Logo/Logo'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Logo/>
      <div className="layout__container">
        {children}
      </div>
    </div>
  )
}

export default Layout
