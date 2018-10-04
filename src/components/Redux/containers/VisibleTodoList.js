import { connect } from 'react-redux';

import getVisibleTodos from '../reducers/getVisibleTodos';
import { toggleTodo } from '../actionCreators';

import TodoList from '../components/TodoList.js';

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
			dispatch(toggleTodo(id));
		},
	};
};

// Here we create a container component — VisibleTodoList — using connect, passing in a
// presentational component we want to connect to the Redux Store (ie, TodoList)
const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
