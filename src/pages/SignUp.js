import React from 'react'

import UserForm from "../components/UserForm"

const SignUp = () => {

  const formData = {
		name: "Sign Up",
		inputs: [
      {
      label: "E-mail address",
      name: "email",
      type: "email"
      },
      {
      label: "Full name",
      name: "fullName",
      type: "text"
      },
      {
      label: "Password",
      name: "password",
      type: "password"
      },
      {
      label: "Confirm your password",
      name: "confirmPassword",
      type: "password"
      }
    ],
		message1: "Already using our app?",
		message2: "Click here to sign in",
		link: "/SignIn"
	}

  return (
    <div>
      <UserForm 
      type="signUp"
      formData={formData}
      />
    </div>
  )
}

export default SignUp
