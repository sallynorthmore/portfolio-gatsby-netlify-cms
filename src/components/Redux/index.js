import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a
			href="#"
			onClick={e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter,
	};
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch({
				type: 'SET_VISIBILITY_FILTER',
				filter: ownProps.filter,
			});
		},
	};
};
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

const Footer = () => (
	<p>
		Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
		{', '}
		<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
		{', '}
		<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
	</p>
);

const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none',
		}}
	>
		{text}
	</li>
);

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map(todo => (
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
		))}
	</ul>
);

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

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			return;
	}
};

//
// Using Connect
//
//
// mapStateToTodoListProps takes state from the store,
// and creates the props needed for the presentational component
// These props update any time the state changes
const mapStateToTodoListProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter),
	};
};

// mapDispatchToTodoListProps takes the store.dispatch method and creates
// the callback we can use in the todo click props
const mapDispatchToTodoListProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch({
				type: 'TOGGLE_TODO',
				id,
			});
		},
	};
};

// Here we create a container component — VisibleTodoList — using connect, passing in a
// presentational component we want to connect to the Redux Store (ie, TodoList)
const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default TodoApp;
