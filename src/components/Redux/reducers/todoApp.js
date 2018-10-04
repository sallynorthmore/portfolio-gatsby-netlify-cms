import { combineReducers } from 'redux';

import visibilityFilter from './visibilityFilter';
import todos from './todos';

// App Reducer (combo of todos and visibilityFilter)
const todoApp = combineReducers({
	todos,
	visibilityFilter,
});

export default todoApp;
