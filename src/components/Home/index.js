import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimatedText from '../AnimatedText';
import Grid from '../Grid';
import Message from '../Message';
import Footer from '../Footer';
import { HomeComponent, Headline, Title, Projects } from './styles';

import {} from './styles';

class Home extends Component {
	state = {
		isContact: false,
		contactName: '',
	};

	componentDidMount = () => {
		if (this.props.contactState) {
			this.setState({
				isContact: this.props.contactState.isContact,
				contactName: this.props.contactState.contactName,
			});
		}
	};

	componentWillUnmount() {
		if (this.state.isContact) {
			this.setState({
				isContact: false,
				contactName: '',
			});
		}
	}

	scrollTo = () => {
		// scroller.scrollTo('scroll-to-element', {
		// 	duration: 800,
		// 	delay: 0,
		// 	smooth: 'easeInOutQuart',
		// });
	};

	createString = string => {
		return string.split('');
	};

	render() {
		const { projects } = this.props;
		const { isContact, contactName } = this.state;

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

				<Footer to="scroll-to-element" handleClick={this.scrollTo} />
			</HomeComponent>
		);
	}
}

Home.propTypes = {
	projects: PropTypes.array,
	contactState: PropTypes.object,
};

export default Home;
