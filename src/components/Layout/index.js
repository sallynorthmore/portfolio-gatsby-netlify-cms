import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { connect } from 'react-redux';
import { LayoutComponent } from './styles';

// const Counter = ({ count, increment, hasVisitedHome, logVisit }) => (
// 	<div>
// 		<p>Count: {count}</p>
// 		<button onClick={increment}>Increment</button>
// 		<p>
// 			Has visited home: {hasVisitedHome && 'TRUE'} {!hasVisitedHome && 'FALSE'}
// 		</p>
// 		<button onClick={logVisit}>Log Visit</button>
// 	</div>
// );
//
// Counter.propTypes = {
// 	count: PropTypes.number.isRequired,
// 	increment: PropTypes.func.isRequired,
// 	hasVisitedHome: PropTypes.bool.isRequired,
// 	logVisit: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = state => {
// 	return {
// 		count: state.counter.count,
// 		hasVisitedHome: state.logVisits.hasVisitedHome,
// 	};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({ type: 'INCREMENT' }),
// 		logVisit: () => dispatch({ type: 'VISITED_HOME' }),
// 	};
// };
//
// const ConnectedCounter = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Counter);

const TemplateWrapper = ({ children }) => (
	<LayoutComponent>
		<Helmet title="Sally Northmore" />

		{children}
	</LayoutComponent>
);

TemplateWrapper.propTypes = {
	children: PropTypes.node,
};

export default TemplateWrapper;
