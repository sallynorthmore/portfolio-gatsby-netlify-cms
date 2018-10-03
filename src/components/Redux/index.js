import React from 'react';
import { createStore } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// My todos reducer
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					completed: false,
					text: action.text,
					id: action.id,
				},
			];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id !== action.id) {
					return todo;
				}

				return {
					...todo,
					completed: !todo.completed,
				};
			});
		default:
			return state;
	}
};

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: true,
		},
		{
			id: 1,
			text: 'Get rich',
			completed: false,
		},
	];

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: true,
		},
		{
			id: 1,
			text: 'Get rich',
			completed: true,
		},
	];

	const action = {
		type: 'TOGGLE_TODO',
		completed: true,
		id: 1,
	};
	deepFreeze(stateBefore);
	deepFreeze(action);

	// tets the todos reducer
	expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testAddTodo = () => {
	const stateBefore = [];
	const action = {
		type: 'ADD_TODO',
		text: 'Learn Redux',
		id: 0,
	};
	const stateAfter = [
		{
			completed: false,
			text: 'Learn Redux',
			id: 0,
		},
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	// tets the todos reducer
	expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();
console.log('All tests passed');

const ToDoList = () => <div />;

export default ToDoList;
