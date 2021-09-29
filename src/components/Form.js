import React from 'react'
import { Link } from 'react-router-dom';

const Form = ({ formData, errors, refs, handleSubmit }) => {

	const {name,
		inputs,
		message1,
		message2,
		link} = formData;

	const inputsArray = inputs.map(input => {
		return (
      <div className="inputBox" key={input.name}>
        <label>{input.label}</label>
        <input
        name={input.name}
        type={input.type}
        ref={refs[input.name]}/>
        <p>{errors[input.name] && errors[input.name]}</p>
      </div>
    )
	})


	return (
		<form onSubmit={handleSubmit}>
			<h1>{name}</h1>
			<div className="formBox">
				{inputsArray}
				<button type="submit">Continue</button>
			</div>
			<div>
				{message1}
				<Link to={link}>{message2}</Link>
			</div>
		</form>
	)
}

export default Form
