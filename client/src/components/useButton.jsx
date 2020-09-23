import React from 'react';

const Button = (props) => {
	return (
		<button
				className = { props.type === 'primary' ? 'btn btn-primary btn-block' : 'btn btn-secondary btn-block' }
				onClick = { props.action } >
					{props.title }
				</button>
	)
}

export default Button;