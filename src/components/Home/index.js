import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spring, animated, config } from 'react-spring';
import Header from '../Header';
import AnimatedText from '../AnimatedText';
import Grid from '../Grid';
import Message from '../Message';
import { FaArrowDown } from 'react-icons/fa';
import {
	HomeComponent,
	Intro,
	DownArrow,
	Nav,
	Title,
	Projects,
} from './styles';

class Home extends Component {
	state = {
		hasAnimated: false,
		isContact: false,
		contactName: '',
		isScrolled: false,
		isTextDone: false,
		skipBannerAnimation: false,
	};

	componentDidMount = () => {
		if (this.props.hasVisitedHome) {
			this.setState({
				hasAnimated: true,
				skipBannerAnimation: true,
			});
		}

		if (this.props.hasContacted) {
			this.setState({
				isContact: true,
				contactName: this.props.contactName,
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
		this.props.logVisit();
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
			skipBannerAnimation,
		} = this.state;

		const introHeight = isScrolled ? '50vh' : '100vh';

		const messageText = isContact
			? `Thanks for your message, ${contactName}`
			: null;
		const introText =
			'I’m a freelance frontend web developer. I live and work in London.';

		return (
			<HomeComponent>
				<Header
					location={location}
					isAnimated={!skipBannerAnimation}
					shouldAnimate={isTextDone}
				/>
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
	contactName: PropTypes.string,
	hasVisitedHome: PropTypes.bool,
	hasContacted: PropTypes.bool,
	projects: PropTypes.array,
	location: PropTypes.object,
	logVisit: PropTypes.func,
};

const mapStateToProps = state => {
	return {
		hasContacted: state.logVisits.hasContacted,
		contactName: state.logVisits.contactName,
		hasVisitedHome: state.logVisits.hasVisitedHome,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logVisit: () => dispatch({ type: 'VISITED_HOME' }),
	};
};

const ConnectedHome = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default ConnectedHome;
