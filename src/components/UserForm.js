import React, { useState, useRef } from 'react'

import Form from "./Form"

const validEmail = "dad@wp.pl";

const UserForm = ({ type, formData }) => {

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

    switch (type) {
      case "signIn":
        if (validEmail !== emailRef.current.value){
          errors.email = "Invalid email address"
        }
        setErrors(errors)
        break;

      case "signUp":
        if (!emailRef.current.value){
          errors.email = "Email is required"
        } 
        if (fullNameRef.current.value.trim().split(" ").length < 2){
          errors.fullName = "Missing last name"
        }
        if (!fullNameRef.current.value){
          errors.fullName = "Full name is required"
        } 
        if (passwordRef.current.value.length <= 8 ){
          errors.password = "Password is too short"
        }
        if (!passwordRef.current.value){
          errors.password = "Password is required"
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value){
          errors.confirmPassword = "Passwords do not matches"
        }
        if (!passwordRef.current.value){
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

    validation(type)

  }

  return (
    <div>
      <Form 
      formData={formData} 
      refs={refs}
      errors={errors}
      handleSubmit={handleSubmit}/>
    </div>
  )
}

export default UserForm
