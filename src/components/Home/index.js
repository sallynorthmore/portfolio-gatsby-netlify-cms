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
		hasAnimated: false,
		isContact: false,
		contactName: '',
		isScrolled: false,
		isTextDone: false,
	};

	componentDidMount = () => {
		if (this.props.location) {
			this.setState({
				hasAnimated: true,
				isContact: this.props.location.isContact,
				contactName: this.props.location.contactName,
			});
			this.handleTextLoaded();
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
		requestAnimationFrame(this.manageScroll);
	};

	manageScroll = () => {
		const y = window.scrollY;

		// Manage stuff that happens once scrolled down 200px
		if (y > 200 && !this.state.isScrolled) {
			this.setState(() => ({ isScrolled: true }));
		} else if (y < 200 && this.state.isScrolled) {
			this.setState(() => ({ isScrolled: false }));
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
		const { projects, location } = this.props;
		const {
			isContact,
			contactName,
			isScrolled,
			isTextDone,
			hasAnimated,
		} = this.state;

		const introHeight = isScrolled ? '50vh' : '100vh';

		const messageText = isContact
			? `Thanks for your message, ${contactName}`
			: null;
		const introText =
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
									<Banner location={location} />
								</animated.div>
							)}
						</Spring>
					)}
				</Header>
				{messageText && <Message message={messageText} />}
				<Spring
					native
					config={config.molasses}
					from={{ maxHeight: '100vh' }}
					to={{ maxHeight: introHeight }}
				>
					{props => (
						<animated.div
							style={{
								background: 'white',
								height: '100vh',
								left: 0,
								overflow: 'hidden',
								position: 'relative',
								width: '100%',
								zIndex: 2,
								...props,
							}}
						>
							<Intro>
								<div>
									<AnimatedText
										hasAnimated={hasAnimated}
										text={introText}
										onFinish={this.handleTextLoaded}
									/>
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
						</animated.div>
					)}
				</Spring>

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
	location: PropTypes.object,
};

export default Home;
