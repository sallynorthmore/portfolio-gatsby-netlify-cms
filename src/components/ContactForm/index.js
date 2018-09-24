import React from 'react';
// import { ContactFormComponent, Form } from './styles';

const ContactForm = () => (
	<div>
		<form
			name="contact"
			method="POST"
			netlify="true"
			netlify-honeypot="bot-field"
			action="/success"
		>
			<input type="hidden" name="bot-field" />
			<p>
				<label>
					Your Name: <input type="text" name="name" />
				</label>
			</p>
			<p>
				<label>
					Your Email: <input type="email" name="email" />
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name="message" />
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	</div>
);

// <Link to="/about" className="Title">
// 	About
// </Link>

export default ContactForm;
