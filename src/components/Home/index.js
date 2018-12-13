import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring, animated, config } from 'react-spring';
import Banner from '../Banner';
import AnimatedText from '../AnimatedText';
import Grid from '../Grid';
import Message from '../Message';
import { FaArrowDown } from 'react-icons/fa';
import {
	HomeComponent,
	Header,
	Intro,
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
				<Header>
					{isTextDone && (
						<Spring
							native
							config={{ delay: 500 }}
							from={{ transform: 'translateY(-200px)' }}
							to={{ transform: 'translateY(0)' }}
						>
							{props => (
								<animated.div style={props}>
									<Banner />
								</animated.div>
							)}
						</Spring>
					)}
				</Header>

				{messageText && <Message message={messageText} />}
				<Intro>
					<div>
						<AnimatedText text={textArray} onFinish={this.handleTextLoaded} />
					</div>

					{isTextDone && (
						<Nav onClick={this.scrollToProjects} isScrolled={isScrolled}>
							<Spring
								native
								config={{ delay: 500 }}
								from={{ transform: 'translateY(200px)' }}
								to={{ transform: 'translateY(0)' }}
							>
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
						</Nav>
					)}
				</Intro>

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
