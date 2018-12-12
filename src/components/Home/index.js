import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import { Trail, animated, config } from 'react-spring';
import Grid from '../Grid';
import Message from '../Message';
import Footer from '../Footer';
import { HomeComponent, Headline, Title, Projects } from './styles';

import {} from './styles';

const AnimatedText = items => {
	return (
<div className="AnimatedText">
<Trail
config={config.gentle}
native
keys={() => randomize('Aa', 20)}
items={items}
from={{ opacity: 0, x: -100 }}
to={{ opacity: 1, x: 0 }}
>
{item => ({ x, opacity }) => (
<animated.div
key={randomize('Aa', 100)}
className="AnimatedText-text"
style={{
 opacity,
 transform: x.interpolate(x => `translate3d(0,${x}%,0)`),
}}
>
{item}
</animated.div>
)}
</Trail>
</div>
)
};

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
		const textArray = this.createString("I‘m a freelance frontend web developer. I live and work in London");

		return (
			<HomeComponent>
				{messageText && <Message message={messageText} />}

				<Headline>
					<span>
						<AnimatedText items={textArray} />
					</span>
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
