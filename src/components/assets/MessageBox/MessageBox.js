import React from 'react'
import { Link } from 'react-router-dom'

const MessageBox = ({message1, message2, link, isLoading}) => {
  return (
    <div className="form__messageBox">
    {message1}
      <Link 
      to={isLoading ? "#" : link} 
      className="form__messageBox--link"
      >{message2}</Link>
    </div>
  )
}

export default MessageBox
