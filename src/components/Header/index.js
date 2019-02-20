import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import { Spring, animated } from 'react-spring';
import { Inner } from './styles';

function Header({ isAnimated, location, shouldAnimate }) {
	return (
		<Inner>
			{isAnimated && (
				<Spring
					native
					config={{ delay: 500 }}
					to={{
						transform: shouldAnimate ? 'translateY(0)' : 'translateY(-200px)',
					}}
				>
					{props => (
						<animated.div style={props}>
							<Banner location={location} />
						</animated.div>
					)}
				</Spring>
			)}
			{!isAnimated && <Banner location={location} shouldFade={false} />}
		</Inner>
	);
}

Header.propTypes = {
	shouldAnimate: PropTypes.bool,
	isAnimated: PropTypes.bool,
	location: PropTypes.object,
};

Header.defaultProps = {
	shouldAnimate: false,
	isAnimated: false,
	skipAnimation: false,
};

export default Header;
