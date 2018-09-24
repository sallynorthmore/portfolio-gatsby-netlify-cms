import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormComponent, Title } from './styles';

const ContactForm = ({ title }) => (
	<ContactFormComponent>
		<Title>{title}</Title>
		<form
			name="contact"
			method="POST"
			netlify="true"
			netlify-honeypot="bot-field"
			action="/success"
		>
			<input type="hidden" name="bot-field" />

			<label>
				Your Name: <input type="text" name="name" />
			</label>

			<label>
				Your Email: <input type="email" name="email" />
			</label>

			<label>
				Message: <textarea name="message" />
			</label>

			<button type="submit">Send</button>
		</form>
	</ContactFormComponent>
);

ContactForm.propTypes = {
	title: PropTypes.string,
};

export default ContactForm;
