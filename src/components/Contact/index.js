import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import ContactForm from '../ContactForm';
import { ContactComponent, Form, Header } from './styles';

const Contact = ({ content, contentComponent }) => {
	// const PageContent = contentComponent || Content;

	return (
		<ContactComponent>
			<Header>
				<Banner />
			</Header>
			<Form>
				<ContactForm title="Please get in touch with me about contract and permanent opportunities" />
			</Form>
		</ContactComponent>
	);
};

Contact.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

export default Contact;
