import React from 'react'

import UserForm from "../components/UserForm/UserForm"

const SignIn = () => {

	const formData = {
		name: "Sign In",
		inputs: [
      {
      label: "E-mail address",
      name: "email",
      type: "text"
      },
      {
        label: "Password",
        name: "password",
        type: "password"
      }],
		message1: "Not a member yet?",
		message2: "Click here to create new account",
		link: "/SignUp"
	}

	return (
		<div>
			<UserForm 
				type="signIn" 
				formData={formData}
			/>
		</div>
	)
}

export default SignIn
