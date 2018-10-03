import React from 'react';

let nextToDoId = 0;

export default class ToDoApp extends React.Component {
	render() {
		const { store } = this.props;
		return (
			<div>
				<h1>Hello Todo List!</h1>
				<button
					onClick={() => {
						store.dispatch({
							type: 'ADD_TODO',
							text: 'Test',
							id: nextToDoId++,
						});
					}}
				>
					Add ToDo
				</button>
			</div>
		);
	}
}
