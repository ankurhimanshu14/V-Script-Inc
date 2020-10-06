import React from 'react';

const Input = (props) => {
	return (
    <div className = "form-group">
      <input
        className = "form-control form-control-sm"
        id = { props.name}
        name = {props.name}
        type = {props.type}
        value = {props.value}
        onChange = {props.handleChange}
        placeholder = {props.placeholder}
        {...props} />
    </div>
  )
}

export default Input;