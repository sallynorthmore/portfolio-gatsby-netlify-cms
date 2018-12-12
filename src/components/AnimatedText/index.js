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
					config={(config.stiff, { delay: 1000 })}
					keys={() => randomize('Aa', 200)}
					items={text}
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
				>
					{item => ({ opacity }) => (
						<animated.span
							key={randomize('Aa', 100)}
							style={{
								opacity,
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
