import React from 'react'

import Loader from '../Loader/Loader'

const Button = ({ isLoading }) => {
  return (
    <button 
      className={isLoading ? "form__button form__button--disabled" : "form__button" }  
      type="submit"
      disabled={isLoading ? true : false}  
    >
      {isLoading ? <Loader/> : "Continue"}
    </button>
  )
}

export default Button
