import React from 'react';
import { createStore } from 'redux';
// import { ReduxComponent } from './styles';

// This is a reducer
const counter = (state = 0, action) => {
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
		<Counter value={store.getState()} />
	</div>
);

store.subscribe(MyRender);
MyRender();

export default MyRender;
