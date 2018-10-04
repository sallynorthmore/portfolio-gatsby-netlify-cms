import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actionCreators/';

// Here, we pass in the dispatch prop from the store
// And we use 'let', so that we can reassign it with a connect() method
let AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<input
				type="text"
				ref={node => {
					input = node;
				}}
			/>
			<button
				onClick={() => {
					dispatch(addTodo(input.value)); // using the action creator above
					input.value = '';
				}}
			>
				Add Todo
			</button>
		</div>
	);
};

// We basically make a container component that only passes in the dispatch method
// it doesn't subscribe to the store (ie, don't pass in any args to connect())
AddTodo = connect()(AddTodo);

export default AddTodo;
