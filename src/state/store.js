import { createStore as reduxCreateStore, combineReducers } from 'redux';

const initialState = {
	count: 0,
	hasVisitedHome: false,
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
		case 'VISITED_HOME':
			return Object.assign({}, state, {
				hasVisitedHome: true,
			});
		case 'SENT_CONTACT_FORM':
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
