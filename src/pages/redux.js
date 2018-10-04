import React from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import TodoApp from '../components/Redux';

//
const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false,
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed,
			};
		default:
			return state;
	}
};

// TODOS reducer
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, todo(undefined, action)];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
};

// VisibilityFilter reducer
const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

// App Reducer (combo of todos and visibilityFilter)
const todoApp = combineReducers({
	todos,
	visibilityFilter,
});

const ReduxLesson = () => (
	<Provider store={createStore(todoApp)}>
		<TodoApp />
	</Provider>
);

export default ReduxLesson;
