import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Inner } from './styles.js';
import randomize from 'randomatic';
import { Trail, animated, config } from 'react-spring';

class AnimatedText extends Component {
	state = {
		isFinished: false,
	};

	componentWillMount = () => {
		this.txt = this.props.text;
	};

	componentDidMount = () => {
		if (this.typedEl === null) {
			setTimeout(this.typeWriter, 300);
		} else {
			this.typeWriter();
		}
	};

	i = 0;
	txt = null;
	speed = 100;

	typeWriter = () => {
		if (this.i < this.txt.length) {
			if (this.txt.charAt(this.i) === '.') {
				this.typedEl.innerHTML += this.txt.charAt(this.i);
				this.i++;
				setTimeout(this.typeWriter, this.speed * 10);
			} else {
				this.typedEl.innerHTML += this.txt.charAt(this.i);
				this.i++;
				setTimeout(this.typeWriter, this.speed);
			}

			if (this.i === this.txt.length - 1) {
				this.setState({
					isFinished: true,
				});
			}
		}
	};

	render() {
		const { isFinished, typedText } = this.state;
		return (
			<Inner isFinished={isFinished}>
				<div
					ref={el => {
						this.typedEl = el;
					}}
				>
					{' '}
					{typedText}
					{/*
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
					*/}
				</div>
			</Inner>
		);
	}
}

AnimatedText.propTypes = {
	text: PropTypes.array,
};

AnimatedText.defaultProps = {};

export default AnimatedText;
