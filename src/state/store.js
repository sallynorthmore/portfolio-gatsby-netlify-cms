import { createStore as reduxCreateStore } from 'redux';

const myApp = (state, action) => {
	// console.log(`action is ${action.type}`);
	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, {
				count: state.count + 1,
			});
		case 'DECREMENT':
			return Object.assign({}, state, {
				count: state.count - 1,
			});
		case 'VISITED_HOME':
			return Object.assign({}, state, {
				hasVisitedHome: true,
			});
		case 'SENT_CONTACT_FORM':
			return Object.assign({}, state, {
				hasContacted: true,
			});
		default:
			return state;
	}
};

const initialState = { count: 0, hasVisitedHome: false };

const createStore = () => reduxCreateStore(myApp, initialState);

export default createStore;

//
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// };
//
// const store = createStore(counter);
// const render = () => {
// 	// document.body.innerText = store.getState();
// 	console.log(`get state = ${store.getState()}`);
// };
// store.subscribe(render);
// render();
// document.addEventListener('click', () => {
// 	store.dispatch({ type: 'INCREMENT' });
// });
