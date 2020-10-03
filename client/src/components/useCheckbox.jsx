import React from 'react';

const Checkbox = (props) => {
	return(

    <div className="form-check form-check-inline">
            <input 
            className="form-check-input"
            type="checkbox"
            id={props.name}
            name={props.name}
            onChange={props.handleChange}
            value={props.value} />
      <label className="form-check-label" for={props.name}>{props.title}</label>
    </div>
  );

}

export default Checkbox;