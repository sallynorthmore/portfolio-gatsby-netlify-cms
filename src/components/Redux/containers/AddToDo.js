import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
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
					dispatch({
						type: 'ADD_TODO',
						id: nextTodoId++,
						text: input.value,
					});
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
