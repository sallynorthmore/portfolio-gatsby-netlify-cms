import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';
import AnimatedText from '../AnimatedText';
import Grid from '../Grid';
import Message from '../Message';
// import Footer from '../Footer';
import { FaArrowDown } from 'react-icons/fa';
import {
	HomeComponent,
	Headline,
	DownArrow,
	Nav,
	Title,
	Projects,
} from './styles';

import {} from './styles';

class Home extends Component {
	state = {
		isContact: false,
		contactName: '',
		isScrolled: false,
		isTextDone: false,
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
	// projectsEl = null;

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

	scrollToProjects = () => {
		window.scrollTo(0, window.innerHeight);
	};

	handleTextLoaded = () => {
		this.setState(() => ({ isTextDone: true }));
	};

	render() {
		const { projects } = this.props;
		const { isContact, contactName, isScrolled, isTextDone } = this.state;

		const messageText = isContact
			? `Thanks for your message, ${contactName}`
			: null;
		const textArray =
			'I’m a freelance frontend web developer. I live and work in London.';
		return (
			<HomeComponent>
				{messageText && <Message message={messageText} />}
				<Headline>
					<div>
						<AnimatedText text={textArray} onFinish={this.handleTextLoaded} />
					</div>

					{isTextDone && (
						<Nav onClick={this.scrollToProjects} isScrolled={isScrolled}>
							<DownArrow isAnimated={!isScrolled}>
								<div>
									<FaArrowDown />
								</div>
							</DownArrow>
						</Nav>
					)}
				</Headline>

				<Projects>
					<Title>Some things I&rsquo;ve built</Title>
					<Grid items={projects} />
				</Projects>
			</HomeComponent>
		);
	}
}

Home.propTypes = {
	projects: PropTypes.array,
	contactState: PropTypes.object,
};

export default Home;
