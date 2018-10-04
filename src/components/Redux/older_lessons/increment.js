import React from 'react';
import { createStore } from 'redux';
import { expect } from 'expect';
// import { ReduxComponent } from './styles';

const toggleTodo = todo => {
	// .assign is ES6 that allows you to change a specific node in the object , ie, "completed"
	return Object.assign({}, todo, {
		completed: !todo.completed,
	});

	// Another way to do that would be with the object spread
	// But you have to enable the state two preset in Babel
	// return {
	// 	...todo,
	// 	completed: !todo.completed
	// }
};

// Writing a test
const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false,
	};

	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true,
	};

	expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

// This is a reducer
const counter = (state = 0, action) => {
	console.log(`actions is ${action.type}`);
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state; // You must catch errors and just return the state
	}
};

const Counter = ({ value, onIncrement, onDecrement }) => (
	<div>
		<h2>Value is {value}</h2>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const store = createStore(counter);

const MyRender = () => (
	<div>
		<h1>Hello Redux</h1>
		<h2>Hello Redux</h2>
		<p>hello Redux</p>
		<Counter
			value={store.getState()}
			onIncrement={() => {
				console.log('increment');
				store.dispatch({
					type: 'INCREMENT',
				});
			}}
			onDecrement={() => {
				console.log('decrement');
				store.dispatch({
					type: 'DECREMENT',
				});
			}}
		/>
	</div>
);

store.subscribe(MyRender);
MyRender();

export default MyRender;
