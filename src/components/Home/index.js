import React from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';

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

	handleFooterClick = () => {
		scrollToComponent(this.Projects, {
			offset: 0,
			align: 'top',
			duration: 600,
			ease: 'inOutCirc',
		});
	};

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

				<Projects
					ref={section => {
						this.Projects = section;
					}}
				>
					<Title>Some things I&rsquo;ve built</Title>

					<Grid items={projects} />
				</Projects>
				<Footer handleClick={this.handleFooterClick} />
			</HomeComponent>
		);
	}
}

Home.propTypes = {
	projects: PropTypes.array,
	contactState: PropTypes.object,
};

export default Home;
