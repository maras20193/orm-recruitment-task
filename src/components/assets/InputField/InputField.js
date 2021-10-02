import React, { forwardRef } from 'react'


const InputField = forwardRef(({ name, label, type, isLoading, error}, ref) => {
  return (
    <div className="inputBox" key={name}>
        <label className="inputBox__label">{label}</label>
        <input
        className="inputBox__input"
        name={name}
        type={type}
        ref={ref}
        autoComplete="off"
        disabled={isLoading}
		/>
        <p className="inputBox__error">{error && error}</p>
      </div>
  )
}
)


export default InputField

