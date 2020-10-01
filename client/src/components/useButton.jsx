import React from 'react';

const Button = (props) => {
	return (
		<button
				className = { `btn btn-${props.variant} btn-${props.feature}` }
				type = { props.type }
				onClick = { props.onChange } >
					{ props.title }
				</button>
	)
}

export default Button;