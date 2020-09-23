import React from 'react';

const Table = (props) => {
	return (
        <div>
            <tr key={props.id}>
               <td>{props.col1}</td>
               <td>{props.col2}</td>
               <td>{props.col3}</td>
               <td>{props.col4}</td>
            </tr>
        </div>
  )
}

export default Table;