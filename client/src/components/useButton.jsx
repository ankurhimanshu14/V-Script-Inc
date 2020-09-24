import React from 'react';

const Button = (props) => {
	return (
		<button
				className = { `btn btn-${props.type} btn-block` }
				onClick = { props.action } >
					{ props.title }
				</button>
	)
}

export default Button;