import React from 'react';
import PropTypes from 'prop-types';

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

class FilterLink extends React.Component {
	// Subscribe to updates in the store inside the component
	componentDidMount() {
		const { store } = this.context;
		// Creates a method you can then use in unmount
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const { store } = this.context;
		const state = store.getState();

		return (
			<Link
				active={props.filter === state.visibilityFilter}
				onClick={() =>
					store.dispatch({
						type: 'SET_VISIBILITY_FILTER',
						filter: props.filter,
					})
				}
			>
				{props.children}
			</Link>
		);
	}
}

// You have to specify this is receiving context
FilterLink.contextTypes = {
	store: PropTypes.object,
};

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

// Here, the second argument is the store context
const AddTodo = (props, { store }) => {
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
					store.dispatch({
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

// You have to specify this is receiving context
AddTodo.contextTypes = {
	store: PropTypes.object,
};

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

class VisibleTodoList extends React.Component {
	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();

		return (
			<TodoList
				todos={getVisibleTodos(state.todos, state.visibilityFilter)}
				onTodoClick={id =>
					store.dispatch({
						type: 'TOGGLE_TODO',
						id,
					})
				}
			/>
		);
	}
}

// You have to specify this is receiving context
VisibleTodoList.contextTypes = {
	store: PropTypes.object,
};

const TodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default TodoApp;
