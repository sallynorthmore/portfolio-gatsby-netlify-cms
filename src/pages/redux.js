import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from '../components/Redux';

import todoApp from '../components/Redux/reducers/todoApp';

const ReduxLesson = () => (
	<Provider store={createStore(todoApp)}>
		<TodoApp />
	</Provider>
);

export default ReduxLesson;
