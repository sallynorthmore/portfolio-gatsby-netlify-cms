import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormComponent, Title, Label, Button } from './styles';

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

			<Label>
				Your Name: <input type="text" name="name" required />
			</Label>

			<Label>
				Your Email: <input type="email" name="email" required />
			</Label>

			<Label>
				Message: <textarea name="message" required />
			</Label>

			<Button type="submit">Send</Button>
		</form>
	</ContactFormComponent>
);

ContactForm.propTypes = {
	title: PropTypes.string,
};

export default ContactForm;
