import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import TodoApp from '../components/Redux';

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

const todoApp = combineReducers({
	todos,
	visibilityFilter,
});

// Higher order component, using context, to pass down store
class Provider extends React.Component {
	// Create context of 'store' for children and grandchildren
	getChildContext() {
		return {
			store: this.props.store,
		};
	}

	render() {
		return this.props.children;
	}
}

// You have to specify childContextTypes, when using context
Provider.childContextTypes = {
	store: PropTypes.object,
};

const ReduxLesson = () => (
	<Provider store={createStore(todoApp)}>
		<TodoApp />
	</Provider>
);

export default ReduxLesson;
