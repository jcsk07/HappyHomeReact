import React from "react";

const dat=props=>{
	return(
		<div>
			<h3>This is the functional component</h3>
			<h4>you are the {props.name}</h4>
			<p>you are gonna complete the task{props.children}</p>
		</div>
		
	);
}

export default dat;