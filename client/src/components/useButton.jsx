import React from 'react';

const Button = (props) => {
	console.log(props.style);
	return (
		<button
				className = { props.type === 'primary' ? 'btn btn-primary btn-block' : 'btn btn-secondary btn-block' }
				onClick = { props.action } >
					{props.title }
				</button>
	)
}

export default Button;