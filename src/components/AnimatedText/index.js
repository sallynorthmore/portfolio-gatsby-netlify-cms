import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Inner } from './styles.js';

class AnimatedText extends Component {
	state = {
		isFinished: false,
	};

	componentWillMount = () => {
		this.txt = this.props.text;
	};

	componentDidMount = () => {
		setTimeout(this.typeWriter, 800);
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

			if (this.i === this.txt.length) {
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
