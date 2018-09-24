import React from 'react';
// import { Link } from 'gatsby';
// import logo from '../img/logo.svg'
import { ContactFormComponent, Form } from './styles';

const ContactForm = () => (
	<ContactFormComponent>
		<Form
			data-netlify-honeypot="bot-field"
			data-netlify="true"
			method="post"
			name="contact"
		>
			<label htmlFor="name">Your name</label>
			<input name="name" placeholder="Your name" type="text" />
			<label htmlFor="email">Your email</label>
			<input name="email" placeholder="Your email" type="email" />
			<label htmlFor="message">Your message</label>
			<textarea name="message" />
			<button>Send</button>
		</Form>
	</ContactFormComponent>
);

// <Link to="/about" className="Title">
// 	About
// </Link>

export default ContactForm;
