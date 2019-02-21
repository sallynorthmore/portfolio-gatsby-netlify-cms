import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import ContactForm from '../ContactForm';
import { ContactComponent, Form } from './styles';

const Contact = ({ content, contentComponent }) => {
	// const PageContent = contentComponent || Content;

	return (
		<ContactComponent>
			<Header isAnimated={false} />

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
