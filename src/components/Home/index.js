import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import Message from '../Message';
import Footer from '../Footer';
import { HomeComponent, Headline, Title, Projects } from './styles';

import {} from './styles';

class Home extends React.Component {
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

	render() {
		const { projects } = this.props;
		const { isContact, contactName } = this.state;

		const messageText = isContact
			? `Thanks for your message, ${contactName}`
			: null;

		return (
			<HomeComponent>
				{messageText && <Message message={messageText} />}

				<Headline>
					<span>
						I&rsquo;m a freelance frontend web developer living and working in
						London
					</span>
				</Headline>

				<Projects id="projects">
					<Title>
						<a href="#projects">Some things I&rsquo;ve built</a>
					</Title>

					<Grid items={projects} />
				</Projects>
				<Footer anchor="#projects" />
			</HomeComponent>
		);
	}
}

Home.propTypes = {
	projects: PropTypes.array,
	contactState: PropTypes.object,
};

export default Home;
