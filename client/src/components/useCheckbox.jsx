import React from 'react';

const Checkbox = (props) => {
	return(
    <div className = "form-group">
      <input
        className = "form-control"
        id = { props.name}
        name = {props.name}
        type = "checkbox"
        value = {props.value}
        onChange = {props.handleChange}
        placeholder = {props.placeholder}
        {...props} />
    </div>
  );

}

export default Checkbox;