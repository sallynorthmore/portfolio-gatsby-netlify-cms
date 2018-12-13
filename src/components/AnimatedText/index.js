import React from 'react';
import PropTypes from 'prop-types';
import { Inner } from './styles.js';
import randomize from 'randomatic';
import { Trail, animated, config } from 'react-spring';

function AnimatedText({ text }) {
	return (
		<Inner>
			<div>
				<Trail
					native
					config={{ delay: 500 }}
					keys={() => randomize('Aa', 200)}
					items={text}
					from={{ color: 'black' }}
					to={{ color: 'rgb(225, 72, 61)' }}
				>
					{item => ({ color }) => (
						<animated.span
							key={randomize('Aa', 100)}
							style={{
								color,
							}}
						>
							{item}
						</animated.span>
					)}
				</Trail>
			</div>
		</Inner>
	);
}

AnimatedText.propTypes = {
	text: PropTypes.array,
};

AnimatedText.defaultProps = {};

export default AnimatedText;
