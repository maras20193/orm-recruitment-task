import React from 'react'

import Logo from './Logo'

const Layout = ({children}) => {
  return (
    <>
      <div>jestem lajou</div>
      <Logo/>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
