import { createStore as reduxCreateStore, combineReducers } from 'redux';

const initialState = {
	count: 0,
	hasVisited: false,
	hasContacted: false,
};

const counter = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, {
				count: state.count + 1,
			});
		case 'DECREMENT':
			return Object.assign({}, state, {
				count: state.count - 1,
			});
		default:
			return state;
	}
};

const logVisits = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_VISIT':
			return Object.assign({}, state, {
				hasVisited: true,
			});
		case 'SEND_CONTACT_FORM':
			return Object.assign({}, state, {
				hasContacted: true,
				contactName: action.contactName,
			});
		default:
			return state;
	}
};

const myApp = combineReducers({
	counter,
	logVisits,
});

const createStore = () => reduxCreateStore(myApp);

export default createStore;
