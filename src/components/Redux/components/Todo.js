import React from 'react';
import PropTypes from 'prop-types';

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

Todo.propTypes = {
	completed: PropTypes.bool,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Todo;
