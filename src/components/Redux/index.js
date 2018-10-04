import React from 'react';

import Footer from './components/Footer.js';
import AddTodo from './containers/VisibleTodoList.js';
import VisibleTodoList from './containers/AddTodo.js';

const TodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default TodoApp;
