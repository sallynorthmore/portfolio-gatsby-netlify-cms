import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';
import AnimatedText from '../AnimatedText';
import Grid from '../Grid';
import Message from '../Message';
// import Footer from '../Footer';
import { FaArrowDown } from 'react-icons/fa';
import { HomeComponent, Headline, Title, Projects, DownArrow } from './styles';

import {} from './styles';

class Home extends Component {
	state = {
		isContact: false,
		contactName: '',
		isScrolled: false,
	};

	componentDidMount = () => {
		if (this.props.contactState) {
			this.setState({
				isContact: this.props.contactState.isContact,
				contactName: this.props.contactState.contactName,
			});
		}
		window.addEventListener('scroll', this.onScroll);
	};

	componentWillUnmount() {
		if (this.state.isContact) {
			this.setState({
				isContact: false,
				contactName: '',
			});
		}
		window.removeEventListener('scroll', this.onScroll);
	}

	scheduledAnimationFrame = null;

	onScroll = () => {
		// Prevent multiple rAF callbacks.
		if (this.scheduledAnimationFrame) {
			return;
		}
		this.scheduledAnimationFrame = true;
		requestAnimationFrame(this.manageDownButton);
	};

	manageDownButton = () => {
		const y = window.scrollY;
		if (y > 200 && !this.state.isScrolled) {
			this.setState(() => ({ isScrolled: true }));
		}
		this.scheduledAnimationFrame = false;
	};

	createString = string => {
		return string.split('');
	};

	render() {
		const { projects } = this.props;
		const { isContact, contactName, isScrolled } = this.state;

		const messageText = isContact
			? `Thanks for your message, ${contactName}`
			: null;
		const textArray = this.createString(
			'I’m a freelance frontend web developer. I live and work in London.'
		);

		return (
			<HomeComponent>
				{messageText && <Message message={messageText} />}

				<Headline>
					<AnimatedText text={textArray} />
				</Headline>

				{!isScrolled && (
					<Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
						{props => (
							<animated.div style={props}>
								<DownArrow isAnimated={!isScrolled}>
									<div>
										<FaArrowDown />
									</div>
								</DownArrow>
							</animated.div>
						)}
					</Spring>
				)}

				<div name="scroll-to-element">
					<Projects
						ref={section => {
							this.Projects = section;
						}}
					>
						<Title>Some things I&rsquo;ve built</Title>

						<Grid items={projects} />
					</Projects>
				</div>
			</HomeComponent>
		);
	}
}

Home.propTypes = {
	projects: PropTypes.array,
	contactState: PropTypes.object,
};

export default Home;
