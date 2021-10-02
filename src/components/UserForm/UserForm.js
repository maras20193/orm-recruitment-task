import React, { useState, useRef } from 'react'

import Form from "../Form/Form"

// const validEmail = "dad@wp.pl";

const UserForm = ({ type, formData }) => {

  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  })

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const fullNameRef = useRef();

  const refs = {
    email: emailRef,
    password: passwordRef,
    confirmPassword: confirmPasswordRef,
    fullName: fullNameRef
  }


  const validation = (type) => {
    
    setErrors({})

    const errors = {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
    }

    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    switch (type) {
      case "signIn":
        if (!emailRef.current.value.match(reg) ){
          errors.email = "Invalid email address"
        }
        setErrors(errors)
        break;

      case "signUp":
        if (!emailRef.current.value.match(reg)){
          errors.email = "Invalid email address"
        } 
        if (!emailRef.current.value){
          errors.email = "Email is required"
        } 
        if (fullNameRef.current.value.trim().split(" ").length < 2){
          errors.fullName = "Missing last name"
        }
        if (!fullNameRef.current.value){
          errors.fullName = "Full name is required"
        } 
        if (passwordRef.current.value.length < 8 ){
          errors.password = "Password is too short"
        }
        if (!passwordRef.current.value){
          errors.password = "Password is required"
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value || !confirmPasswordRef.current.value){
          errors.confirmPassword = "Please confirm your password"
        }

        setErrors(errors)
        break;
      default:
        return
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true)

    setTimeout(() => {
      validation(type);
      setIsLoading(false)
    }, 1500);
    

  }

  return (
    <div>
      <Form 
      formData={formData} 
      refs={refs}
      errors={errors}
      handleSubmit={handleSubmit}
      isLoading={isLoading}/>
    </div>
  )
}

export default UserForm
