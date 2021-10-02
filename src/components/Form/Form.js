import React from 'react'
import { Link } from 'react-router-dom';

import "./Form.scss"

import Button from "../assets/Button/Button"
import Header from "../assets/Header/Header"
import MessageBox from "../assets/MessageBox/MessageBox"
import InputField from '../assets/InputField/InputField';


const Form = ({ formData, errors, refs, handleSubmit, isLoading }) => {

	const {name,
		inputs,
		message1,
		message2,
		link} = formData;

	// const inputsArray = inputs.map(input => {
	// 	return (
  //     <div className="inputBox" key={input.name}>
  //       <label className="inputBox__label">{input.label}</label>
  //       <input
  //       className="inputBox__input"
  //       name={input.name}
  //       type={input.type}
  //       ref={refs[input.name]}
  //       autoComplete="off"
  //       disabled={isLoading}
	// 	/>
  //       <p className="inputBox__error">{errors[input.name] && errors[input.name]}</p>
  //     </div>
  //   )
	// })

  const inputsArray = inputs.map(input => {
    return (
      <InputField 
      key={input.name}
      label={input.label}
      type={input.type}
      ref={refs[input.name]}
      isLoading={isLoading}
      error={errors[input.name]}/>
    )
  })


	return (
		<form className="form" onSubmit={handleSubmit}>
      <Header name={name}/>
			<div className="form__box">
				{inputsArray}
        <Button isLoading={isLoading}/>
			</div>
      <MessageBox
        message1={message1}
        message2={message2}
        link={link}
        isLoading={isLoading}/>
		</form>
	)
}

export default Form
