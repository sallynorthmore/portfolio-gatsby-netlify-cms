import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo.js';

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map(todo => (
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
		))}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.array,
	onTodoClick: PropTypes.func,
};

export default TodoList;
