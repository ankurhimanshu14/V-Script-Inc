import React from 'react';

const Checkbox = (props) => {
	return(
<<<<<<< HEAD
    <div className = "form-group">
      <input
        id = { props.name}
        name = {props.name}
        type = "checkbox"
        value = {props.value}
        onChange = {props.handleChange}
        placeholder = {props.placeholder}
        {...props} />
=======

    <div className="form-check form-check-inline">
            <input 
            className="form-check-input"
            type="checkbox"
            id={props.name}
            name={props.name}
            onChange={props.handleChange}
            value={props.value} />
      <label className="form-check-label" for={props.name}>{props.title}</label>
>>>>>>> 1f0cc3b6c777b2fad2d1de53f8076ddf1751655a
    </div>
  );

}

export default Checkbox;